import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../authentification.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor( private authenticationService: AuthentificationService) {
    this.authenticationService.getUserInfosByToken().subscribe(values => console.log(values));

   }

  ngOnInit() {

  }

}
