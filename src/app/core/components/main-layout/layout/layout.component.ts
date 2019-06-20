import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})

export class LayoutComponent implements OnInit {

  private activeSidebar: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onToggle(toggle) {
    this.activeSidebar = toggle;
  }
}
