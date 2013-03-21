require 'rubygems'
require 'rake'
require 'rubygems/package_task'

$:.push File.expand_path('../lib', __FILE__)
require 'aloha/rails/version'

gemspec = eval(File.read('locomotive-aloha-rails.gemspec'))
Gem::PackageTask.new(gemspec) do |pkg|
  pkg.gem_spec = gemspec
end

desc 'build the gem and release it to rubygems.org'
task :release => :gem do
  sh "gem push pkg/locomotive-aloha-rails-#{Aloha::Rails::VERSION}.gem"
end

def step(name)
  print "#{name} ..."
  yield
  puts " DONE"
end

def download(url, filename)
  puts "Downloading #{url} ..."
  `mkdir -p tmp`
  `curl -L -# #{url} -o tmp/#{filename}`
end

desc "Update Aloha Editor to version specified in lib/aloha/rails/version.rb"
task :update => [ :fetch, :extract, :process ]

task :fetch do
  download("https://github.com/alohaeditor/Aloha-Editor/archive/alohaeditor-#{Aloha::VERSION}.zip", "alohaeditor.zip")
end

task :extract do
  step "Extracting core files" do
    `rm -rf tmp/aloha`
    `unzip -u tmp/alohaeditor.zip -d tmp`
    `mv tmp/Aloha-Editor-alohaeditor-#{Aloha::VERSION}/src tmp/aloha`
    `rm -rf tmp/Aloha-Editor-alohaeditor-#{Aloha::VERSION}`

    %w(package.json).each { |file| `rm tmp/aloha/#{file}` }
    %w(demo test plugins/extra/speak plugins/extra/flag-icons plugins/extra/googletranslate plugins/extra/wai-lang plugins/extra/zemanta plugins/extra/proxy).each { |folder| `rm -rf tmp/aloha/#{folder}` }
    %w(1.5.1 1.6.1 1.6 1.7.1).each { |version| `rm tmp/aloha/lib/vendor/jquery-#{version}.js` }
    Dir['tmp/aloha/**/demo'].each { |file| `rm -rf #{file}` if File.directory?(file) }
    Dir['tmp/aloha/**/test'].each { |file| `rm -rf #{file}` if File.directory?(file) }

    `rm -rf vendor/assets/javascripts/aloha`
    `mkdir -p vendor/assets/javascripts/aloha`
    `mv tmp/aloha vendor/assets/javascripts/.`
  end
end

task :process do
  step "Fixing file encoding" do
    Dir["vendor/assets/javascripts/aloha/**/*.js"].each do |file|
      contents = File.read(file).encode('UTF-8', 'ISO-8859-1')
      File.open(file, 'w') { |f| f.write(contents) }
    end
  end
  step "Wrong color in the aloha.css file" do
    file = 'vendor/assets/javascripts/aloha/css/aloha.css'
    content = File.read(file)
    content.gsub!('#NaNbbaaNaN00NaN00NaN00NaN00NaN', '#000')
    File.open(file, 'w') { |f| f.write(content) }
  end
end
