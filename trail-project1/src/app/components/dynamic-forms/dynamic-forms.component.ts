import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  _ref: any;
  labelval: any;
  constructor() { }

  ngOnInit() {
  }

    // method to remove the component from parent page
    removeObject() {
      this._ref.destroy();
   }

    // method to save the component from parent page
   save() {
    alert('Saved Successfully!');
  }

  onlabel(labelvalue: any) {
   this.labelval = labelvalue ;
  }

  modal() {
    document.getElementById('labelid').click();
  }
}
