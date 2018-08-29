import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import About from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sqlServer = {
    timeInicial: null,
    timeFinal: null,
    tempoTotal: undefined,
    isLoading: false,
    erro: undefined
  }

  NeoServer = {
    timeInicial: null,
    timeFinal: null,
    tempoTotal: undefined,
    isLoading: false,
    erro: undefined
  }

  ip: string

  constructor(public navCtrl: NavController) {
    //this.ip = About.getIp();
  }

  sqlServerRun() {
    this.sqlServer.isLoading = true;
    this.sqlServer.erro = undefined;
    this.sqlServer.timeInicial = new Date();
    fetch('http://'+this.ip+':1337/ssms-criar')
      .then(() => {
        this.sqlServer.timeFinal = new Date();
        this.sqlServer.tempoTotal = this.sqlServer.timeFinal.getTime() - this.sqlServer.timeInicial.getTime();
        this.sqlServer.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  NeoServerRun() {
    this.NeoServer.isLoading = true;
    this.NeoServer.erro = undefined;
    this.NeoServer.timeInicial = new Date();
    fetch('http://localhost:1337/neo-listar')
      .then(() => {
        this.NeoServer.timeFinal = new Date();
        this.NeoServer.tempoTotal = this.NeoServer.timeFinal.getTime() - this.NeoServer.timeInicial.getTime();
        this.NeoServer.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
