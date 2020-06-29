import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // categoryColor = 'white'

  // @ViewChild('VideoContainer', { static: true }) VideoContainer: ElementRef

  constructor() { }

  ngOnInit(): void {

    $(window).scroll(function () {
      var $window = $(window),
        $body = $('.categoryColor'),
        $panel = $('.panel');
      var scroll = $window.scrollTop() + ($window.height() / 3);

      $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
          });
          $body.addClass('color-' + $(this).data('color'));
        }
      });
    }).scroll();
  }

  // ngAfterContentInit() {
  //   this.VideoContainer.nativeElement.play();
  // }

}
