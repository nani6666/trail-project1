import { RestcallsService } from './../../services/restcalls.service';
import { DynamicFormsComponent } from './../dynamic-forms/dynamic-forms.component';
import { Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef, ElementRef ,Renderer2} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('parent1', { read: ViewContainerRef }) container1: ViewContainerRef;
  @ViewChild('parent2', { read: ViewContainerRef }) container2: ViewContainerRef;
  @ViewChild('parent3', { read: ViewContainerRef }) container3: ViewContainerRef;
  @ViewChild('parent4', { read: ViewContainerRef }) container4: ViewContainerRef;
  @ViewChild('divdata') data1: ElementRef;

  panelOpenState: boolean;
  checkbox: any;
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
  labelVal: any ;
  deletecustomelement: any;
  currencyData: any ;
   public invoiceForm: FormGroup;

  constructor(private _fb: FormBuilder , private _cfr: ComponentFactoryResolver,
       private renderer: Renderer2 , private serviceCall: RestcallsService ) { }

  ngOnInit() {
    this.hospServicesTotal = true ;
    this.pecfServicesTotal = true ;
    this.outReachServicesTotal = true ;
    this.trainServicesTotal = true ;
    this.otherServicesTotal = true ;
    this.changetoggles();
    this.countervaluehosp = 0 ;
    this.currencyApi();
  }

  addCustomField() {
    document.getElementById('customdata').click();
  }

  removeObject() {
    if (document.getElementById('rmvclass')) {
      const child = document.getElementById('rmvclass');
      const parent = document.getElementById('mainParent');
      parent.removeChild(child);
 }
 }

 custommodal(val) {
  // console.log(this.customElement);
   if (val == 'Text') {
    this.deletecustomelement = this.data1.nativeElement.insertAdjacentHTML('beforeend',
    '<div class="form-group " id="rmvclass"><div class="row "><div class="input-group">'
    + '<div class="col-md-6"><label class="control-label">' + this.labelVal
    + '</label><input type="text" class="form-control SmallInput"/>' +
    '<span class="input-group-text"><span class="input-group-append">' +
    '<a class="mylink" style="color:red;"><span class="fa fa-trash"></span></a></span>' +
    '</div></div></div></div>');
   } else if (val == 'Number') {
    this.deletecustomelement =  this.data1.nativeElement.insertAdjacentHTML('beforeend',
    '<div class="form-group " id="rmvclass"><div class="row "><div class="col-md-6"><label class="control-label">' + this.labelVal
    + ' </label><input type="number" class="form-control SmallInput"/><a class="mylink"><i class="fa fa-trash"></i></a></div></div></div>');
   } else if (val == 'Date') {
    this.deletecustomelement =  this.data1.nativeElement.insertAdjacentHTML('beforeend',
    '<div class="form-group rmvclass" id="rmvclass"><div class="row "><div class="col-md-6"><label class="control-label">' + this.labelVal
    + ' </label><input type="date" class="form-control "/><a class="mylink"><i class="fa fa-trash"></i></a></div></div></div>');
   } else if (val == 'textarea') {
    this.deletecustomelement =  this.data1.nativeElement.insertAdjacentHTML('beforeend',
    '<div class="form-group rmvclass" id="rmvclass"><div class="row "><div class="col-md-6"><label class="control-label">' + this.labelVal
    + ' </label><textarea rows="10" class="form-control"/></textarea><a class="mylink">'
    + ' <i class="fa fa-trash"></i></a></div></div></div>');
   }
  //  } else if (this.customElement == 'currency') {
  //   this.data1.nativeElement.insertAdjacentHTML('beforeend',
  //   '<div class="form-group"><div class="row"><div class="col-md-6"><label class="control-label">' + this.labelVal
  //   + '</label><select class="form-control" ><option *ngFor="let data of currencyData" value="'+  + '">'
  //   + data.symbol + data.name + '>' +
  //    '</option></select><a (click)="removeObject()"><i class="fa fa-trash"></i></a></div></div></div>');
  //  }

     let children = document.getElementsByClassName('mylink');
     for (let i = 0; i < children.length; i++) {
     children[i].addEventListener('click', (event: Event) => {
       this.removeObject();

      });
  }

 }

  // api for currencies
  currencyApi() {
    this.serviceCall.getAllCurrencies().subscribe(data => {
      this.currencyData = JSON.parse((<any>data)._body);
      // console.log( this.currencyData);
     });
  }

 onlabel(labelvalue: any) {
  console.log(labelvalue);
  this.labelVal = labelvalue ;
 }
  addComponent(val) {
    document.getElementById('labelid').click();
    const comp = this._cfr.resolveComponentFactory(DynamicFormsComponent);
    if (val == 'hosp') {
      const expComponent = this.container.createComponent(comp);
      expComponent.instance._ref = expComponent;
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




  initItemRows() {
    return this._fb.group({
        maleinputval: [''],
        femaleinputval:  [''],
        othersinputval: [''],
        cminputval: [''],
        cfinputval: [''],
        totalinputval: [''],

    });
}
}
