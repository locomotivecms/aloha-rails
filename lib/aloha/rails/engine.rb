module Aloha
  module Rails
    class Engine < ::Rails::Engine
      initializer "configure assets" do |app|
        app.config.assets.precompile << 'aloha/*'
      end
    end
  end
end