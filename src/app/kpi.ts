import {EventEmitter, Output} from '@angular/core';

enum Type {
  Percent = 1, Peoples, Time, Index
}

export abstract class Kpi {

  public static Type: (typeof Type) = Type;

  public abstract typeValue: string;
  public abstract type: Type;

  protected _isActive = false;

  public get isActive(): boolean {
    return this._isActive;
  }

  public set isActive(active: boolean) {
    if (this.value !== null || !active) {
      this._isActive = active;
    }
  }

  public constructor(public id: number, public name: string,
                     public value: number, public diff: number) {}

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
