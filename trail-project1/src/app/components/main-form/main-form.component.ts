import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

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
   public invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.hospServicesTotal = true ;
    this.pecfServicesTotal = true ;
    this.outReachServicesTotal = true ;
    this.trainServicesTotal = true ;
    this.otherServicesTotal = true ;
    this.changetoggles();
    this.countervaluehosp = 0 ;
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
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
    let ServerResponseHtml = ` <div class="row">
    <div class="col-md-3" style="padding-top:18px;">
       <label class="control-label checkbox-inline">
       <input type="checkbox" [(ngModel)]="otherNewPatient"><span >New Patients Seen</span></label>
    </div>
 <div class="col-md-9">
     <div class="row">
         <div class="col-sm-2" *ngIf="othergenderFields">
             <label class="labelCenter control-label">AM</label>
             <input type="text"  class="form-control SmallInput " />
           </div>
          <div class="col-sm-2"  *ngIf="othergenderFields">
             <label class="labelCenter control-label">AF</label>
             <input type="text"   class="form-control SmallInput" />
            </div>
            <div class="col-md-2"   *ngIf="otherotherFields">
               <label class="labelCenter control-label">OT</label>
               <input type="text"  class="form-control SmallInput" />
              </div>
              <div class="col-md-2"  *ngIf="otherchildFields">
                 <label class="labelCenter control-label">CM</label>
                 <input type="text" class="form-control SmallInput" />
               </div>
               <div class="col-md-2"  *ngIf="otherchildFields">
                   <label class=" labelCenter control-label">CF</label>
                   <input type="text"  class="form-control SmallInput" />
               </div>
               <div class="col-md-2"  *ngIf="othertotalFields">
                     <label class="labelCenter control-label">Total</label>
                     <input type="text"  class="form-control SmallInput" />
               </div>
           </div>
     </div>
  </div>`;
    document.getElementById('clone').appendChild('') ;
  }

  addNewRow() {
    // console.log(this._fb.array);
     const control = <FormArray>this.invoiceForm.controls['itemRows'];
     control.push(this.initItemRows());
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
