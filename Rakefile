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
  download("https://github.com/downloads/alohaeditor/Aloha-Editor/alohaeditor-#{Aloha::VERSION}.zip", "alohaeditor.zip")
end

task :extract do
  step "Extracting core files" do
    `rm -rf tmp/aloha`
    `unzip -u tmp/alohaeditor.zip -d tmp`

    %w(build.txt package.json plugins/extra/browser/css/browsercombined.css.backup).each { |file| `rm tmp/aloha/#{file}` }
    %w(demo test plugins/extra/speak plugins/extra/flag-icons plugins/extra/googletranslate plugins/extra/wai-lang plugins/extra/zemanta).each { |folder| `rm -rf tmp/aloha/#{folder}` }

    `rm -rf vendor/assets/javascripts/aloha`
    `mkdir -p vendor/assets/javascripts/aloha`
    `mv tmp/aloha vendor/assets/javascripts/.`
  end
end

task :process do
  step "Fixing file encoding" do
    require 'iconv'
    converter = Iconv.new('UTF-8', 'ISO-8859-1')
    Dir["vendor/assets/javascripts/aloha/**/*.js"].each do |file|
      contents = converter.iconv(File.read(file)).force_encoding('UTF-8')
      File.open(file, 'w') { |f| f.write(contents) }
    end
  end
end
