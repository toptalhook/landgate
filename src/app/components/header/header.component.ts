import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_ACTIVE_PAGE } from '../../reducers/header.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openBurgerMenu: boolean = false;
  activePage: string; // Initialize with the default active page (you can change this based on your requirement)
  constructor(private store: Store<any>) {}

  ngOnInit() {
  }

  toggleMenu() {
    this.openBurgerMenu = !this.openBurgerMenu;
  }

  // Function to set the active page when a navigation item is clicked
  setActivePage(page: string) {
    this.store.dispatch({ type: SET_ACTIVE_PAGE, payload: page });
  }
}