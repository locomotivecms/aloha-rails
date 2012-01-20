unless defined? Aloha::VERSION
  $:.unshift File.expand_path("../lib", __FILE__)
  require "aloha/version"
end

Gem::Specification.new do |s|
  s.name        = "locomotive-aloha-rails"
  s.version     = Aloha::VERSION
  s.summary     = "Rails 3.1 integration for Aloha Editor."
  s.description = "Seamlessly integrates Aloha Editor into the Rails 3.1 asset pipeline."
  s.homepage    = "https://github.com/locomotivecms/aloha-rails"
  s.files       = Dir["README.md", "LICENSE", "Rakefile", "assets/**/*", "lib/**/*"]
  s.authors     = ["Didier Lafforgue"]
  s.email       = "didier.lafforgue@gmail.com"

  s.add_dependency "railties",  ">= 3.1"
end