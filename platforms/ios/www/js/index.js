/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log('binding.');

        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onDeviceReady: function() {

        appState = "location";

        switch(appState) {
            case 'login':
                this.appStateLogin();
                break;
            case 'location':
                app.showMap();
//                this.appStateLocation();
                break;
            case 'status':
                this.appStateStatus();
                break;
            case 'pre_activation':
                this.appStatePreAct();
                break;
            case 'post_activation':
                this.appStatePstAct();
                break;
        }
        app.receivedEvent('deviceready');


//        foursquare.login('X2O4XENA0DKX3LVC3JUHFZZSG4VIIIQWVQVXO5P20FY4VYBQ', 'CAALY0YG4X04MJGLV0OP0AY0EWTPWT4JZWPJ4J14NNMLO0XC', 

/*
        facebookConnectPlugin.login(["public_profile"], function (userData) {
            // success here
            alert("UserInfo: " + JSON.stringify(userData));
        }, function (error) {
            // fail here
            alert("" + error);
        });
*/


//        var foursquare = new CC.CordovaFoursquare();



    },
    initPushwoosh: function() {
        var pushNotification = window.plugins.pushNotification;
 
        document.addEventListener('push-notification', function(event) {
            var notification = event.notification;
            alert(notification.aps.alert);
            pushNotification.setApplicationIconBadgeNumber(0);
        });
 
        pushNotification.onDeviceReady({pw_appid:"42B9B-86BC0"});
     
        pushNotification.registerDevice(
            function(status) {
                var deviceToken = status['deviceToken'];
                console.warn('registerDevice: ' + deviceToken);
            },
            function(status) {
                console.warn('failed to register : ' + JSON.stringify(status));
                alert(JSON.stringify(['failed to register ', status]));
            }
        );
        pushNotification.setApplicationIconBadgeNumber(0);
    },

    appStateLogin: function() {
    },

    appStateLocation: function() {
        navigator.geolocation.getCurrentPosition( function(position) {
            launchnavigator.navigateByLatLon(position.coords.latitude, position.coords.longitude, function () {
//              alert("success...∏");
            }, function (error) {
                alert("" + error);
            });

        }, function (e) {
            var msgText = "Geolocation error: #" + e.code + "\n" + e.message;
            console.log(msgText);
            alert(msgText);
        }, {
            timeout : 5000,
            enableHighAccuracy : true
        });
    },

    appStateStatus: function() {
    },

    appStatePreAct: function() {
    },

    appStatePstAct: function() {
    },

    showMap: function() {
        var pins = [{
                lat: 41.056728,
                lon: 28.995595,
                title: "A Cool Title",
                snippet: "A Really Cool Snippet",
//                icon: mapKit.iconColors.HUE_ROSE
            }, {
                lat: 41.053468,
                lon: 28.993696,
                title: "A Cool Title, with no Snippet",
                icon: {
                  type: "asset",
                  resource: "www/img/logo.png",             //an image in the asset directory
 //                 pinColor: mapKit.iconColors.HUE_VIOLET       //iOS only
                }
            }, {
                lat: 41.054447,
                lon: 28.999501,
                title: "Awesome Title",
                snippet: "Awesome Snippet",
  //              icon: mapKit.iconColors.HUE_GREEN
            }, {
                lat: 41.057005,
                lon: 29.000096,
                title: "Awesome Title",
                snippet: "Awesome Snippet",
 //               icon: mapKit.iconColors.HUE_GREEN
            }];
        alert('huhh?');
        var success = function() {
//            document.getElementById('hide_map').style.display = 'block';
//            document.getElementById('show_map').style.display = 'none';
alert('success call');
            mapKit.addMapPins(pins, function() {
                console.log('adMapPins success');
                document.getElementById('clear_map_pins').style.display = 'block';
            }, function() {
                alert('error');
            });
        };
        alert('hah!');
        console.log('Hey!');
        debug.log('hallooo...');
        mapKit.showMap(success, function() {
            alert('error');
        });
    },
    hideMap: function() {
        var success = function() {
            document.getElementById('hide_map').style.display = 'none';
            document.getElementById('clear_map_pins').style.display = 'none';
            document.getElementById('show_map').style.display = 'block';
        };
        var error = function() {
            console.log('error');
        };
        mapKit.hideMap(success, error);
    },
    clearMapPins: function() {
        var success = function() {
            console.log('Map Pins cleared!');
        };
        var error = function() {
            console.log('error');
        };
        mapKit.clearMapPins(success, error);
    },
    changeMapType: function() {
      var success = function() {
            console.log('Map Type Changed');
        };
        var error = function() {
            console.log('error');
        };
        mapKit.changeMapType(mapKit.mapType.MAP_TYPE_SATELLITE, success, error);
    }
};
