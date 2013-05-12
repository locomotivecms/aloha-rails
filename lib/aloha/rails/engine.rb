module Aloha
  module Rails
    class Engine < ::Rails::Engine
      initializer 'precompile', group: :all do |app|
        app.config.assets.precompile += ['aloha.js', 'aloha/css/aloha.css']
      end
    end
  end
end