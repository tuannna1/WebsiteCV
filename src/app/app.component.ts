import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShopDuAn';


  constructor(private router: Router) {
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
        this.createNode('node0', 'bootstrap.js');
        this.createNode('node1', 'jotform.js');
        this.createNode('node2', 'location.js');
        this.createNode('node3', 'protoplus.js');
        this.createNode('node4', 'protoplus-ui-form.js');
        this.createNode('node5', 'prototype.js');
        this.createNode('node6', 'vendor/json2.js');
        this.createNode('node7', 'js/google.js');
        this.createNode('node8', 'main.js');
        this.createNode('node9', 'script.js');
        this.createNode('node10', 'calendarview.js');
        this.createNode('node11', 'classie-search.js');
        this.createNode('node12', 'modernizr-2.6.2.min.js');
      }
    });
  }


}
