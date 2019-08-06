cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-qrscanner.QRScanner",
      "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
      "pluginId": "cordova-plugin-qrscanner",
      "clobbers": [
        "QRScanner"
      ]
    },
    {
      "id": "cordova-plugin-sqlserver.plugin",
      "file": "plugins/cordova-plugin-sqlserver/www/plugin.js",
      "pluginId": "cordova-plugin-sqlserver",
      "clobbers": [
        "SqlServer"
      ],
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-qrscanner": "3.0.1",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-sqlserver": "1.0.0"
  };
});