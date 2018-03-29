import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  panelOpenState: boolean;
  checkbox: any;
  constructor() { }

  ngOnInit() {
  }

  testing() {
    console.log(this.checkbox);
  }
}
