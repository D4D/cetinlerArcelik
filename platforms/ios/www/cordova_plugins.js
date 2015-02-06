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
        "file": "plugins/uk.co.workingedge.phonegap.plugin.LaunchNavigator/www/ios/launchnavigator.js",
        "id": "uk.co.workingedge.phonegap.plugin.LaunchNavigator.LaunchNavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/com.pushwoosh.plugins.pushwoosh/www/PushNotification.js",
        "id": "com.pushwoosh.plugins.pushwoosh.PushNotification",
        "clobbers": [
            "plugins.pushNotification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.mapkit/www/MapKit.js",
        "id": "com.phonegap.plugins.mapkit.mapkit",
        "clobbers": [
            "plugin.mapKit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.facebookconnect": "0.11.0",
    "uk.co.workingedge.phonegap.plugin.LaunchNavigator": "2.0.0",
    "com.pushwoosh.plugins.pushwoosh": "3.4.9",
    "org.apache.cordova.geolocation": "0.3.11",
    "com.phonegap.plugins.mapkit": "0.9.3"
}
// BOTTOM OF METADATA
});