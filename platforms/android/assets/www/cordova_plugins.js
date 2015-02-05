cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.facebookconnect/facebookConnectPlugin.js",
        "id": "com.phonegap.plugins.facebookconnect.FacebookConnectPlugin",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.LaunchNavigator/www/android/launchnavigator.js",
        "id": "uk.co.workingedge.phonegap.plugin.LaunchNavigator.LaunchNavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/com.ccsoft.plugin.CordovaFoursquare/www/CordovaFoursquare.js",
        "id": "com.ccsoft.plugin.CordovaFoursquare.CordovaFoursquare",
        "merges": [
            "CC"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.facebookconnect": "0.11.0",
    "uk.co.workingedge.phonegap.plugin.LaunchNavigator": "2.0.0",
    "com.ccsoft.plugin.CordovaFoursquare": "1.0.0"
}
// BOTTOM OF METADATA
});