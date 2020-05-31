import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/shared/address.service';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  constructor(public service : AddressService ,
    public toastr: ToastrManager) { }
      ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();
    this.service.formData ={
      id : null,
      fullName: '',
      jobID : null,
      DepID : null,
      email:'' , 
      photo : '',
      phone:'',
      birthDate:null,
      address:'',
      age: null

     
    }
    
  }
  onSubmit(form : NgForm){
    if (form.value.id == null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postAddress(form.value).subscribe(res => {
      this.toastr.successToastr('Inserted successfully', 'Book Address Register!');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updateRecord(form: NgForm) {
    this.service.putAddress(form.value).subscribe(res => {
      this.toastr.infoToastr('Updated successfully', 'Book Address Register!');
      this.resetForm(form);
      this.service.refreshList();
    });
}

}
