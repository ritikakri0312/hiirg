import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngTuple, map,Map } from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private readonly DEFAULT_LATLNG: LatLngTuple = [13,75,21.62];

  @ViewChild('map',{static:true})
   mapRef!: ElementRef;
   
  map!:Map;
  constructor(){}
  ngOnInit(): void {
   
  }

  initializeMap(){
     if(this.map) return;

     this.map = map(this.mapRef.nativeElement,{
       attributionControl:false
     }).setView(this.DEFAULT_LATLNG)
  }

}
