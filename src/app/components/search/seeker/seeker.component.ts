import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {


  artistas: any[] =[] 

  constructor(private _spotifySeeker : SpotifyService) { }

  searchSong(termino: string){
    console.log(termino);
    this._spotifySeeker.getNewSongs( termino )
        .subscribe( (data : any) => {
           console.log(data.artists.items);
           this.artistas = data.artists.items;
        })
  }

  ngOnInit(): void {

    


  }

}
