import { HttpClient } from '@angular/common/http';
import { Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class gitService {
  private _historial: string[] = []
  private api: string = 'ojFdLgEe6dHxKSO7nJ60n2Q0vgbNfKhH'
  public resultados:any[] = []

  constructor(private http:HttpClient) { }
  get historial() {
    return [...this._historial]
  }
  buscarGif(query: string) {
    query = query.trim().toLowerCase()
    if (query.length != 0) {
      if (this.historial.indexOf(query) === -1) {
        this._historial.unshift(query);
        this._historial = this._historial.splice(0, 10);

        this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=ojFdLgEe6dHxKSO7nJ60n2Q0vgbNfKhH&q=${ query }&limit=10`)
         .subscribe((resp:any)=> {
          console.log(resp.data);
          this.resultados = resp.data;
         });
      }
    }
  }
}
