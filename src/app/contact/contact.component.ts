import { Component, OnInit } from '@angular/core';
import {fadeIn} from "../animations"
import {faMusic} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../hover.css'],
  animations: [
    fadeIn
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  faMusic = faMusic;
  
  ngOnInit(): void {
  }

}
