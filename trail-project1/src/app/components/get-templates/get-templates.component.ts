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
  count5: any;
  count3: any;
  count1: any;
  count2: any;
  count4: any;
  formname: any;
  tempname: any;
  idex: any;
  deleteformid: any;
  deleteddataid: any;
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
     console.log(JSON.parse((<any>data)._body));
     this.formstemplatesArr =  JSON.parse((<any>data)._body);
   });
   }
   /* Get All Form templates Ended */

   /*get template Data Started*/
    gettemplateData(val) {
       console.log(val);
       this.htmlcontentdiv = true ;
       this.createbutton =  true ;
       this.formhtmlcontentdiv = false ;
       this.updateButton = false ;
       this.templateId = val ;
       this.serviceCall.getCallByParameter('/DynamicForm/GetFormById/' , val).subscribe(data => {
       console.log(data , 'ggggggggggggggghhhhhhhhhhhhhhhhhhh');
       this.templatename = (<any>data).accordion   + ' - ' +  (<any>data).formName  ;
       this.testhtml = (<any>data).htmlContent ;
       document.getElementById('createForm').classList.remove('hideele');
     });
    }
   /* get template Data Ended */
   /* get all forms started  */
   getAllForms() {
    this.htmlcontentdiv = false ;
    this.serviceCall.getCall('/DynamicForm/GetFormsData').subscribe(data => {
      console.log(JSON.parse((<any>data)._body));
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
     this.count1 = 0;
     this.count2 = 0;
     this.count3 = 0;
     this.count4 = 0;
     this.count5 = 0;
     for ( let i = 0; i < ids.length; i++) {
         // tslint:disable-next-line:radix
         ary[i] = parseInt(( <any>ids[i]).value);
         if (i < 5 ) {
           this.count1 = this.count1 + ary[i];
           if (i === 4) {
             ary[5] = this.count1;
             i++;
           }
         } else if (i >= 5 && i < 11 ) {
           this.count2 = this.count2 + ary[i];
           if (i === 10) {
             ary[11] = this.count2;
             i++;
           }
         } else if ( i >= 11 && i < 17 ) {
           this.count3 = this.count3 + ary[i];
           if (i === 16) {
             ary[17] = this.count3;
             i++;
           }
         } else if (i >= 18 && i < 23 ) {
           this.count4 = this.count4 + ary[i];
           if (i === 22) {
             ary[23] = this.count4;
             i++;
           }
         } else if (i >= 24 && i < 29) {
           this.count5 = this.count5 + ary[i];
           if (i === 28) {
             ary[29] = this.count5;
             i++;
           }
         }
     }
        console.log(ary);
        this.formDataArrays = ary ;
    document.getElementById('formdataNameId').click();
    this.saveorUpdate = val ;
   }
    /*Formdata name Ends */


    formDatabynamecancel() {
    this.htmlcontentdiv = false ;
    }
    formDatabycancel() {
      this.formhtmlcontentdiv = false ;
      }
    /*save Formdata   starts */


    saveFormData() {
     // console.log(this.templateId);
      if (this.formdataname === undefined) {
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
        console.log(formdataobj , 'dkjfhkdhfksdjfksdkfhskdf');
        if (this.saveorUpdate == 'save') {
          this.serviceCall.PostCall('/DynamicForm/InsertFormData' , formdataobj).subscribe(data => {
           console.log(data);
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
      this.serviceCall.getCallByParameter('/DynamicForm/GetFormDataById/' , val).subscribe(data => {
       console.log((<any>data));
        this.formdataname = (<any>data).formDataName  ;
        this.formRecordname = (<any>data).customFormName  + '-' +  (<any>data).formDataName  ;
        this.formrecordhtml = (<any>data).htmlData ;
        const ids = (document.getElementsByClassName('getval'));
        for ( let i = 0; i < ids.length ; i++) {
          ( <any>ids[i]).value =  (<any>data).strArray[i];
        }
      });

    }
    /*Formdata Get Ends */



    deleteform(inde, formname) {
      this.htmlcontentdiv = false ;
      this.formhtmlcontentdiv = false ;
      console.log(inde  , 'kllkkllklklklklklklklklk' , formname);
      for (let i = 0; i < this.formstemplatesArr.length; i++ ) {
        if (formname === this.formstemplatesArr[i].formName) {
          if (this.formstemplatesArr[i].formData.length > 0) {
            alert('Please Delete the form after we delete template') ;
          } else {
            this.deleteformid =  this.formstemplatesArr[i].id;
            console.log(this.deleteformid , 'hhhhhhhhhhhhhhh');
            this.formstemplatesArr.splice(inde, 1);
             this.serviceCall.deleteform('/DynamicForm/DeleteForm/' , this.deleteformid).subscribe(data => {
                  console.log(data , 'hgkdfghkdfsgksj');
                 });
          }
        }
      }

    }






    deleteformdata(index , tempname , fmname) {
      console.log(index , 'ghdksdhfgksdfhgkdsfghksd', tempname , 'dfdjghdkfhgkdfhg'  , fmname);
      console.log(this.formstemplatesArr , 'sadkjbsjafbhdsjf');
      this.htmlcontentdiv = false;
      this.formhtmlcontentdiv = false ;
      this.idex = index;
      this.tempname = tempname;
      this.formname = fmname;
    }

    formdatadelete() {
      this.htmlcontentdiv = false;
      this.formhtmlcontentdiv = false ;
      for (let i = 0; i < this.formstemplatesArr.length; i++ ) {
        if (this.tempname === this.formstemplatesArr[i].formName) {
          for (let k = 0; k < this.formstemplatesArr[i].formData.length; k++) {
              if (this.formstemplatesArr[i].formData[k].formDataName === this.formname) {
                this.deleteddataid = this.formstemplatesArr[i].formData[k].formDataId;
                this.formstemplatesArr[i].formData.splice(this.idex, 1);
                 this.serviceCall.deleteformdata('/DynamicForm/DeleteFormData/', this.deleteddataid).subscribe(data => {
                  console.log(data , 'hgkdfghkdfsgksj');
                 });
              }
          }
        }

      }

    }




}
