import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  ip: string;
  constructor(public navCtrl: NavController, public events: Events) {

  }

  sendIp() {
    this.events.publish('pegaIpRede', this.ip);
  }
}
