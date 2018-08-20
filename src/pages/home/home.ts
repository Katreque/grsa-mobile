import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  time: string;
  constructor(public navCtrl: NavController) {

  }

  sqlServerRun() {
    fetch('http://172.16.119.254:1337/ssms-criar')
      .then(() => {
        alert('POGGERS')
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
