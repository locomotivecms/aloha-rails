module Aloha
  module Rails
    class Engine < ::Rails::Engine
      initializer "configure assets", :group => :all do |app|
        app.config.assets.precompile << 'aloha/*'
      end
    end
  end
end