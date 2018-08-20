import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';
@Injectable()
export class AuthService {
    constructor(private router: Router) {}
    signinUser (email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            resp => {this.router.navigate(['home'])}
        )
        .catch (
            error => {console.log(error)}
        )
    }
   
}