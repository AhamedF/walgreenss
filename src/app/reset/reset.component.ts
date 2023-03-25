import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { dbName, Hostnames } from 'src/types';




@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})




export class ResetComponent {

  

myForm!: FormGroup;

applicationNames: string[] = ['IC+' ,'PARS' ,'SAG'];
hostnames : Hostnames= {

'IC+': ['picpdb1', 'picpdb2'],
'PARS': ['ppardb6', 'ppardg6'],
'SAG': ['psagdb51', 'psagdb52'],
};

dbNames : dbName = {

'picpdb1': ['prddb01','prddb02'],
'picpdb2': ['prddb12','prddb21'],
'ppardb6': ['ppardb611','ppardb612'],
'ppardg6': ['ppardg62','ppardg62'],
'psagdb51': ['psagdb511','psagdb512'],
'psagdb52': ['psagdb5211','psagdb5212'],

};

selectedApplicationName: string | undefined;
selectedHostname: string | undefined;

constructor(private formBuilder: FormBuilder){


  this.createForm();
}

createForm(){

  this.myForm = this.formBuilder.group({

applicationName: new FormControl(''),
hostname: new FormControl(''),
dbName: new FormControl(''),



    
  })
}

onApplicationChange(){

this.selectedApplicationName = this.myForm?.get('applicationName')?.value;
this.myForm?.get('hostname')?.reset()
this.myForm?.get('dbName')?.reset()


}

onHostnameChange(){

  this.selectedApplicationName = this.myForm?.get('hostname')?.value;
  this.myForm?.get('dbName')?.reset();

}

onSubmit(){

  console.log(this.myForm?.value)
}
}
