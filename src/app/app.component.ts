import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import {MusicPlayerComponent} from './music-player/music-player.component'
import {fadeIn} from './animations'
import {faEnvelope, faMusic} from '@fortawesome/free-solid-svg-icons'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './hover.css'],
  animations: [
    fadeIn
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'joe-lobosco-music';
  
  constructor(
    private elementRef: ElementRef,
    public router: Router
  ){}

  faEnvelope = faEnvelope
  faMusic = faMusic

  public tempRoute = ""
  public prettyRoute = ""

  ngAfterViewInit(){
    // this.elementRef.nativeElement.ownerDocument.body.style.background= 'rgb(23,23,23)';

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage= 'url(./assets/mountains.jpg)';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat= 'no-repeat';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize= 'cover';
    this.elementRef.nativeElement.ownerDocument.body.style.overflow= 'hidden';
  }
}
