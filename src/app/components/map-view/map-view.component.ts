import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisplayedStationsInfo} from '../../models/DisplayedStationsInfo';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapViewComponent implements OnInit {
  @Input()
  public stations: DisplayedStationsInfo[];
  @Output()
  public mapClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public onMapClicked(event) {
    this.mapClicked.emit(event);
  }

  public onMarkerClicked(station: DisplayedStationsInfo, i: number) {
    console.log(station);
  }

}
