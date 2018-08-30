import {Kpi} from './kpi';

export class KpiPercent extends Kpi {

  /** @override */
  type = Kpi.Type.Percent;

  /** @override */
  typeValue = '%';
}
