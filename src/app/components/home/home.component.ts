import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  music : any[] = [];

  constructor( private _spotifyService : SpotifyService) { }

  ngOnInit(): void {

    

    this._spotifyService.getNewReleases()
                    // data de tipo -> any
        .subscribe( (data : any) => {
          console.log( data.albums.items );
          // Dentro del array 'music' se insertarĂ¡ los datos que se reciben como parĂ¡metros.
          this.music = data.albums.items;
        });

  }

}
