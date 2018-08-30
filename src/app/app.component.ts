import { Component } from '@angular/core';
import {Kpi} from './kpi';
import {KpiPercent} from './kpi-percent';
import {KpiPeoples} from './kpi-peoples';
import {KpiTime} from './kpi-time';
import {KpiIndex} from './kpi-index';

const kpies = [
  {
    id: 1,
    name: 'посетители (все)',
    value: 65022,
    type: 2,
    diff: 7
  },
  {
    id: 2,
    name: 'длительность',
    value: 53,
    type: 3,
    diff: -19
  },
  {
    id: 3,
    name: 'доля лояльных',
    value: 65,
    type: 1,
    diff: 7
  },
  {
    id: 4,
    name: 'доля новых',
    value: 35,
    type: 1,
    diff: -10
  },
  {
    id: 5,
    name: 'доля вовлечённых',
    value: 72,
    type: 1,
    diff: -2
  },
  {
    id: 6,
    name: 'shopping index',
    value: null,
    type: 4,
    diff: null
  },
];

const kpiesClassList = {
  [Kpi.Type.Percent]: KpiPercent,
  [Kpi.Type.Peoples]: KpiPeoples,
  [Kpi.Type.Time]: KpiTime,
  [Kpi.Type.Index]: KpiIndex,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tz';

  kpies: Kpi[] = [];
  activeKpi: Kpi;

  constructor() {
    kpies.forEach((item: Kpi) => {
      const kpi: Kpi = new kpiesClassList[item.type](
        item.id, item.name, item.value, item.diff
      );

      this.kpies.push(kpi);
    });
  }

  kpiActiveChange(kpi: Kpi) {
    this.activeKpi = kpi.isActive ? kpi : null;

    this.kpies.forEach((item) => {
      if (item !== kpi) {
        item.isActive = false;
      }
    });
  }
}
