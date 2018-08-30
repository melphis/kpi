import {Component, Input, OnInit} from '@angular/core';
import {Kpi} from '../kpi';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {}

  @Input() data: Kpi;

  ngOnInit() {
  }

}
