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
 formdataname: any ;
 templateId: any ;
 formDataId: any ;
 interval: any;
 formhtmlContent: any ;
 formRecordname: any ;
 validFormDataName: boolean ;
 formhtmlcontentdiv: boolean ;
 formrecordhtml: any;
 formDataArrays: any ;
 formDataGetArray: any ;
 htmlcontentdiv: boolean ;
 createbutton: boolean ;
 updateButton: boolean ;
 saveorUpdate: any ;
  constructor(private serviceCall: RestcallsService) { }

  ngOnInit() {
    this.getAllFormtemplates();
    this.htmlcontentdiv = false ;
    this.formDataId = '';
  }

  /* Get All Form templates Started */
   getAllFormtemplates() {
   this.serviceCall.getCall('/DynamicForm/GetForms').subscribe(data => {
     // console.log(JSON.parse((<any>data)._body));
     this.formstemplatesArr =  JSON.parse((<any>data)._body);
   });
   }
   /* Get All Form templates Ended */

   /*get template Data Started*/
    gettemplateData(val) {
     // console.log(val);
       this.htmlcontentdiv = true ;
       this.createbutton =  true ;
       this.formhtmlcontentdiv = false ;
       this.updateButton = false ;
       this.templateId = val ;
       this.serviceCall.getCallByParameter('/DynamicForm/GetFormById/' , val).subscribe(data => {
       console.log(data);
       this.templatename = (<any>data).formName  + '-' + ' ( ' + (<any>data).accordion + ') ' ;
       this.testhtml = (<any>data).htmlContent ;
       document.getElementById('createForm').classList.remove('hideele');
     });
    }
   /* get template Data Ended */
   /* get all forms started  */
   getAllForms() {
    this.htmlcontentdiv = false ;
    this.serviceCall.getCall('/DynamicForm/GetFormsData').subscribe(data => {
      // console.log(JSON.parse((<any>data)._body));
      this.formsArray =  JSON.parse((<any>data)._body);
    });
    }
    /* get all forms Ended  */
   /*Formdata name  starts */
   formDatabyname(val) {
   // event.preventDefault();
   //  console.log(val);
     const el = document.getElementById('formDataHtml');
    // console.log(el);
     this.formhtmlContent = el.outerHTML ;
     const form = document.getElementsByTagName('input')[1].value;
     const length = document.getElementsByTagName('input').length;
     const ids = document.getElementsByClassName('getval');
        const ary = new Array();
        for ( let i = 0; i < ids.length; i++) {
            ary[i] = ( <any>ids[i]).value;
        }
        console.log(ary);
        this.formDataArrays = ary ;
       // console.log(this.formDataArrays);
    document.getElementById('formdataNameId').click();
    this.saveorUpdate = val ;
   }
    /*Formdata name Ends */
    /*save Formdata   starts */
    saveFormData() {
     // console.log(this.templateId);
      if (this.formdataname == undefined) {
       this.validFormDataName = true ;
      } else {
        this.validFormDataName = false ;
        // this.formdataname = '';
        document.getElementById('okbtnform').setAttribute('data-dismiss' , 'modal');
        const formdataobj = {
          'formDataId': (this.formDataId === '') ? 0 : this.formDataId,
          'formDataName': this.formdataname ,
          'customFormId': this.templateId,
          'htmlData':  this.formhtmlContent,
          'strArray':  this.formDataArrays
        };
        if (this.saveorUpdate == 'save') {
          this.serviceCall.PostCall('/DynamicForm/InsertFormData' , formdataobj).subscribe(data => {
           //  console.log(data);
           this.htmlcontentdiv = false ;
            this.getAllFormtemplates();
          });
        } else {

          this.serviceCall.updateCall('/DynamicForm/UpdateForm/' + this.formDataId , formdataobj) .subscribe(data => {
            // console.log(data);
            this.formhtmlcontentdiv =  false;
           this.getAllFormtemplates();
        });
        }

      }

    }
    /*save Formdata   Ends */
    /*Formdata Get Starts */
    getformData(val) {
      console.log(val);
      this.formDataId = val ;
    //  document.getElementById('createForm').classList.add('hideele');
      this.htmlcontentdiv = false ;
      this.createbutton =  false ;
      this.formhtmlcontentdiv = true ;
      this.updateButton = true ;
    //  console.log(val);
      this.serviceCall.getCallByParameter('/DynamicForm/GetFormDataById/' , val).subscribe(data => {
       // console.log((<any>data).strArray);
        this.formdataname = (<any>data).formDataName  ;
        this.formRecordname = (<any>data).formDataName + '-' + ' ( ' + (<any>data).customFormName + ') ' ;
        this.formrecordhtml = (<any>data).htmlData ;
        const ids = (document.getElementsByClassName('getval'));
        for ( let i = 0; i < ids.length ; i++) {
          ( <any>ids[i]).value =  (<any>data).strArray[i];
        }

      });

    }
    /*Formdata Get Ends */

}
