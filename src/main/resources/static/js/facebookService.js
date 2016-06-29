angular.module("facebookApp", ['ngCookies'])
		.controller("Home", function($cookies,$rootScope,$http, $location) {
			var self=this;
			self.Authenticated=$cookies.get('Autenticated');
			self.getUserInfo = function() {

				  var _self = this;

				  FB.api('/me',{fields: 'first_name,last_name,email'}, function(res) {
				    $rootScope.$apply(function() {
				      $rootScope.user = _self.user = res;
				      console.log($rootScope.user);
				    });
				  });

				}
			self.watchLoginChange = function() {
				  var _self = this;
				  FB.Event.subscribe('auth.authResponseChange', function(res) {

				    if (res.status === 'connected') {
				    	self.Authenticated=true;
				    	$cookies.put('Authenticated',true);
				    	console.log(self.Authenticated);
				    	_self.getUserInfo();
				    	return true;
				      /*
				       * 
				       * 
				       The user is already logged,
				       is possible retrieve his personal info
				      */

				      /*
				       This is also the point where you should create a
				       session for the current user.
				       For this purpose you can use the data inside the
				       res.authResponse object.
				      */

				    }
				    else {
				    	self.Authenticated=false;
				    	$cookies.put('Authenticated',false);
				      /*
				       The user is not logged to the app, or into Facebook:
				       destroy the session on the server.
				      */
				    	return false;
				    }

				  });

				}
			self.watchLoginChange();
			logout = function() {

				  var _self = this;

				  FB.logout(function(response) {
				    $rootScope.$apply(function() {
				      $rootScope.user = _self.user = {};
				    });
				  });

				};
		})