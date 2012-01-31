# -*- encoding: utf-8 -*-
$:.push File.expand_path('../lib', __FILE__)
require 'aloha/rails/version'

Gem::Specification.new do |s|
  s.name        = 'locomotive-aloha-rails'
  s.version     = Aloha::Rails::VERSION
  s.summary     = 'Rails 3.1 integration for Aloha Editor.'
  s.description = 'Seamlessly integrates Aloha Editor into the Rails 3.1 asset pipeline.'
  s.homepage    = 'https://github.com/locomotivecms/aloha-rails'
  s.files       = Dir['README.md', 'LICENSE', 'Rakefile', 'app/**/*', 'lib/**/*', 'vendor/**/*']
  s.authors     = ['Didier Lafforgue']
  s.email       = 'didier.lafforgue@gmail.com'

  s.add_dependency 'actionpack',  '~> 3.2.1'

  s.add_development_dependency 'rake', '0.9.2'
end