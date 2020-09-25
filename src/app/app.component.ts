import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShopDuAn';

  constructor(private router: Router,) {
  }

// $(document).ready(function(){

//   // hide #back-top first
//   $("#back-top").hide();

//   // fade in #back-top
//   $(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//         $('#back-top').fadeIn();
//       } else {
//         $('#back-top').fadeOut();
//       }
//     });

//     // scroll body to 0px on click
//     $('#back-top .fi-arrow-up').click(function () {
//       $('body,html').animate({
//         scrollTop: 0
//       }, 800);
//       return false;
//     });
//   });

// });
  createNode(nodeName: string, scriptName: string) {
    if (document.getElementById(nodeName) != null) {
      document.getElementById(nodeName).remove();
    }
    const node = document.createElement('script');
    node.src = 'assets/js/' + scriptName;
    node.type = 'text/javascript';
    node.async = false;
    node.id = nodeName;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.createNode('node1', 'calendarview.js');
        this.createNode('node2', 'jotform.js');
        this.createNode('node3', 'location.js');
        this.createNode('node4', 'protoplus.js');
        this.createNode('node5', 'protoplus-ui-form.js');
        this.createNode('node6', 'prototype.js');
        this.createNode('node7', 'vendor/json2.js');
        this.createNode('node8', 'js/google.js');
        this.createNode('node11', 'main.js');
        this.createNode('node12', 'script.js');
        this.createNode('node13', 'bootstrap.js');
        this.createNode('node14', 'classie-search.js');
        this.createNode('node15', 'demo1-search.js');
        this.createNode('node16', 'easing.js');
        this.createNode('node17', 'jquery.countup.js');
        this.createNode('node18', 'jquery.waypoints.min.js');
        this.createNode('node19', 'jquery.zoomslider.min.js');
        this.createNode('node20', 'jquery-1.11.1.min.js');
        this.createNode('node21', 'jquery-2.2.3.min.js');
        this.createNode('node22', 'modernizr-2.6.2.min.js');
      }
    });
  }


}
