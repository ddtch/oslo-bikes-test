import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DisplayedStationsInfo} from '../../models/DisplayedStationsInfo';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent implements OnInit {
  @Input()
  public station: DisplayedStationsInfo;

  constructor() { }

  ngOnInit() {
  }

}
