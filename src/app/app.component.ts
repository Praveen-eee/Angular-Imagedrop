import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Imagedrop';
  
  link?:string;
  inp!:string;
  case!:string;
  disp(val:string,inp:string)
  {
    

    if(val=="gta" || inp=="gtav" || inp=="GTAV" || inp=="GTA V" || inp=="GtaV" || inp=="Gtav" || inp=="Gta V")
      this.link="/assets/gtav.jpg";
    else if(val=="gow" || inp=="GOW" || inp=="God of War" || inp=="God Of War" || inp=="GOD OF WAR" || inp=="god of war")
      this.link="/assets/gow.jfif";
    else if(val=="valorant" || inp=="Valorant" || inp=="VALORANT")
      this.link="/assets/Valorant.png";
    this.case=this.inp;
  }
  
}
