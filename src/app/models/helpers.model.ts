import { SimpleChange } from '@angular/core';

export type ComponentChanges<T> = {
  [prop in keyof T]: SimpleChange;
}
