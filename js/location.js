var bbt;
var latitude;
var longitude;

function init() { 
	bbt = new BBT('your_public_key', {auth_endpoint: 'your_authentication_api'});
	bbt.subscribe( {channel: 'private-Car', resource: 'Location', read: true, write: true}, function(message){			
	});   	
}
function publishLocation() {	
alert('publish');
	if (navigator.geolocation) {		
		navigator.geolocation.getCurrentPosition(
			displayPosition, 
			displayError			
		);	
	}
	else {
		alert("Geolocation is not supported by this browser");
	}
}

function displayPosition(position) {
	alert('display position')
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	bbt.publish({channel: 'private-Car', resource: 'Location'}, {"latitude": latitude, "longitude": longitude});

}

function displayError(error) {
	var errors = { 
		1: 'Permission denied',
		2: 'Position unavailable',
		3: 'Request timeout'
	};
	alert("Error: " + errors[error.code]);
}	
	 	

