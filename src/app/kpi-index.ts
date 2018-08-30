import {Kpi} from './kpi';

export class KpiIndex extends Kpi {

  /** @override */
  type = Kpi.Type.Index;

  /** @override */
  typeValue = 'индекс';
}
