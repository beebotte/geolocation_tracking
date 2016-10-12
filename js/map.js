var map;
var bbt;
var latitude;
var longitude;
var marker;

function init() {  	
	bbt = new BBT('your_public_key', {auth_endpoint: 'your_authentication_api'});
	bbt.subscribe( {channel: 'private-Car', resource: 'Location', read: true, write: false}, function(message){			
			displayCarLocation( message.data.latitude, message.data.longitude );	
	});  
}

function initializeMap(position){	
	var options = {
		zoom: 17,
		center: position,
		mapTypeId: google.maps.MapTypeId.SATELLITE 
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), options);	 
}

function displayCarLocation(lat, lng)
{
	initializeMap(new google.maps.LatLng(lat, lng ));
	if (marker)
	{
		marker.setMap(null);
	}	
	marker = new google.maps.Marker({
		 position: new google.maps.LatLng(lat, lng ),
		 icon: {
		  path: google.maps.SymbolPath.CIRCLE,
		  scale: 8,
		  strokeColor: '#FF0000'
		},
		draggable: false,
		map: map
	});
}
