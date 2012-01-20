Rails 3.1 Integration for Aloha Editor
=================================

The `aloha-rails` gem integrates the [AlohaEditor](http://aloha-editor.org/) editor with the Rails 3.1 asset pipeline.


Instructions
------------

**1. Add `aloha-rails` to your Gemfile**

    gem 'aloha-rails'

Then run `bundle install`.


**2. Use AlohaEditor**

Add to your application.js:

    //= require aloha

and in your erb / haml /..etc layout

    = stylesheet_link_tag 'aloha/css/aloha.css'

and use AlohaEditor in your view:

    <script type="text/javascript">
        Aloha.ready( function() {

            // Make #content editable once Aloha is loaded and ready.
            Aloha.jQuery('#content').aloha();

        });
    </script

Credits
-------

[Sam Pohlenz](https://github.com/spohlenz) for his [tinymce-rails plugin](https://github.com/spohlenz/tinymce-rails) as a blueprint.

Contact
-------

Feel free to contact me at didier at nocoffee dot fr.

Copyright (c) 2012 NoCoffee