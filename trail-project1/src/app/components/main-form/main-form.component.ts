import { element } from 'protractor';
import { RestcallsService } from './../../services/restcalls.service';
import { DynamicFormsComponent } from './../dynamic-forms/dynamic-forms.component';
import { Component,
  OnInit, AfterViewInit ,
  ViewChild, OnDestroy ,
  ComponentFactoryResolver,
  ViewContainerRef, ElementRef , Renderer2} from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
declare const jQuery: any;
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit , AfterViewInit , OnDestroy {
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('parent1', { read: ViewContainerRef }) container1: ViewContainerRef;
  @ViewChild('parent2', { read: ViewContainerRef }) container2: ViewContainerRef;
  @ViewChild('parent3', { read: ViewContainerRef }) container3: ViewContainerRef;
  @ViewChild('parent4', { read: ViewContainerRef }) container4: ViewContainerRef;
  @ViewChild('divdata') data1: ElementRef;

  panelOpenState: boolean;
  checkbox: any;
  countVal = 0;
  hospServciesGender: any;
  hospServciesOther: any;
  hospServicesChild: any;
  hospServicesTotal: any;
  hospgenderFields: boolean;
  hospchildFields: boolean;
  hospotherFields: boolean;
  hosptotalFields: boolean;
  hospSAervicesSelectall: any ;
  hospCatracts: boolean ;
  hospglassesDistrbuted: boolean ;
  hospglassPrescribe: boolean ;
  hospReviewPatients: boolean ;
  hospNewPatient: boolean ;
  pecfServciesGender: any;
  pecfServciesOther: any;
  pecfServicesChild: any;
  pecfServicesTotal: any;
  pecfgenderFields: boolean;
  pecfchildFields: boolean;
  pecfotherFields: boolean;
  pecftotalFields: boolean;
  pecfSAervicesSelectall: any ;
  pecfCatracts: boolean ;
  pecfglassesDistrbuted: boolean ;
  pecfglassPrescribe: boolean ;
  pecfReviewPatients: boolean ;
  pecfNewPatient: boolean ;
  outReachServciesGender: any;
  outReachServciesOther: any;
  outReachServicesChild: any;
  formElement: any;
  outReachServicesTotal: any;
  outReachgenderFields: boolean;
  outReachchildFields: boolean;
  outReachotherFields: boolean;
  outReachtotalFields: boolean;
  outReachSAervicesSelectall: any ;
  outReachCatracts: boolean ;
  outReachglassesDistrbuted: boolean ;
  outReachglassPrescribe: boolean ;
  outReachReviewPatients: boolean ;
  outReachNewPatient: boolean ;
  trainServciesGender: any;
  trainServciesOther: any;
  trainServicesChild: any;
  trainServicesTotal: any;
  traingenderFields: boolean;
  trainchildFields: boolean;
  trainotherFields: boolean;
  traintotalFields: boolean;
  trainSAervicesSelectall: any ;
  trainCatracts: boolean ;
  trainglassesDistrbuted: boolean ;
  trainglassPrescribe: boolean ;
  trainReviewPatients: boolean ;
  trainNewPatient: boolean ;
  otherServciesGender: any;
  otherServciesOther: any;
  otherServicesChild: any;
  otherServicesTotal: any;
  othergenderFields: boolean;
  otherchildFields: boolean;
  otherotherFields: boolean;
  othertotalFields: boolean;
  otherSAervicesSelectall: any ;
  otherCatracts: boolean ;
  otherglassesDistrbuted: boolean ;
  otherglassPrescribe: boolean ;
  otherReviewPatients: boolean ;
  otherNewPatient: boolean ;
  countervaluehosp: number ;
  customlabel: any;
  customElement: any ;
  currencysymbol: any ;
  labelVal: any ;
  deletecustomelement: any;
  currencyData: any ;
  minvalue: any ;
  maxvalue: any ;
  lengthChars: any;
  sizeOfField: any ;
  presentdate: Date;
  customSection: boolean;
  customlabelfield: boolean;
  id: any ;
  public invoiceForm: FormGroup;
   /* fields properties  Starts */
   sizeoffield: boolean ;
   /* text field properties  Starts */
  textfieldattr: boolean ;
  multilineText: any ;
/* text field properties  Ends */
 /* number field properties  Starts */
 numberfieldattr: boolean ;
 typeofnumber: any ;
 /* number field properties  Ends */
 datefieldattr: boolean ;
 daterange: any ;
 datemin: any ;
 datemax: any ;
  /* currency field properties  Starts */
  currencyfieldattr: boolean ;
  currencyval: any ;
  typeofcurrency: any ;
  /* currency field properties  Ends */
/* fields properties  Ends */
  constructor(private _fb: FormBuilder , private _cfr: ComponentFactoryResolver,
       private renderer: Renderer2 , private serviceCall: RestcallsService ) { }
       ngAfterViewInit() {
        // console.log(this.data1.nativeElement);
      }
  ngOnInit() {
  //   this.startTime();
  // this.id = setInterval(() => {
  //   this.startTime();
  // }, 500);
  //  this.presentdate = new Date();
    this.hospServicesTotal = true ;
    this.hospServciesGender = true ;
    this.hospServciesOther = true ;
    this.hospServicesChild  = true ;
    this.pecfServicesTotal = true ;
    this.outReachServicesTotal = true ;
    this.trainServicesTotal = true ;
    this.otherServicesTotal = true ;
    this.changetoggles();
    this.countervaluehosp = 0 ;
    this.currencyApi();
    this.currencyval = '';
  }

  ngOnDestroy() {
    // if (this.id) {
    //   clearInterval(this.id);
    // }
  }

  addCustomField() {
    this.customSection = true ;
  }

  /* live time method starts */
  startTime() {
    const today = new Date();
    let h = today.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    let m = today.getMinutes();
    m = m < 10 ? 0 + m : m;
    let s = today.getSeconds();
    // m = this.checkTime(m);
    // s = this.checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ':' + m + ':' + s + ' ' + ampm;
    const t = setInterval(this.startTime, 500);
}
/* live time method Ends */

  gettingFormElements(val) {
   // console.log(val);
    if (val == 'Text') {
      this.customlabelfield =  true ;
      this.textfieldattr = true ;
      this.sizeoffield = true ;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
    } else if (val == 'Number') {
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = true ;
      this.numberfieldattr = true ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
    } else if (val == 'Date') {
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = false ;
      this.numberfieldattr = false ;
      this.datefieldattr =  true ;
      this.currencyfieldattr = false ;
    } else if (val == 'textarea') {
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = true ;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
    } else if (val == 'currency') {
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = false ;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = true ;
    } else if (val == 'multiple') {
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = false ;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
    }
    this.customElement = val;
  }


 custommodal() {
  if (this.customElement === undefined) {
  alert('Please Choose one of element');
  } else if (this.labelVal === " ") {
  alert('Please Enter Label');
  }  else {
  this.customSection =  false ;
   this.countVal++ ;
   if (this.customElement == 'Text') {
      this.creatingElements(this.labelVal);
   } else if (this.customElement == 'Number') {
    this.creatingElements(this.labelVal);
   } else if (this.customElement == 'Date') {
    this.creatingElements(this.labelVal);
   } else if (this.customElement == 'textarea') {
    this.creatingElements(this.labelVal);
   } else if (this.customElement == 'currency') {
    this.creatingElements(this.labelVal);
   }
}
     let children = document.getElementsByClassName('mylink');
     for (let i = 0; i < children.length; i++) {
     children[i].addEventListener('click', (event: Event) => {
      //  console.log((<any>event).target);
      //  console.log((<any>event).target.closest('div .form-group')) ;
       const delobj = (<any>event).target.closest('div .form-group') ;
       delobj.remove();
      // this.removeObject();
    });
  }

 }

  // api for currencies
  currencyApi() {
    this.currencysymbol = [];
    this.serviceCall.getAllCurrencies().subscribe(data => {
      this.currencyData = JSON.parse((<any>data)._body);
       this.currencyData.forEach(ele => {
         this.currencysymbol.push(ele.name + '  -  ' + ele.symbol );
        // console.log( this.currencysymbol);
       });
     });
    // return this.currencysymbol ;
  }

 onlabel(labelvalue: any) {
  // console.log(labelvalue);
  this.labelVal = labelvalue ;
 }
  addComponent(val) {
    // document.getElementById('labelid').click();
    const comp = this._cfr.resolveComponentFactory(DynamicFormsComponent);
    if (val == 'hosp') {
      const expComponent = this.container.createComponent(comp);
      expComponent.instance._ref = expComponent;
      expComponent.instance.modal();
    } else if (val == 'pecf' ) {
      const expComponent = this.container1.createComponent(comp);
      expComponent.instance._ref = expComponent;
    } else if (val == 'outreach' ) {
      const expComponent = this.container2.createComponent(comp);
      expComponent.instance._ref = expComponent;
    }  else if (val == 'train' ) {
      const expComponent = this.container3.createComponent(comp);
      expComponent.instance._ref = expComponent;
    } else if (val == 'other' ) {
      const expComponent = this.container4.createComponent(comp);
      expComponent.instance._ref = expComponent;
    }

}

/*creating Elements starts*/
creatingElements(labelval) {
  const divele1 = document.createElement('div') ,
        divele2 = document.createElement('div') ,
        divele3 = document.createElement('div') ,
        divele4 = document.createElement('div') ,
        inputgroupdiv = document.createElement('div') ,
        labelele  = document.createElement('label') ,
        inputele =  document.createElement('input'),
        textareaele = document.createElement('textarea'),
        selectele = document.createElement('select'),
        optionele = document.createElement('option'),
        spanele =   document.createElement('span') ,
        anchortag = document.createElement('a') ,
        deletetrash = document.createElement('i') ;
        divele1.setAttribute('class' , 'form-group');
        divele2.setAttribute('class' , 'row');
        divele3.setAttribute('class' , 'col-sm-3');
        if (this.sizeOfField == 'small') {
          divele4.setAttribute('class' , 'col-sm-3');
        } else if (this.sizeOfField == 'Medium') {
          divele4.setAttribute('class' , 'col-sm-6');
        } else if (this.sizeOfField == 'Large') {
          divele4.setAttribute('class' , 'col-sm-9');
        } else {
          divele4.setAttribute('class' , 'col-sm-6');
        }

        inputgroupdiv.setAttribute('class' , 'input-group');
        labelele.setAttribute('class' , 'customlabel') ;
        labelele.textContent = labelval ;
        inputele.setAttribute('class' , 'form-control form-control-sm') ;
        selectele.setAttribute('class' , 'form-control form-control-sm') ;
        textareaele.setAttribute('class' , 'form-control form-control-sm') ;
        divele1.appendChild(divele2);
        divele2.appendChild(divele3);
        divele2.appendChild(divele4);
        divele3.appendChild(labelele);
        divele4.appendChild(inputgroupdiv);
         if (this.customElement == 'Text') {
           if ( this.multilineText == true) {
            inputgroupdiv.appendChild(textareaele);
            inputgroupdiv.appendChild(spanele);
           } else {
            inputgroupdiv.appendChild(inputele);
            inputgroupdiv.appendChild(spanele);
            inputele.setAttribute('type' , 'text') ;
            inputele.setAttribute('maxlength' , this.lengthChars) ;
           }

        } else if (this.customElement == 'Number' ) {
          inputele.setAttribute('type' , 'number') ;
          inputgroupdiv.appendChild(inputele);
          inputgroupdiv.appendChild(spanele);
          inputele.setAttribute('min' , this.minvalue) ;
          inputele.setAttribute('max' , this.maxvalue) ;
          if (this.typeofnumber == 'Decimal'){
            inputele.setAttribute('step' , '.01') ;
          } else {

          }
        } else if (this.customElement == 'Date') {
          if (this.daterange == true ) {
          inputgroupdiv.appendChild(inputele);
          inputgroupdiv.appendChild(spanele);
          inputele.setAttribute('type' , 'date') ;
          inputele.setAttribute('min' , this.datemin) ;
          inputele.setAttribute('max' ,  this.datemax) ;
          } else {
          inputgroupdiv.appendChild(inputele);
          inputgroupdiv.appendChild(spanele);
          inputele.setAttribute('type' , 'date') ;
          }
        }  else if (this.customElement == 'currency') {
          inputgroupdiv.appendChild(inputele);
          inputele.setAttribute('type' , 'number') ;
          inputele.setAttribute('step' , 'any') ;

          if (this.typeofcurrency == 'specific') {
            inputgroupdiv.appendChild(spanele);
            spanele.setAttribute('style' , 'padding-left:30px');
            spanele.textContent =  '  (' + this.currencyval + ' )';
            inputgroupdiv.appendChild(spanele);
          } else {
            inputgroupdiv.appendChild(selectele);
            selectele.setAttribute('id' , 'currencyId');
            const sel = document.getElementById('currencyId');
            this.currencysymbol.forEach(ele => {
              const opt = document.createElement('option');
              opt.appendChild(document.createTextNode(ele));
                opt.value = this.currencyval;
              selectele.appendChild(opt);
              });
              inputgroupdiv.appendChild(spanele);
          }

        }
        spanele.setAttribute('class' , 'mylink') ;
        deletetrash.setAttribute('class' , 'fa fa-trash delete') ;


      //  spanele.appendChild(anchortag);
        spanele.appendChild(deletetrash);
        this.data1.nativeElement.appendChild(divele1);
}

   changeCurrencyval(val) {
    const elem = document.getElementById('currencyId') ;
   }
/*creating Elements Ends */


  changetoggles() {
   /* hospital services section starts*/
   if (this.hospServciesGender == true) {
    this.hospgenderFields = true ;
   } else {
    this.hospgenderFields = false ;
   }
   if (this.hospServciesOther == true) {
    this.hospotherFields = true ;
   } else {
    this.hospotherFields = false ;
   }
   if (this.hospServicesChild == true) {
    this.hospchildFields = true ;
   } else {
    this.hospchildFields = false ;
   }
   if (this.hospServicesTotal == true) {
    this.hosptotalFields = true ;
   } else {
    this.hosptotalFields = false ;
   }
   if (this.hospSAervicesSelectall == true) {
    this.hospCatracts = true ;
    this.hospglassesDistrbuted = true ;
    this.hospglassPrescribe = true ;
    this.hospReviewPatients = true ;
    this.hospNewPatient = true ;
   } else {
    this.hospCatracts = false ;
    this.hospglassesDistrbuted = false ;
    this.hospglassPrescribe = false ;
    this.hospReviewPatients = false ;
    this.hospNewPatient = false ;
   }
   /* hospital services section Ends*/
    /* PECF services section starts*/
    if (this.pecfServciesGender == true) {
      this.pecfgenderFields = true ;
     } else {
      this.pecfgenderFields = false ;
     }
     if (this.pecfServciesOther == true) {
      this.pecfotherFields = true ;
     } else {
      this.pecfotherFields = false ;
     }
     if (this.pecfServicesChild == true) {
      this.pecfchildFields = true ;
     } else {
      this.pecfchildFields = false ;
     }
     if (this.pecfServicesTotal == true) {
      this.pecftotalFields = true ;
     } else {
      this.pecftotalFields = false ;
     }
     if (this.pecfSAervicesSelectall == true) {
      this.pecfCatracts = true ;
      this.pecfglassesDistrbuted = true ;
      this.pecfglassPrescribe = true ;
      this.pecfReviewPatients = true ;
      this.pecfNewPatient = true ;
     } else {
      this.pecfCatracts = false ;
      this.pecfglassesDistrbuted = false ;
      this.pecfglassPrescribe = false ;
      this.pecfReviewPatients = false ;
      this.pecfNewPatient = false ;
     }
     /* PECF services section Ends*/
      /* training services section starts*/
    if (this.outReachServciesGender == true) {
      this.outReachgenderFields = true ;
     } else {
      this.outReachgenderFields = false ;
     }
     if (this.outReachServciesOther == true) {
      this.outReachotherFields = true ;
     } else {
      this.outReachotherFields = false ;
     }
     if (this.outReachServicesChild == true) {
      this.outReachchildFields = true ;
     } else {
      this.outReachchildFields = false ;
     }
     if (this.outReachServicesTotal == true) {
      this.outReachtotalFields = true ;
     } else {
      this.outReachtotalFields = false ;
     }
     if (this.outReachSAervicesSelectall == true) {
      this.outReachCatracts = true ;
      this.outReachglassesDistrbuted = true ;
      this.outReachglassPrescribe = true ;
      this.outReachReviewPatients = true ;
      this.outReachNewPatient = true ;
     } else {
      this.outReachCatracts = false ;
      this.outReachglassesDistrbuted = false ;
      this.outReachglassPrescribe = false ;
      this.outReachReviewPatients = false ;
      this.outReachNewPatient = false ;
     }
     /* outreach services section Ends*/
     /* training services section starts*/
    if (this.trainServciesGender == true) {
      this.traingenderFields = true ;
     } else {
      this.traingenderFields = false ;
     }
     if (this.trainServciesOther == true) {
      this.trainotherFields = true ;
     } else {
      this.trainotherFields = false ;
     }
     if (this.trainServicesChild == true) {
      this.trainchildFields = true ;
     } else {
      this.trainchildFields = false ;
     }
     if (this.trainServicesTotal == true) {
      this.traintotalFields = true ;
     } else {
      this.traintotalFields = false ;
     }
     if (this.trainSAervicesSelectall == true) {
      this.trainCatracts = true ;
      this.trainglassesDistrbuted = true ;
      this.trainglassPrescribe = true ;
      this.trainReviewPatients = true ;
      this.trainNewPatient = true ;
     } else {
      this.trainCatracts = false ;
      this.trainglassesDistrbuted = false ;
      this.trainglassPrescribe = false ;
      this.trainReviewPatients = false ;
      this.trainNewPatient = false ;
     }
     /* training services section Ends*/
      /* other services section starts*/
    if (this.otherServciesGender == true) {
      this.othergenderFields = true ;
     } else {
      this.othergenderFields = false ;
     }
     if (this.otherServciesOther == true) {
      this.otherotherFields = true ;
     } else {
      this.otherotherFields = false ;
     }
     if (this.otherServicesChild == true) {
      this.otherchildFields = true ;
     } else {
      this.otherchildFields = false ;
     }
     if (this.otherServicesTotal == true) {
      this.othertotalFields = true ;
     } else {
      this.othertotalFields = false ;
     }
     if (this.otherSAervicesSelectall == true) {
      this.otherCatracts = true ;
      this.otherglassesDistrbuted = true ;
      this.otherglassPrescribe = true ;
      this.otherReviewPatients = true ;
      this.otherNewPatient = true ;
     } else {
      this.otherCatracts = false ;
      this.otherglassesDistrbuted = false ;
      this.otherglassPrescribe = false ;
      this.otherReviewPatients = false ;
      this.otherNewPatient = false ;
     }
     /* other services section Ends*/
  }

  clonerow() {
    this.countervaluehosp++;
     console.log(this.countervaluehosp);
    let ServerResponseHtml = '';
   //  document.getElementById('clone').appendChild('') ;
  }

}
