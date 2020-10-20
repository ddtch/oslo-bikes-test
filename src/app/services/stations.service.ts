import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, forkJoin, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {StationInformationModel} from '../models/StationInformationModel';
import {SystemInfoModel} from '../models/SystemInfoModel';
import {StationStatusModel} from '../models/StationStatusModel';
import {DisplayedStationsInfo} from '../models/DisplayedStationsInfo';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  private allStations: BehaviorSubject<DisplayedStationsInfo[]> = new BehaviorSubject<DisplayedStationsInfo[]>([]);
  private selectedStationId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public allStations$ = this.allStations.asObservable();

  constructor(private http: HttpClient) {
  }

  public getStationInformationById(stationId: number): Observable<any> {
    return this.allStations$.pipe(
      map(el => {
        return el.filter(s  => +s.station_id === stationId)[0];
      }),
    );
  }

  public loadFullStationsData(): void {
    forkJoin([
      this.getStationsInformation(),
      this.getStationsStatus(),
    ]).subscribe(([stationsInfo, stationsStatus]) => {
      const stations = this.buildDisplayedStationsData(stationsInfo, stationsStatus);
      this.allStations.next(stations);
    });
  }

  public getSystemInformation(): Observable<SystemInfoModel> {
    return this.http.get('https://gbfs.urbansharing.com/oslobysykkel.no/system_information.json')
      .pipe(
        map((res: any) => res.data)
      );
  }

  private getStationsInformation(): Observable<StationInformationModel[]> {
    return this.http.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json')
      .pipe(
        map((res: any) => res.data.stations)
      );
  }

  private getStationsStatus(): Observable<StationStatusModel[]> {
    return this.http.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json')
      .pipe(
        map((res: any) => res.data.stations)
      );
  }

  private buildDisplayedStationsData(stationsInfo: StationInformationModel[],
                                     stationsStatus: StationStatusModel[]): DisplayedStationsInfo[] {
    const res = [...stationsInfo, ...stationsStatus].reduce((acc, cv) => {
      acc[cv.station_id] = Object.assign(acc[cv.station_id] || {}, cv);
      return acc;
    }, {});

    return Object.values(res);
  }
}
