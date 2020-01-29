import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthentificationService } from '../authentification.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  nbProducts: number;
  isAuthentificated: Observable<boolean>;

  isLoggedIn : Observable<boolean>;

  constructor(private store: Store, private router: Router, public authService: AuthentificationService) {
    this.store.select(state => state.cart.cart).subscribe(u => this.nbProducts = u.length);

    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit() {
  
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/user/signIn']);
}

}
