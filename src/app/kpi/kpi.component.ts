import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Kpi} from '../kpi';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {

  @Input() data: Kpi;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    const active = this.data.isActive;

    this.data.toggleActive();

    if (active !== this.data.isActive) {
      this.activeChange.emit(this.data.isActive);
    }
  }

}
