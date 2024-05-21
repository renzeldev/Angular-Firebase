import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthFirebaseService } from '../../../shared/services/auth-firebase.service';
import { NotificationService } from 'app/shared/services/notification.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthFirebaseService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private _notificationService: NotificationService,
    ) {
    }
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['slobadeveloper@gmail.com', [Validators.required, Validators.email]],
            password: ['sloba123', Validators.required],
            rememberMe: ['']
        });
    }
    signIn(): void {
        if (this.signInForm.invalid) {
            return;
        }

        this.signInForm.disable();

        this.showAlert = false;
        
        this._authService.Login(this.signInForm.value)
        .then(res => {})
        .catch(err => {
            this._notificationService.error(err.error.error.message, "Login Failed");
            this.showAlert = true;
            this.alert = {
                type: 'error',
                message: 'Wrong email or password'
            };
            this.signInNgForm.resetForm();
            this.signInForm.enable();
        })
    }
}
