import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  relevantNavs = [
    { name: '首页', icon: 'home' },
    { name: '资源集', icon: 'person_add' },
    { name: '图层管理', icon: 'post_add' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
