import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/internal/operators';

import { Banner } from './data-types/common.types';
import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';


@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getBanners() :Observable<Banner[]> {
    return this.http.get(`${this.baseUrl}banner`)
      .pipe(map(res => res['banners']));
  }
}
