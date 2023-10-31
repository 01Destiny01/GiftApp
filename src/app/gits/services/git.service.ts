import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, QueryList } from '@angular/core';
import { Gif, SearchGiftsResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class gitService {
  private _historial: string[] = []
  private api: string = 'ojFdLgEe6dHxKSO7nJ60n2Q0vgbNfKhH';
  public resultados: Gif[] = []
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }
  get historial() {
    return [...this._historial]
  }
  buscarGif(query: string) {
    query = query.trim().toLowerCase()
    if (query.length != 0) {
      if (!this._historial.includes(query)) {
        this._historial.unshift(query);
        this._historial = this._historial.splice(0, 10);
        localStorage.setItem('historial', JSON.stringify(this._historial));

      }

      const params = new HttpParams()
        .set('api_key', this.api)
        .set('limit', '10')
        .set('q', query);
      this.http.get<SearchGiftsResponse>(`${this._servicioUrl}/search`, { params })
        .subscribe((resp) => {
          console.log(resp.data);
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));

        });
    }
  }
}

