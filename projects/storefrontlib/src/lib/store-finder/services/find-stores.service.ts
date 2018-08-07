import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable()
export class FindStoresService {
  constructor(private store: Store<fromStore.StoresState>) {}
}
