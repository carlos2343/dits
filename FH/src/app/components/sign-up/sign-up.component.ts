// import { AuthenticationService } from './../../../services/authentication.service';
// import { Component, OnInit } from '@angular/core';
// import {
//   AbstractControl,
//   FormControl,
//   FormGroup,
//   ValidationErrors,
//   ValidatorFn,
//   Validators,
//   UntypedFormGroup
// } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { forkJoin } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { ProfileUser } from 'src/app/models/user';
// //import { AuthenticationService } from 'src/services/authentication.service';
// import { UsersService } from 'src/app/services/users.service';

// export function passwordsMatchValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirmPassword')?.value;

//     if (password && confirmPassword && password !== confirmPassword) {
//       return { passwordsDontMatch: true };
//     } else {
//       return null;
//     }
//   };
// }

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss'],
// })
// export class SignUpComponent implements OnInit {
//   signUpForm = new UntypedFormGroup(
//     {
//       name: new FormControl('', Validators.required),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', Validators.required),
//       confirmPassword: new FormControl('', Validators.required),
//     },
//     { validators: passwordsMatchValidator() }
//   );

//   constructor(
//     private AuthenticationService: AuthenticationService,
//     private router: Router,
//     private toast: HotToastService,
//     private usersService: UsersService
//   ) {}

//   ngOnInit(): void {}

//   get email() {
//     return this.signUpForm.get('email');
//   }

//   get password() {
//     return this.signUpForm.get('password');
//   }

//   get confirmPassword() {
//     return this.signUpForm.get('confirmPassword');
//   }

//   get name() {
//     return this.signUpForm.get('name');
//   }

//   submit() {
//     if (!this.signUpForm.valid) {
//       return;
//     }

//     const { name, email, password } = this.signUpForm.value;
//     this.AuthenticationService
//       .signUp(email, password)
//       .pipe(
//         switchMap(({ user: { uid } }) =>
//           this.usersService.addUser({ uid, email, displayName: name, totalBudget: 0 })
//         ),
//         this.toast.observe({
//           success: 'Congrats! You are all signed up',
//           loading: 'Signing up...',
//           error: ({ message }) => `${message}`,
//         })
//       )
//       .subscribe(() => {
//         this.router.navigate(['/home']);
//       });
//   }
// }
