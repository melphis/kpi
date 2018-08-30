import {Kpi} from './kpi';

export class KpiTime extends Kpi {

  /** @override */
  type = Kpi.Type.Time;

  /** @override */
  typeValue = 'мин.';
}
