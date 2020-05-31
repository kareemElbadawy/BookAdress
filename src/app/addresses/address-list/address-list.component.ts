import { Component, OnInit } from '@angular/core';
import { Addresses } from 'src/app/shared/addresses.model';
import { AddressService } from 'src/app/shared/address.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor(public service : AddressService, public toastr: ToastrManager) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(address: Addresses) {
    this.service.formData = Object.assign({}, address);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteAddress(id).subscribe(res => {
        this.toastr.errorToastr('Deleted successfully', 'Book Address Register!');
        this.service.refreshList();
      });
    }
  }

}
