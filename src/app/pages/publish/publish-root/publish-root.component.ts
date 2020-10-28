import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './publish-root.component.html',
  styleUrls: ['./publish-root.component.scss']
})
export class PublishRootComponent implements OnInit {
  currentStep = 0;
  index = '选择数据源';

  constructor() { }

  ngOnInit(): void {
  }

  pre(): void {
    this.currentStep -= 1;
    this.changeContent();
  }

  next(): void {
    this.currentStep += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.currentStep) {
      case 0: {
        this.index = '选择数据源';
        break;
      }
      case 1: {
        this.index = '选择样式';
        break;
      }
      case 2: {
        this.index = '发布服务';
        break;
      }
      default: {
        this.index = 'error';
      }
    }

  }
}
