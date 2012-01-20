require 'sprockets/asset'

module Sprockets
  class Asset

    def digest_path_with_aloha
      return logical_path if logical_path =~ /^aloha\//
      digest_path_without_aloha
    end

    alias_method_chain :digest_path, :aloha
  end
end
