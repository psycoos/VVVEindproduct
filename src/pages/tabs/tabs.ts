import { Component } from '@angular/core';


import { MapsPage } from '../maps/maps';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = MapsPage;
  tab2Root = HomePage;
  tab3Root = UserPage;

  constructor() {

  }
}
