import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


 

  constructor( private http: HttpClient) { 
    console.log('Spotify service listo!');
  }

  getQuery( query : string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDgVF-4PpuCSrWiI1uHHO1vcjmSS9gTT7VUH_-ZVWhMbn-PhVYgJdP431-EZt8UdY-DWcMa1JoKFkGeqj0'
    });

    return this.http.get(url, { headers });
  }

  
  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDgVF-4PpuCSrWiI1uHHO1vcjmSS9gTT7VUH_-ZVWhMbn-PhVYgJdP431-EZt8UdY-DWcMa1JoKFkGeqj0'
    });
    const limit = '?limit=20'
       
    
    
    return this.http.get(`https://api.spotify.com/v1/browse/new-releases${ limit }`, { headers });
  }


  getNewSongs( termino: string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDgVF-4PpuCSrWiI1uHHO1vcjmSS9gTT7VUH_-ZVWhMbn-PhVYgJdP431-EZt8UdY-DWcMa1JoKFkGeqj0'
    });

    const limit = '?limit=20'
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers });

  }


}
