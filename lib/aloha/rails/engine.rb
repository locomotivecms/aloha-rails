module Aloha
  module Rails
    class Engine < ::Rails::Engine
      initializer 'precompile', :group => :all do |app|
        app.config.assets.precompile << 'aloha.js'
      end
    end
  end
end