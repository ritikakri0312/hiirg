import {  Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {  icon, latLng, LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, map, Map, marker, Marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
import { Order } from 'src/app/shared/model/Order';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  order!:Order;
 private readonly MARKER_ZOOM_LEVEL = 16;
 private readonly MARKER_ICON = icon({
  iconUrl:

    iconSize: [42,42],
    iconAnchor:[21 ,42],
 });
 private readonly  DEFAULT_LATLNG: LatLngTuple = [13,75,21.62];

  @ViewChild('map',{static:true})
   mapRef!: ElementRef;
   
  map!:Map;
  currentMarker!:Marker;
  constructor(private locationService:  LocationService){}
  
  
  ngOnInit(): void {
     this.initializeMap();
  }

  initializeMap(){
     if(this.map) return;

     this.map = map(this.mapRef.nativeElement,{
       attributionControl:false
     }).setView(this.DEFAULT_LATLNG, 1);

   tileLayer('https://{s}.title.osm.org/{z}/{x}/{y}.png').addTo(this.map);

   this.map.on('click',(e:LeafletMouseEvent)=>{
      this.setMarker(e.latlng)
   })
  }
  
    findMyLocation(){
      this.locationService.getCurrentLocation().subscribe({
        next:(LatLng)  =>{
          this.map.setView(LatLng, this.MARKER_ZOOM_LEVEL)
         this.setMarker(LatLng)
        }
      })
    }
    setMarker(latlng:LatLngExpression){
      this.addressLasting= latlng as LatLng;
      if(this.currentMarker)
      {
        this.currentMarker.setLatLng(latlng)
        return;
      }

      this.currentMarker =  marker(latlng,{
        draggable:true,
        icon: this.MARKER_ICON
      }).addTo(this.map);
        


      this.currentMarker.on('dragend', () =>{
          this.addressLasting = this.currentMarker.getLatLng();
      })
    }

    set addressLasting(latlng: LatLng){
      latLng.lat = parseFloat(latlng.lat.toFixed(8));
      latLng.lng = parseFloat(latLng.length.toFixed(8));
      this.order.addressLasLng = latlng;
    }
}
