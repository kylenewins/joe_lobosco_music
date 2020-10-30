import { Component, OnInit, HostBinding,  OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import WaveSurfer from 'wavesurfer.js'
import {faPlay, faCircleNotch, faPause, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {fadeIn} from '../animations'

//@ts-ignore
import tracklist from "../../assets/tracklist.json"

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css', '../hover.css'],
  animations:[fadeIn]
})

export class MusicPlayerComponent implements OnInit, OnDestroy{

  constructor(
    private http: HttpClient
  ) { }
  // pieOhMy = new Audio()
  public ws: WaveSurfer;
  public tracklist = tracklist.tracks
  public activeTrack = "";
  public isPlaying = false;

  faPlay = faPlay
  faCircleNotch = faCircleNotch
  faPause = faPause
  faEnvelope = faEnvelope

  ngOnInit(): void {
    this.waveSurferInit()
    document.getElementById("contact-btn").style.display = "inline-block"
    document.getElementById("music-btn").style.display = "none"
  }

  ngOnDestroy():void{
    this.ws.pause()
  }

  waveSurferInit(){
    this.ws = WaveSurfer.create({
      container: "#waveform",
      waveColor: "white",
      progressColor: '#b80022',
      autoCenter: false,
      scrollParent: false,
      barWidth: 5,
      cursorColor: "white",
      // backend: "MediaElement",
      // mediaControls: true
      responsive: true,
      removeMediaElementOnDestroy: false
    })
    this.ws.pause()
    this.ws.load(this.tracklist[0].ref)
    this.activeTrack = this.tracklist[0].ref
    // setTimeout(() => this.playHandler(this.tracklist[0].ref, 0), 1000); 
  }

  playHandler(ref, index){
    var elems = document.getElementsByClassName('play-btns')
    for(var i = 0; i < elems.length; i ++){
      this.buttonSwitch(i, 'play')
    }
    if(ref == this.activeTrack){
      this.buttonSwitch(index, "pause")
      this.ws.play()
    } else {
      this.findTrack(ref, index).then(res => {
        this.buttonSwitch(index, 'pause')
        this.ws.play()
      })
    }
  }

  pauseHandler(index){
    this.ws.pause()
    this.buttonSwitch(index, 'play')
  }

  findTrack(ref, index){
    console.log('finding...', ref)
    return new Promise (resolve => {
      this.buttonSwitch(index, "spin")
      this.ws.load(ref)
      this.activeTrack = ref
      this.ws.on('ready', function(){
        resolve()
      })
    })
  }

  buttonSwitch(index, action){
    switch (action){
      case 'spin':
        document.getElementById('play-' + index).style.display = 'none'
        document.getElementById('pause-' + index).style.display = 'none'
        document.getElementById('spinner-' + index).style.display = 'inline-block'
        break
      case 'pause':
        document.getElementById('play-' + index).style.display = 'none'
        document.getElementById('pause-' + index).style.display = 'inline-block'
        document.getElementById('spinner-' + index).style.display = 'none'
        break
      case 'play':
        document.getElementById('play-' + index).style.display = 'inline-block'
        document.getElementById('pause-' + index).style.display = 'none'
        document.getElementById('spinner-' + index).style.display = 'none'
        break
    }
  }

}
