cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-sqlserver.plugin",
      "file": "plugins/cordova-plugin-sqlserver/www/plugin.js",
      "pluginId": "cordova-plugin-sqlserver",
      "clobbers": [
        "SqlServer"
      ],
      "runs": true
    },
    {
      "id": "cordova-gmv-barcode-scanner.cordova-gmv-barcode-scanner",
      "file": "plugins/cordova-gmv-barcode-scanner/www/main.js",
      "pluginId": "cordova-gmv-barcode-scanner",
      "clobbers": [
        "cordova.plugins.gmv-barcode-scanner"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-sqlserver": "1.0.0",
    "cordova-gmv-barcode-scanner": "1.2"
  };
});