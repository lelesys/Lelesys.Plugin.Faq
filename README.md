Lelesys Faq Plugin
======================

This plugin adds faq to your websites.

##### Important note: Initial package development was done when TYPO3 Neos was at alpha3/4. We are working hard continuously to get this to work perfectly and to beautify source code using best practices/concepts of Flow/Neos. Stay tuned!

Quick start
---------

* include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.Faq/Public/Stylesheets/Faq.css')}" rel="stylesheet" media="screen">
```

* add the plugin content element "Lelesys Faq Container" to the position of your choice.
   * This will add container to add all the faq's
* add the plugin content element "Lelesys Faq Category" under "Lelesys Faq Container".
   * This will add a category of faq and under it you can add all the faq's
* add the plugin content element "Lelesys Faq" under "Lelesys Faq Category".

Note: This will add a simple Faq Plugin to your site.
If you want a Faq with toogle effect than you just have to add javascript to your own one's where you add other javascripts of the site.

```<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.Faq/Public/JavaScript/Faq.js')}"></script>```