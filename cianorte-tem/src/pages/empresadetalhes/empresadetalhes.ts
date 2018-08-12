import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaPage } from '../oferta/oferta';
// import { EmpresaProvider } from '../../providers/empresa/empresa';
import { OfertaProvider } from '../../providers/oferta/oferta';


@IonicPage()
@Component({
  selector: 'page-empresadetalhes',
  templateUrl: 'empresadetalhes.html',
})
export class EmpresadetalhesPage {
  
  // ofertas: Observable<any>;

  fundoLogin = [
    'assets/imgs/fundoLogin/fundo.jpg'
   ]

   dadosEmpresa: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: OfertaProvider) {
      this.dadosEmpresa = this.navParams.get('dadosEmpresa');
      // this.ofertas = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresadetalhesPage');
  }

  ofertasPage(){
    this.navCtrl.push(OfertaPage);
  }
 

}
