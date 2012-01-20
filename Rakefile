require 'rubygems'
require 'rake'
require 'rubygems/package_task'

gemspec = eval(File.read('locomotive-aloha-rails.gemspec'))
Gem::PackageTask.new(gemspec) do |pkg|
  pkg.gem_spec = gemspec
end

unless defined? Aloha::VERSION
  $:.unshift File.expand_path("../lib", __FILE__)
  require "aloha/version"
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

desc "Update Aloha Editor to version specified in lib/tinymce/version.rb"
task :update => [ :fetch, :extract, :process ]

task :fetch do
  download("https://github.com/downloads/alohaeditor/Aloha-Editor/alohaeditor-#{Aloha::ALOHA_EDITOR_VERSION}.zip", "alohaeditor.zip")
end

task :extract do
  step "Extracting core files" do
    `rm -rf tmp/aloha`
    `unzip -u tmp/alohaeditor.zip -d tmp`

    %w(build.txt package.json).each { |file| `rm tmp/aloha/#{file}` }
    %w(demo test).each { |folder| `rm -rf tmp/aloha/#{folder}` }

    `rm -rf assets/vendor/aloha`
    `mkdir -p assets/vendor/aloha`
    `mv tmp/aloha assets/vendor/.`
  end
end

task :process do
  step "Fixing file encoding" do
    require 'iconv'
    converter = Iconv.new('UTF-8', 'ISO-8859-1')
    Dir["assets/vendor/aloha/**/*.js"].each do |file|
      contents = converter.iconv(File.read(file)).force_encoding('UTF-8')
      File.open(file, 'w') { |f| f.write(contents) }
    end
  end
end
