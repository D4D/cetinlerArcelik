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
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
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

    onDeviceReady: function() {

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

        navigator.geolocation.getCurrentPosition( function(position) {

            alert(  'Latitude: '          + position.coords.latitude          + '\n' +
                    'Longitude: '         + position.coords.longitude         + '\n' +
                    'Altitude: '          + position.coords.altitude          + '\n' +
                    'Accuracy: '          + position.coords.accuracy          + '\n' +
                    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                    'Heading: '           + position.coords.heading           + '\n' +
                    'Speed: '             + position.coords.speed             + '\n' +
                    'Timestamp: '         + position.timestamp                + '\n');

            launchnavigator.navigateByLatLon(41.056129, 28.99381, function () {
                    alert("success...∏");
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

//        var foursquare = new CC.CordovaFoursquare();



        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
