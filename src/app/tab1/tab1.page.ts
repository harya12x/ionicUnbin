import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {
  NavController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public npm: any;
  public nama: string;
  public kd_bimbingan: any;

  constructor(private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private route: ActivatedRoute,
    private storage: Storage
) {
  this.route.params.subscribe((param: any) => {
  this.npm = param.npm;
  this.getname(this.npm);
  console.log(this.npm);
  
});
}

getname(npm) {
  let data: Observable<any>;
  // eslint-disable-next-line prefer-const
  data = this.http.get(
    'http://localhost/konseling/api/getname/' + npm
  );
  data.subscribe((result) => {
    
  });
}


logout() {
  this.storage.clear();
  localStorage.clear();
  this.navCtrl.navigateRoot('/login');
}
}
