import { Component, AfterViewInit, ElementRef } from '@angular/core';
import {MusicPlayerComponent} from './music-player/music-player.component'
import {fadeIn} from './animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeIn
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'joe-lobosco-music';
  
  constructor(
    private elementRef: ElementRef
  ){}
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(23,23,23)';
  }
}
