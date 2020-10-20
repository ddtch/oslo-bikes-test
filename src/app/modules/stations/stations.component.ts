import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StationsService} from '../../services/stations.service';
import {Observable} from 'rxjs';
import {DisplayedStationsInfo} from '../../models/DisplayedStationsInfo';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationsComponent implements OnInit {
  public stations$: Observable<DisplayedStationsInfo[]>;

  constructor(private stationsService: StationsService) { }

  ngOnInit() {
    this.stationsService.loadFullStationsData();
    this.stations$ = this.stationsService.allStations$;
  }

  public mapClicked(event) {
    console.log(event);
  }
}
