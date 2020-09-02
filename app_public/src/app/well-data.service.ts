import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WellName } from './well-list/well-list.component';
//import { response } from '../../../app';

@Injectable({
  providedIn: 'root'
})
export class WellDataService {

  private apiBaseUrl = 'http://localhost:3000/api/allWells';
  
  public getWells(): Promise<WellName[]> {
    const url: string = `${this.apiBaseUrl}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response as WellName[])
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Something has hone wrong', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient) { }
}
