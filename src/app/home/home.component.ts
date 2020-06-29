import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // categoryColor = 'white'

  // @ViewChild('VideoContainer', { static: true }) VideoContainer: ElementRef

  constructor() { }

  ngOnInit(): void {

   
  }

  // ngAfterContentInit() {
  //   this.VideoContainer.nativeElement.play();
  // }

}
