import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewRef } from '@angular/core';
import mapboxgl from "mapbox-gl";

@Component({
  templateUrl: './layer-preview.component.html',
  styleUrls: ['./layer-preview.component.scss']
})
export class LayerPreviewComponent implements AfterViewInit {

  @ViewChild('mapContainer') mapContainer: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoibG9jb3RvciIsImEiOiJjanlqdWQzaDMwN21xM25uN3RxYmZsa2x3In0.6WJqg49uN1KrizTlgm01RQ';
    const map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [114, 38.54],
      zoom: 6
    });

    // 地图导航
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");
    // 全图
    map.addControl(new mapboxgl.FullscreenControl());
    // 定位
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
  }

  ngOnInit(): void {
  }

}
