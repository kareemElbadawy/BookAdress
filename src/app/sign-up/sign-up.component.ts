import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService, private toastr: ToastrManager) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }
  onSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data:any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.successToastr('User Registration Successful');
        }
        else{
          this.toastr.errorToastr(data.Errors[0]);
        }
      })
  }
}
