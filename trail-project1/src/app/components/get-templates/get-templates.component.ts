import { Component,
  OnInit, AfterViewInit ,
  ViewChild, OnDestroy , ViewEncapsulation ,
  ComponentFactoryResolver,
  ViewContainerRef, ElementRef , Renderer2 } from '@angular/core';
import { element } from 'protractor';
import { RestcallsService } from './../../services/restcalls.service';
@Component({
  selector: 'app-get-templates',
  templateUrl: './get-templates.component.html',
  styleUrls: ['./get-templates.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GetTemplatesComponent implements OnInit {
  @ViewChild('htmlcontent') data1ele: ElementRef;
 formstemplatesArr: any ;
 formsArray: any ;
 testhtml: any ;
 templatename: any ;
 htmlcontentdiv: boolean ;
  constructor(private serviceCall: RestcallsService) { }

  ngOnInit() {
    this.getAllFormtemplates();
    this.htmlcontentdiv = false ;
  }

  /* Get All Form templates Started */
   getAllFormtemplates() {
   this.serviceCall.getCall('/DynamicForm/GetForms').subscribe(data => {
     console.log(JSON.parse((<any>data)._body));
     this.formstemplatesArr =  JSON.parse((<any>data)._body);
   });
   }
   /* Get All Form templates Ended */

   /*get template Data Started*/
    getformData(val) {
      this.htmlcontentdiv = true ;
    console.log(val);
     this.serviceCall.getCallByParameter('/DynamicForm/GetFormById/' , val).subscribe(data => {
       console.log(data);
       this.templatename = (<any>data).formName  + '-' + ' ( ' + (<any>data).accordion + ') ' ;
       this.testhtml = (<any>data).htmlContent ;
     });
    }
   /* get template Data Ended */
   /* get all forms started  */
   getAllForms() {
    this.serviceCall.getCall('/DynamicForm/GetFormsData').subscribe(data => {
      console.log(JSON.parse((<any>data)._body));
      this.formsArray =  JSON.parse((<any>data)._body);
    });
    }
    /* get all forms Ended  */
}
