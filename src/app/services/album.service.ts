import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  private readonly baseUrl = 'https://api.spotify.com/v1/me/albums';

  constructor(
    private http: HttpClient
  ) { }
}
