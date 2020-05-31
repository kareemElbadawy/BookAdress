import { Injectable } from '@angular/core';
import { Addresses } from './addresses.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  formData : Addresses;
  list:Addresses[];
  private rootUrl="http://kareemelbadawy-001-site1.dtempurl.com/api";
  constructor(private http: HttpClient) { }
  postAddress(formData: Addresses){
    formData.id=0;
       return  this.http.post(this.rootUrl+'/addresses' , formData);
       
  }
  refreshList(){
    this.http.get(this.rootUrl+'/addresses')
    .toPromise().then(res => this.list = res as Addresses[]);
  }

  putAddress(formData : Addresses){
    return this.http.put(this.rootUrl+'/addresses/'+formData.id,formData);
     
   }

   deleteAddress(id : number){
    return this.http.delete(this.rootUrl+'/addresses/'+id);
   }

}
