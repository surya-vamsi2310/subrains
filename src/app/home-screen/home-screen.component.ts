import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

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

}
