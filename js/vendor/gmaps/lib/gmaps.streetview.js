GMaps.prototype.createPanorama=function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||(e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng()),this.panorama=GMaps.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama},GMaps.createPanorama=function(a){var e=getElementById(a.el,a.context);a.position=new google.maps.LatLng(a.lat,a.lng),delete a.el,delete a.context,delete a.lat,delete a.lng;for(var t=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],n=extend_object({visible:!0},a),o=0;o<t.length;o++)delete n[t[o]];var r=new google.maps.StreetViewPanorama(e,n);for(o=0;o<t.length;o++)!function(e,t){a[t]&&google.maps.event.addListener(e,t,function(){a[t].apply(this)})}(r,t[o]);return r};