
import { Component,
  OnInit, AfterViewInit ,
  ViewChild, OnDestroy ,
  ComponentFactoryResolver,
  ViewContainerRef, ElementRef , Renderer2} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';
import { element } from 'protractor';
import { RestcallsService } from './../../services/restcalls.service';
import { DynamicFormsComponent } from './../dynamic-forms/dynamic-forms.component';
declare const jQuery: any;
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit , AfterViewInit , OnDestroy {
  isselectedrowgenders5: boolean;
  isselectedrowgenders4: boolean;
  isselectedrowgenders3: boolean;
  isselectedrowgenders2: boolean;
  isselectedrowgenders1: boolean;
  custonclonefunc: boolean;
  customSectiontoggel: boolean;
  applyclass: boolean;
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('parent1', { read: ViewContainerRef }) container1: ViewContainerRef;
  @ViewChild('parent2', { read: ViewContainerRef }) container2: ViewContainerRef;
  @ViewChild('parent3', { read: ViewContainerRef }) container3: ViewContainerRef;
  @ViewChild('parent4', { read: ViewContainerRef }) container4: ViewContainerRef;
  @ViewChild('divdata') data1: ElementRef;

  seletvalues: boolean;
  selecdate: any;
  selectmindate: any;
  isBtnDisableddiv: boolean;
  applycolor: boolean;
  CustomElements: string;
  panelOpenState: boolean;
  checkbox: any;
  countVal = 0;
  items: any[] = [];
  hospServciesGender: any;
  titleOfSelector: any ;
  customForm: FormGroup;
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
  requiredField: boolean ;
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
  elementsArray: any;
  customlabel: any;
  positionOfElement: any ;
  customElement: any ;
  currencysymbol: any ;
  indexofcustomElement: any;
  labelVal: any ;
  deletecustomelement: any;
  currencyData: any ;
  minvalue: any ;
  maxvalue: any ;
  lengthChars: any;
  sizeOfField: any ;
  presentdate: Date;
  offsetheight: any ;
  offsetbottom: any ;
  offsetleft: any;
  offsetwidth: any;
  offsetright: any;
  customSection: boolean;
  customlabelfield: boolean;
  formname: any;
  editelement: boolean ;
  accordionName: any;
  id: any ;
  inputvalue: any;
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
 disablesavetempbtn: boolean ;
 daterange: any ;
 datemin: any ;
 datemax: any ;
 originaleditArray: any ;
 discardEditArray: any;
  /* currency field properties  Starts */
  currencyfieldattr: boolean ;
  currencyval: any ;
  typeofcurrency: any ;
   /* currency field properties  Ends */
    /* multi field properties  Starts */
  multiselect: any ;
  multibox: boolean ;
  htmlContent: any ;
 /* multi field properties  Ends */
/* fields properties  Ends */
  constructor(private _fb: FormBuilder , private _cfr: ComponentFactoryResolver,
       private renderer: Renderer2 , private serviceCall: RestcallsService ) { }
       ngAfterViewInit() {
        const checks = document.getElementsByClassName('checkboxVal');
        console.log(checks);
        for (let i = 0; i < checks.length; i++) {
          checks[i].addEventListener('change', (event: Event) => {
            const checkele = checks[i];
            if ((<any>checkele).checked == true) {
              this.elementsArray.push((<any>event).target.closest('div .row').outerHTML);
              } else {
               this.elementsArray.splice(i, 1);
              }
              console.log(this.elementsArray);
              //
              // this.elementsArray.forEach(ele => {
              //  console.log(ele);
              // });
         });
       }
      }
  ngOnInit() {
    this.disablesavetempbtn =  false ;
    this.editelement = false ;
    this.customSectiontoggel = true;
    this.custonclonefunc = true;
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
    this.requiredField = false;
    this.currencyApi();
    this.currencyval = '';
    this.createionform() ;
    this.isselectedrowgenders1 = false;
    this.isselectedrowgenders2 = false;
    this.isselectedrowgenders3 = false;
    this.isselectedrowgenders4 = false;
    this.isselectedrowgenders5 = false;
  }

  ngOnDestroy() {
    // if (this.id) {
    //   clearInterval(this.id);
    // }
  }
  createionform() {
    this.customForm = this._fb.group({
      items: this._fb.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this._fb.group({
      name: '',
    });
  }

  // this.customForm.controls.items.value["0"].name

  deleteRow(index: number) {
    const control = <FormArray>this.customForm.controls['items'];
    control.removeAt(index);
}
  addItem(): void {
    const control = <FormArray>this.customForm.controls['items'];
      control.push(this.createItem());
  }

  addCustomField() {

    this.editelement =  false;
    this.isBtnDisableddiv = true;
    this.customSection = true ;
    this.applyclass = true;
    this.gettingFormElements('Text');
     const checks = document.getElementsByClassName('checkboxVal');
        console.log(checks);
        for (let i = 0; i < checks.length; i++) {
          checks[i].addEventListener('change', (event: Event) => {
            const checkele = checks[i];
            if ((<any>checkele).checked == true) {
              this.elementsArray.push((<any>event).target.closest('div .row').outerHTML);
              } else {
               this.elementsArray.splice(i, 1);
              }
              console.log(this.elementsArray);
              //
              // this.elementsArray.forEach(ele => {
              //  console.log(ele);
              // });
         });
       }
  }

  accordionfun() {
    this.customSection = true ;
    this.applyclass = true;
    this.gettingFormElements('Text');
  }

  /* open label starts */
   openformlabel(val) {
    // console.log(this.elementsArray);
    const elementsArr = this.elementsArray.toString();
    const removeCommas = this.elementsArray.join('');
    console.log(removeCommas);
    // console.log('11 - ' + JSON.stringify(this.elementsArray) , '2i-' + this.elementsArray.toString());
   const checkboxelement =  document.getElementsByClassName('checkboxVal');
   const aryele = new Array();
       for ( let i = 0; i < checkboxelement.length; i++) {
        aryele [i] =  (<any>checkboxelement[i]).checked;
        }
        if (aryele.includes(true)) {

          this.accordionName = val ;
         const el = document.getElementById('hospFormData') ;
         if (this.hospSAervicesSelectall === true) {
          this.htmlContent = el.outerHTML;
         } else {
          this.htmlContent = removeCommas;
         }

         document.getElementById('formId').click();
        } else {
          alert('Please Select one of the field') ;
        }

   }
 /* open label Ends */
/* open label starts */
   saveTempData() {
    if (this.hospNewPatient === true ) {
      this.isselectedrowgenders1 = false;
    } else {
      this.isselectedrowgenders1 = true;
    }

    if (this.hospReviewPatients === true ) {
      this.isselectedrowgenders2 = false;
    } else {
      this.isselectedrowgenders2 = true;
    }

    if (this.hospglassPrescribe === true) {
      this.isselectedrowgenders3 = false;
    } else {
      this.isselectedrowgenders3 = true;
    }

    if ( this.hospglassesDistrbuted === true ) {
      this.isselectedrowgenders4 = false;
    } else {
      this.isselectedrowgenders4 = true;
    }

    if ( this.hospCatracts === true ) {
      this.isselectedrowgenders5 = false;
    } else {
      this.isselectedrowgenders5 = true;
    }

     if (this.formname === '' || this.formname === undefined) {
      alert('please Enter Form Name');
     } else {
       document.getElementById('okbtnform').setAttribute('data-dismiss', 'modal') ;
      const obj = {
        'formName': this.formname,
        'accordion': this.accordionName,
        'enableGender': this.hospServciesGender,
        'enableOther': this.hospServciesOther,
        'enableChild': this.hospServicesChild,
        'enableTotal': this.hospServicesTotal,
        'htmlContent': this.htmlContent
          };
          this.serviceCall.PostCall('/DynamicForm/CreateForm' , obj).subscribe(data => {
            // console.log(JSON.parse((<any>data)._body));
            if (JSON.parse((<any>data)._body).message == 'Success') {
             document.getElementById('alertPopup').click();
            } else {
             alert(JSON.parse((<any>data)._body).message);
            }
          },
          err => {
            console.log('error');
          });
     }

    }
/* open label Ends */
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
    document.getElementById('txt').innerHTML =
    h + ':' + m + ':' + s + ' ' + ampm;
    const t = setInterval(this.startTime, 500);
}
/* live time method Ends */

  gettingFormElements(val) {
    this.createionform();
    this.customForm.controls['items'].reset();
    this.customElement = val;
    this.labelVal = '';
    this.currencyval = '';
    this.requiredField = false;
    this.multilineText = false;
    this.typeofnumber = false;
    this.typeofcurrency = '';
    this.daterange = false;
    this.multiselect = false;
    this.lengthChars = '';
    this.minvalue = '';
    this.maxvalue = '';
    this.datemin = '';
    this.datemax = '';
    if (val == 'Text') {
      this.titleOfSelector = 'Text Field';
      this.labelVal = '';
      this.isBtnDisableddiv = true;
      this.customlabelfield =  true ;
      this.textfieldattr = true ;
      this.sizeoffield = true ;
      this.applyclass = true;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
      this.multibox = false ;
    //  document.getElementById('textfield').classList.remove('text-info');
      const ele = document.getElementById('textfield');
      ele.classList.add('text-danger');
      document.getElementById('numberfield').classList.remove('text-danger');
      document.getElementById('datefield').classList.remove('text-danger');
      document.getElementById('currencyfield').classList.remove('text-danger');
      document.getElementById('multiplefield').classList.remove('text-danger');
    } else if (val == 'Number') {
      this.labelVal = '';
      this.titleOfSelector = 'Number Field';
      this.isBtnDisableddiv = true;
      document.getElementById('textfield').classList.remove('text-danger');
    //  document.getElementById('numberfield').classList.remove('text-info');
      document.getElementById('numberfield').classList.add('text-danger');
      document.getElementById('datefield').classList.remove('text-danger');
      document.getElementById('currencyfield').classList.remove('text-danger');
      document.getElementById('multiplefield').classList.remove('text-danger');
      this.customlabelfield =  true ;
      this.applyclass = false;
      this.textfieldattr = false ;
      this.sizeoffield = true ;
      this.numberfieldattr = true ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
      this.multibox = false ;
    } else if (val == 'Date') {
      this.labelVal = '';
      this.titleOfSelector = 'Date Field';
      this.isBtnDisableddiv = true;
      document.getElementById('textfield').classList.remove('text-danger');
      document.getElementById('numberfield').classList.remove('text-danger');
     // document.getElementById('datefield').classList.remove('text-info');
      document.getElementById('datefield').classList.add('text-danger');
      document.getElementById('currencyfield').classList.remove('text-danger');
      document.getElementById('multiplefield').classList.remove('text-danger');
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = false ;
      this.applyclass = false;
      this.numberfieldattr = false ;
      this.datefieldattr =  true ;
      this.currencyfieldattr = false ;
      this.multibox = false ;
    }  else if (val == 'Currency') {
      this.labelVal = '';
      this.titleOfSelector = 'Currency Field';
      this.isBtnDisableddiv = true;
      document.getElementById('textfield').classList.remove('text-danger');
      document.getElementById('numberfield').classList.remove('text-danger');
      document.getElementById('datefield').classList.remove('text-danger');
    //  document.getElementById('currencyfield').classList.remove('text-info');
      document.getElementById('currencyfield').classList.add('text-danger');
      document.getElementById('multiplefield').classList.remove('text-danger');
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = false ;
      this.applyclass = false;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = true ;
      this.multibox = false ;
    } else if (val == 'multiple') {
      this.labelVal = '';
      this.titleOfSelector = 'Multiple Field';
      this.isBtnDisableddiv = true;
      document.getElementById('textfield').classList.remove('text-danger');
      document.getElementById('numberfield').classList.remove('text-danger');
      document.getElementById('datefield').classList.remove('text-danger');
      document.getElementById('currencyfield').classList.remove('text-danger');
     // document.getElementById('multiplefield').classList.remove('text-info');
      document.getElementById('multiplefield').classList.add('text-danger');
      this.customlabelfield =  true ;
      this.textfieldattr = false ;
      this.sizeoffield = false ;
      this.applyclass = false;
      this.numberfieldattr = false ;
      this.datefieldattr =  false ;
      this.currencyfieldattr = false ;
      this.multibox = true ;
    }
  }


 custommodal(val) {
   this.originaleditArray = [];
   this.discardEditArray = [];
  this.customSectiontoggel = false;
  this.custonclonefunc = false;
  if (this.customElement === undefined) {
  alert('Please Choose one of element');
  } else if (this.labelVal === ' ') {
  alert('Please Enter Label');
  }  else {
  this.customSection =  false ;
   this.countVal++ ;
   if (this.customElement == 'Text') {
      this.creatingElements(this.labelVal , val);
   } else if (this.customElement == 'Number') {
    this.creatingElements(this.labelVal , val);
   } else if (this.customElement == 'Date') {
    this.creatingElements(this.labelVal , val);
   } else if (this.customElement == 'textarea') {
    this.creatingElements(this.labelVal , val);
   } else if (this.customElement == 'Currency') {
    this.creatingElements(this.labelVal , val);
   } else if (this.customElement == 'multiple') {
    this.creatingElements(this.labelVal , val);
   }
}
     const children = document.getElementsByClassName('mylink');
     for (let i = 0; i < children.length; i++) {
     children[i].addEventListener('click', (event: Event) => {
       const delobj = (<any>event).target.closest('div .form-group') ;
       delobj.remove();
    });
  }

  const edit = document.getElementsByClassName('editlink');

 // const leftPos = edit.getBoundingClientRect().left + window.scrollX;
  for ( let i = 0; i < edit.length; i++) {
  edit[i].addEventListener('click', (event: Event) => {
    console.log(i);
    this.indexofcustomElement = i ;
   // const topPos = edit.offsetTop ;
    const logo1: HTMLElement = document.getElementById('test') ;

    this.editelement = true;
    this.customSection = true ;
    const editobjss = (<any>event).target.closest('div .form-group') ;
    const editobj = (<any>event).target.closest('div .form-group .row') ;
    const attr = editobj.parentNode.childNodes[0].childNodes[1].childNodes[0].childNodes ;
    attr.forEach(ele => {
    // console.log(ele.tagName);
     if (ele.tagName == 'INPUT') {
      if (ele.type == 'text') {
       this.gettingFormElements('Text');
       if (ele.required === true) {
        this.requiredField = true ;
       } else {
        this.requiredField = false ;
       }
       this.labelVal = editobj.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML ;
      } else if (ele.type == 'number') {
     //   console.log(this.typeofnumber);
        if (ele.required === true) {
          this.requiredField = true ;
         } else {
          this.requiredField = false ;
         }
         if (ele.step == 'any') {
          this.gettingFormElements('Currency');
         } else {
          this.gettingFormElements('Number');
        }


        this.labelVal = editobj.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML ;
      } else if (ele.type == 'checkbox') {
        this.gettingFormElements('multiple');
        if (ele.required === true) {
          this.requiredField = true ;
         } else {
          this.requiredField = false ;
         }
        this.labelVal = editobj.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML ;
      }  else if (ele.type == 'radio') {
        this.gettingFormElements('multiple');
        if (ele.required === true) {
          this.requiredField = true ;
         } else {
          this.requiredField = false ;
         }
        this.labelVal = editobj.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML ;
      } else if (ele.type == 'date') {
        this.gettingFormElements('Date');
        if (ele.required === true) {
          this.requiredField = true ;
         } else {
          this.requiredField = false ;
         }
        this.labelVal = editobj.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML ;
      }
    } else if (ele.tagName == 'TEXTAREA') {
      this.gettingFormElements('Text');
      if (ele.required === true) {
        this.requiredField = true ;
       } else {
        this.requiredField = false ;
       }
      this.labelVal = editobj.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML ;
      this.multilineText = true ;
    }
    });

  //  console.log(editobj.parentNode.childNodes[0].childNodes[0].childNodes[0].label[0].innerHTML);
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



datevalidationmin(data) {
  this.selectmindate = data;
  if ( this.customElement === 'Date') {
    if (this.selecdate !== undefined && this.selecdate.length !== 0 && this.labelVal.length > 0
      && this.selectmindate !== undefined  && this.selectmindate.length !== 0  ) {
      this.isBtnDisableddiv = false;
    } else {
      this.isBtnDisableddiv = true;
    }
  }
  }

   cancelofedit() {
    this.editelement = false;
    this.customSection = false ;
   }

  datevalidationmax(data) {
    this.selecdate = data;
    if (this.customElement === 'Date') {
    if (this.selecdate !== undefined && this.selecdate.length !== 0 && this.labelVal.length > 0
       && this.selectmindate !== undefined  && this.selectmindate.length !== 0  ) {
      this.isBtnDisableddiv = false;
    } else {
      this.isBtnDisableddiv = true;
    }
  }
  }

  selectcurrencyany(typeofcurrency) {
    if (this.customElement === 'Currency' && typeofcurrency === 'any' && this.labelVal.length > 0) {
    this.isBtnDisableddiv = false;
  } else {
    this.isBtnDisableddiv = true;
  }
  if (this.customElement === 'Currency' && typeofcurrency === 'specific' && this.labelVal.length > 0) {
    this.isBtnDisableddiv = true;
  }
  }

  selectcurrency(val) {
    // console.log(val , 'jjhkhkhkkhkhkhk');
    if ( this.customElement === 'Currency') {
      if (val !== undefined) {
      this.isBtnDisableddiv = false;
    } else {
      this.isBtnDisableddiv = true;
    }
  }
  }


 onlabel(labelvalue: any) {
  // console.log(labelvalue);
  this.labelVal = labelvalue ;
  if ( this.customElement === 'Text') {
    if (this.labelVal.length > 0 ) {
    this.isBtnDisableddiv = false;
   } else {
    this.isBtnDisableddiv = true;
   }
  } else if ( this.customElement === 'Number') {
    if (this.labelVal.length > 0 ) {
    this.isBtnDisableddiv = false;
  } else {
    this.isBtnDisableddiv = true;
   }
  } else if ( this.customElement === 'Date') {
    if (this.selecdate !== undefined && this.labelVal.length > 0 && this.selectmindate !== undefined  ) {
      this.isBtnDisableddiv = false;
    } else {
      this.isBtnDisableddiv = true;
    }
  }
  }

  addComponent(val) {
    // document.getElementById('labelid').click();
    // console.log(val , 'ddddddddddddddd');
    const comp = this._cfr.resolveComponentFactory(DynamicFormsComponent);
    if (this.custonclonefunc === true) {
      const ele = document.getElementById('mainParenttag').lastElementChild ;
      const cln = ele.cloneNode(true);
      this.data1.nativeElement.appendChild(cln) ;
    } else if (val == 'hosp') {
      const ele = document.getElementById('mainParent').lastElementChild ;
      const cln = ele.cloneNode(true);
      this.data1.nativeElement.appendChild(cln) ;
    } else if (val == 'pecf' ) {
      const ele = document.getElementById('mainParent').lastElementChild ;
      const cln = ele.cloneNode(true);
      this.data1.nativeElement.appendChild(cln) ;
      console.log(document.getElementById('mainParent').lastElementChild);
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
creatingElements(labelval , isedit_add) {
  const divele1 = document.createElement('div') ,
        divele2 = document.createElement('div') ,
        divele3 = document.createElement('div') ,
        divele4 = document.createElement('div') ,
        inputgroupdiv = document.createElement('div') ,

        chebox  = document.createElement('input') ,
        labelele  = document.createElement('label') ,
        inputele =  document.createElement('input'),
        textareaele = document.createElement('textarea'),
        selectele = document.createElement('select'),
        optionele = document.createElement('option'),
        spanele =   document.createElement('span') ,
        editspan =   document.createElement('span') ,
        anchortag = document.createElement('a') ,
        editicon = document.createElement('i') ,
        deletetrash = document.createElement('i') ;
        divele1.setAttribute('class' , 'form-group ');

        divele1.setAttribute('style' , 'margin-top:15px');
        divele2.setAttribute('class' , 'row ');
        divele3.setAttribute('class' , 'col-sm-3 inpulabel');
        chebox.setAttribute('value' , ' ');
        chebox.setAttribute('type' , 'checkbox');
        chebox.setAttribute('class' , 'checkboxVal hideele');
        inputele.setAttribute('value' , ' ');
        textareaele.setAttribute('value' , ' ');
        selectele.setAttribute('value' , ' ');
        if (this.requiredField == true) {
          inputele.setAttribute('required' , 'required');
          textareaele.setAttribute('required' , 'required');
          selectele.setAttribute('required' , 'required');
        } else {
          inputele.removeAttribute('required');
          textareaele.removeAttribute('required');
          selectele.removeAttribute('required');
        }

        if (this.sizeOfField == 'small') {
          divele4.setAttribute('class' , 'col-sm-3 inputPadding');
        } else if (this.sizeOfField == 'Medium') {
          divele4.setAttribute('class' , 'col-sm-6 inputPadding');
        } else if (this.sizeOfField == 'Large') {
          divele4.setAttribute('class' , 'col-sm-9 inputPadding');
        } else {
          divele4.setAttribute('class' , 'col-sm-6 inputPadding');
        }

        inputgroupdiv.setAttribute('class' , 'input-group');
        inputgroupdiv.setAttribute('style' , 'width:450px;height:20px');
        labelele.setAttribute('class' , 'customcheckbox') ;
        labelele.setAttribute('class' , 'customlabel') ;
        labelele.setAttribute('style' , 'margin-left:5px;') ;
        labelele.textContent = labelval ;
        inputele.setAttribute('class' , 'form-control form-control-sm getval') ;
        inputele.setAttribute('style' , 'border-radius:4px') ;
        selectele.setAttribute('class' , 'form-control form-control-sm getval') ;
        textareaele.setAttribute('class' , 'form-control form-control-sm getval') ;
        divele1.appendChild(divele2);
        divele2.appendChild(divele3);
        divele2.appendChild(divele4);
        divele3.appendChild(chebox);
        divele3.appendChild(labelele);
        divele4.appendChild(inputgroupdiv);
         if (this.customElement == 'Text') {
           if ( this.multilineText == true) {
            inputgroupdiv.appendChild(textareaele);
            inputgroupdiv.appendChild(editspan);
            inputgroupdiv.appendChild(spanele);
           } else {
            inputgroupdiv.appendChild(inputele);
            inputgroupdiv.appendChild(editspan);
            inputgroupdiv.appendChild(spanele);
            inputele.setAttribute('type' , 'text') ;
            chebox.setAttribute('type' , 'checkbox') ;
            inputele.setAttribute('maxlength' , this.lengthChars) ;
           }

        } else if (this.customElement == 'Number' ) {
          inputele.setAttribute('type' , 'number') ;
          inputgroupdiv.appendChild(inputele);
          inputgroupdiv.appendChild(editspan);
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
          inputgroupdiv.appendChild(editspan);
          inputgroupdiv.appendChild(spanele);
          inputele.setAttribute('type' , 'date') ;
          inputele.setAttribute('min' , this.datemin) ;
          inputele.setAttribute('max' ,  this.datemax) ;
          } else {
          inputgroupdiv.appendChild(inputele);
          inputgroupdiv.appendChild(editspan);
          inputgroupdiv.appendChild(spanele);
          inputele.setAttribute('type' , 'date') ;
          }
        }  else if (this.customElement == 'Currency') {
          inputgroupdiv.appendChild(inputele);
          inputele.setAttribute('type' , 'number') ;
          inputele.setAttribute('step' , 'any') ;

          if (this.typeofcurrency == 'specific') {
            inputgroupdiv.appendChild(spanele);
            editspan.setAttribute('style' , 'padding-right:30px');
            spanele.textContent =  '  (' + ' ' + this.currencyval + ' )';
            inputgroupdiv.appendChild(editspan);
            inputgroupdiv.appendChild(spanele);
          } else {
            inputgroupdiv.appendChild(selectele);
            selectele.setAttribute('id' , 'currencyId');
            selectele.setAttribute('style' , 'height:24px;margin-left:5px;border-radius:4px;');
            const sel = document.getElementById('currencyId');
            this.currencysymbol.forEach(ele => {
              const opt = document.createElement('option');
              opt.appendChild(document.createTextNode(ele));
                opt.value = this.currencyval;
              selectele.appendChild(opt);
              });
              inputgroupdiv.appendChild(editspan);
              inputgroupdiv.appendChild(spanele);
          }

        } else if (this.customElement == 'multiple') {
          if (this.multiselect === true ) {
            this.customForm.value.items.forEach(ele => {
            const checkelement = document.createElement('div') ;
            const inputeleradio = document.createElement('input');
            const labelforradio = document.createElement('label');
            checkelement.setAttribute('class' , 'form-check');
            checkelement.setAttribute('style' , 'padding-right:20px;');
            inputgroupdiv.appendChild(checkelement);
            inputeleradio.setAttribute('type' , 'checkbox') ;
            inputeleradio.setAttribute('class' , 'getval') ;
            checkelement.appendChild(inputeleradio);
            checkelement.appendChild(labelforradio);
            labelforradio.textContent = ele.name ;
            labelforradio.setAttribute('style' , 'margin-left:4px;') ;
          });
          } else {
           this.customForm.value.items.forEach(ele => {
            const checkelement = document.createElement('div') ;
            const inputeleradio = document.createElement('input');
            const labelforradio = document.createElement('label');
            checkelement.setAttribute('class' , 'form-check');
            checkelement.setAttribute('style' , 'padding-right:20px;');
            inputgroupdiv.appendChild(checkelement);
            inputeleradio.setAttribute('type' , 'radio') ;
            inputeleradio.setAttribute('name' , 'question') ;
            inputeleradio.setAttribute('value' , ele.name) ;
            inputeleradio.setAttribute('class' , 'getval') ;
            checkelement.appendChild(inputeleradio);
            checkelement.appendChild(labelforradio);
            labelforradio.textContent = ele.name ;
            labelforradio.setAttribute('style' , 'margin-left:4px;');
          });
          }


          inputgroupdiv.appendChild(editspan);
          inputgroupdiv.appendChild(spanele);
        }

        editspan.setAttribute('class' , 'editlink') ;
        editicon.setAttribute('class' , 'fa fa-pencil edit') ;
        editspan.appendChild(editicon);

        spanele.setAttribute('class' , 'mylink') ;
        deletetrash.setAttribute('class' , 'fa fa-trash delete') ;
        spanele.appendChild(deletetrash);


      //  spanele.appendChild(anchortag);
      if (isedit_add == 'edit') {
        const edit = document.getElementsByClassName('editlink');
        const child = document.getElementById('mainParent').querySelectorAll('.form-group');
        console.log(child[this.indexofcustomElement]) ;
       const previous = document.getElementById('mainParent').parentNode.childNodes[3].childNodes[this.indexofcustomElement + 1];
      //  console.log(previous);
      previous.parentNode.replaceChild(divele1, previous);
      const checkboxelement =  document.getElementsByClassName('checkboxVal');
       const aryele = new Array();
       for ( let i = 0; i < checkboxelement.length; i++) {
        aryele [i] =  (<any>checkboxelement[i]).checked;
        }
        if (aryele.includes(true)) {
        } else{
          this.changetoggles();
        }

       } else {

        this.data1.nativeElement.appendChild(divele1);
        const checkboxelement =  document.getElementsByClassName('checkboxVal');
       const aryele = new Array();
       for ( let i = 0; i < checkboxelement.length; i++) {
        aryele [i] =  (<any>checkboxelement[i]).checked;
        }
        if (aryele.includes(true)) {
        } else {
          this.changetoggles();
        }
       }

}

    hidefunction() {
      this.customSection = !this.customSection;
      this.gettingFormElements('Text');
    }

    pecfdisable() {
      this.elementsArray = [];
      this.customSectiontoggel = false;
      this.custonclonefunc = true;


    }

   changeCurrencyval(val) {
    const elem = document.getElementById('currencyId') ;
   }

/*creating Elements Ends */

multipulinputvalue() {
  for (let i = 0 ; i < this.customForm.value.items.length ; i++) {
    if (this.customForm.value.items[i].name === '' || this.customForm.value.items[i].name === undefined && this.labelVal.length > 0) {
        this.seletvalues = true;
        break;
    } else {
      this.seletvalues = false;
    }
  }

  if (this.seletvalues === false) {
    this.isBtnDisableddiv = false;
  } else {
    this.isBtnDisableddiv = true;
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
   if (this.hospServciesGender == false  && this.hospServicesTotal == false && this.hospServicesChild == false &&
                  this.hospServciesOther == false) {
     this.disablesavetempbtn =  true ;
   } else {
    this.disablesavetempbtn =  false ;
   }
   if (this.hospSAervicesSelectall == true) {
    const checkboxelement =  document.getElementsByClassName('checkboxVal');
    for ( let i = 0; i < checkboxelement.length; i++) {
        const check = checkboxelement[i];
        if ((<any>check).checked == false) {
          (<any>check).checked = true;
          }
        // aryele [i] =  (<any>checkboxelement[i]).checked;
        }
   } else {
    const checkboxelement =  document.getElementsByClassName('checkboxVal');
    for ( let i = 0; i < checkboxelement.length; i++) {
        const check = checkboxelement[i];
        if ((<any>check).checked) {
          (<any>check).checked = false;
          }
        // aryele [i] =  (<any>checkboxelement[i]).checked;
        }
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



}
