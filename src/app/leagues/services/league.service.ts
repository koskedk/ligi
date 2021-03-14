import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {League} from '../models/league';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private _url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<League[]> {
    return this.http.get<League[]>(`${this._url}/api/leagues`);
  }

  getById(id: string): Observable<League> {
    return this.http.get<League>(`${this._url}/api/leagues/${id}`);
  }

  add(league: League): Observable<League> {
    return this.http.post<League>(`${this._url}/api/leagues`, league);
  }

  update(id: string, league: League): Observable<League> {
    return this.http.put<League>(`${this._url}/api/leagues/${id}`, league);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this._url}/api/leagues/${id}`);
  }
}
