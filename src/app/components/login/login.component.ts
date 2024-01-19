 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
 import { FuncService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
 })
 export class LoginComponent implements OnInit {
   loginForm!: FormGroup;

   constructor(
    private fb: FormBuilder,
    private funcService: FuncService,
   private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
   }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.login();
   }

  login() {
   if (this.loginForm.valid) {
     const userData = this.loginForm.value;
     this.funcService.logInUser(userData).subscribe({
        next: (response: any) => {
          console.log('Logged in successfully:', response);
         const jwtToken = response;
          localStorage.setItem('token', jwtToken);

          const role = this.getRoleFromToken(jwtToken);
         this.navigateToRole(role);
       },
       error: (error) => {
          console.log('Login failed:', error);
        }
       });
     }
  }

  private getRoleFromToken(token: string): string | null {
    try {
   const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
    } catch (e) {
     console.error('Error decoding JWT token', e);
      return null;
    }
   }

   private navigateToRole(role: string | null) {
     if (role === '1') {
      this.router.navigate(['/admin']);
    } else if (role === '2') {
      this.router.navigate(['/worker']);
    } else {
      console.log('Login failed. Please check your credentials', 'Error');
    }
  }

   goToRegister() {
    this.router.navigate(['/register']);
   }

  getPasswordValidationMessage() {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.invalid && passwordControl?.touched) {
       if (passwordControl?.errors?.['minlength']) {
         return 'Password must be at least 6 characters long.';
       } else if (passwordControl?.errors?.['required']) {
        return 'Password is required.';
       } else {
         return 'Password is invalid';
       }
     }
     return null;
   }
 }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { FuncService } from 'src/app/services/func.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{

//   loginForm!: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private FuncService: FuncService,
//     private router: Router,
//   ){}
//   ngOnInit(): void {
//     this.createForm();
//   }

//   createForm(){
//     this.loginForm = this.fb.group({
//       email:['', [Validators.required, Validators.email]],
//       password: ['',[Validators.required, Validators.minLength(6)]]
//   });
//   }

//   Login(){
//     if(this.loginForm.valid){
//       const userData = this.loginForm.value;
//       this.FuncService.logInUser(userData).subscribe({
//         next:(response: any) => {
//           console.log('logged in successfully: ',response);
//           const jwtToken = response;
//           localStorage.setItem('token', jwtToken);

//           const decodedToken= this.decodeToken(jwtToken);
//           const role= decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
//           // this.router.navigate(['/worker']);

//           if(role==='1'){
//             this.router.navigate(['/admin']);
//           }else if(role=== '2'){
//             this.router.navigate(['/worker']);
//           }
//           else{
//             console.log('Login failed. Please check your credentials', 'Error');
//           }
//         },
//         error:(error: any) =>{
//           console.log('login failed: ',error);
//         }
//       })
//     }
//   }

//   private decodeToken(token: string): any{
//     try{
//       return JSON.parse(atob(token.split('.')[1]));
//     }catch(e){
//       console.error('Error decoding JWT token', e);
//       return null;
//     }
//   }

//   goToRegister(){
//     this.router.navigate(['/register']);
//   }

// }

