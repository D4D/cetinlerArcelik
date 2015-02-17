var app = {
    // Application Constructor

    templates: {
    	home: 		{},
    	status: 	{},
    	preAct: 	{},
    	postAct: 	{},
    	campaigns: 	{}
    },

    initialize: function() {
    	var self = this;
    	this.detailsURL = /^#location\/(\d{1,})/;
        this.bindEvents();
		this.store = new MemoryStore(function() {
			self.route();
    	});
//		SessionView.prototype.template = Handlebars.compile($("#session-tpl").html());

		app.templates.home = 		Handlebars.compile( $("#home-view-tpl").html() );
		app.templates.status = 		Handlebars.compile( $("#status-view-tpl").html() );
		app.templates.preAct = 		Handlebars.compile( $("#preAct-view-tpl").html() );
		app.templates.postAct = 	Handlebars.compile( $("#pstAct-view-tpl").html() );
		app.templates.campaigns = 	Handlebars.compile( $("#campaign-view-tpl").html() );

		this.initRoutes();

//		this.scanner = cordova.require("com.phonegap.plugins.barcodescanner.barcodescanner");
//		this.pushNotification = window.plugins.pushNotification;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log('binding.');

		$(window).on('hashchange', $.proxy(this.route, this));
//		this.initPushwoosh();
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

	initRoutes: function() {
/*
		var hash = window.location.hash;
		if (!hash) {
			$('#app').html(new HomeView(this.store).render().el);
			return;
		}
		var match = hash.match(app.detailsURL);
		if (match) {
			this.store.findById( Number(match[1] ), function(employee) {
				$('#app').html(new LocationView(employee).render().el);
			});
		}
*/
		var service = new CampaignService();

		service.initialize().done(function () {

			$('#app').html(new HomeView(service).render().$el);

//			router.addRoute('', 			function() { $('#app').html(new HomeView(service).render().$el); });
//			router.addRoute('login', 		function() { $('#app').html(new HomeView(service).render().$el); });
//			router.addRoute('campaigns', 	function() { $('#app').html(new CampaignView(service).render().$el); });

//			router.start();
		});
	},

    appStateLogin: function() {
		$('#app').html( app.templates.home({}) );
    },

    appStateLocation: function() {
    	alert('location called');
        navigator.geolocation.getCurrentPosition( function(position) {
            launchnavigator.navigateByLatLon(position.coords.latitude, position.coords.longitude, function () {
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
    },

    appStateStatus: function() {
		$('#app').html( app.templates.status({}) );
    },

    appStatePreAct: function() {
		$('#app').html( app.templates.preAct({}) );
    },

    appStatePstAct: function() {
		$('#app').html( app.templates.postAct({}) );
    },

    appStateCampaigns: function() {

		$.jsonp({
//			url: 'http://twitter.com/status/user_timeline/samcroft.json?count=20',
			url: 'staticdata/campaigns.json',
			callbackParameter: 'callback',
			success: function(data, status) {

				$('#app').html( app.templates.campaigns( {content: data} ) );
/*
				$.each(data, function(i,item){ 
					var tweet = item.text;
					$('#your-tweets').append('<li>'+tweet);
				});
*/
			},
			error: function(){
				$('#app').html('<div>There was an error loading the feed');
			}
		});

		var campaignTpl = Handlebars.compile( $("#campaign-view-tpl").html() );
		$('#app').html( app.templates.campaigns({}) );
    },

	onDeviceReady: function() {
//		navigator.splashscreen.show();

		StatusBar.overlaysWebView( false );
		StatusBar.backgroundColorByHexString('#ffffff');
		StatusBar.styleLightContent();
		StatusBar.hide();

		FastClick.attach(document.body);

        appState = "login";

		Handlebars.registerPartial("menu", $("#menu-view-tpl").html());

//		$('app').html( homeTpl() );

/* NOT WORKING ON SIMULATOR??? 
		this.scanner.scan( function (result) {
			alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		}, function (error) {
			alert("Scanning failed: " + error);
		});
*/

        switch(appState) {
            case 'login':
            	app.appStateLogin();
                break;
            case 'location':
                app.showMap();
//                this.appStateLocation();
                break;
            case 'status':
                app.appStateStatus();
                break;
            case 'pre_activation':
                app.appStatePreAct();
                break;
            case 'post_activation':
                app.appStatePstAct();
                break;
            case 'campaigns':
                app.appStateCampaigns();
                break;
            default:
                app.appStateLogin();
                break;
        }
        app.receivedEvent('deviceready');
    },


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

    initPushwoosh: function() {
 
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



	tcKimlik: function(tcno){
	// http://www.goktugozturk.com.tr/programlama/php-ve-soap-ile-tc-kimlik-numarasi-dogrulama/
		TcNo = String(tcno);
			 
		bs1 = parseInt(TcNo.substr(0,1),10);
		bs2 = parseInt(TcNo.substr(1,1),10);
		bs3 = parseInt(TcNo.substr(2,1),10);
		bs4 = parseInt(TcNo.substr(3,1),10);
		bs5 = parseInt(TcNo.substr(4,1),10);
		bs6 = parseInt(TcNo.substr(5,1),10);
		bs7 = parseInt(TcNo.substr(6,1),10);
		bs8 = parseInt(TcNo.substr(7,1),10);
		bs9 = parseInt(TcNo.substr(8,1),10);
		bs10 = parseInt(TcNo.substr(9,1),10);
		bs11 = parseInt(TcNo.substr(10,1),10);
 
		if( ( (bs1+bs3+bs5+bs7+bs9+bs2+bs4+bs6+bs8+bs10) % 10 != bs11 ) || 
		( ( (bs1+bs3+bs5+bs7+bs9)*7 + (bs2+bs4+bs6+bs8)*9 ) % 10 != bs10 ) || 
		( ( (bs1+bs3+bs5+bs7+bs9)*8) % 10 != bs11 ) ) {
			return false;
		}else{
			return true;
		}
 	},

    showMap: function() {
        navigator.geolocation.getCurrentPosition( function(position) {
            window.mapKit = new MapKit({
                height: 640,
                diameter: 1000,
                atBottom: true,
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        }, function (error) {
            alert("" + error);
        });

        var success = function() {
            mapKit.addMapPins(pins, function() {
                console.log('adMapPins success');
            }, function() {
                alert('error');
            });
        };
        mapKit.showMap(success, function() {
            alert('error');
        });
    },
    hideMap: function() {
        var success = function() {

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
