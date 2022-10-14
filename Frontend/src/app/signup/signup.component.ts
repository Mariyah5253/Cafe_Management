import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AllConstantsValidation } from '../shared/global-constants';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:any = FormGroup;
  responseMessage:any;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private snackbarService:SnackbarService,
              private dialogRef: MatDialogRef<SignupComponent>,
              private ngxService: NgxUiLoaderService
              ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(AllConstantsValidation.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(AllConstantsValidation.emailRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(AllConstantsValidation.contactNumberRegex)]],
      password:[null,[Validators.required,Validators.minLength(8)]]
    })
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.signupForm.value;
    console.log(this.signupForm.value);
    
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password 
    }
    console.log(data);
    
    this.userService.signup(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"");
      this.router.navigate(['/']);
    },(error) =>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
        console.log( this.responseMessage);
        
      }
      else{
        this.responseMessage = AllConstantsValidation.genericError;
        console.log(this.responseMessage);
        
      }
      this.snackbarService.openSnackBar(this.responseMessage, AllConstantsValidation.error);
    })
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
