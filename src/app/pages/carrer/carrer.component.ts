import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import liff from '@line/liff';


@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements AfterViewInit {

  @ViewChild('body') body: ElementRef  ;
  @ViewChild('profile') profile: ElementRef  ;
  @ViewChild('picutreUrl') picutreUrl: ElementRef  ;
  @ViewChild('userId') userId: ElementRef  ;
  @ViewChild('displayName') displayName: ElementRef  ;
  @ViewChild('statusMessage') statusMessage: ElementRef  ;
  @ViewChild('email') email: ElementRef  ;
  

  constructor() { }

  async  main() {
    liff.ready.then(() => {
      if (liff.getOS() === 'android') {
        this.body.nativeElement.style.backgroundColor = '#888';
      }
      if (liff.isInClient()) {
        this.getUserProfile();
      }
    });
    await liff.init({ liffId: '1656955187-j6JWxVQG' });
  }
  
  async getUserProfile() {
    const profile = await liff.getProfile();
    this.picutreUrl.nativeElement.src = profile.pictureUrl;
    this.userId.nativeElement.innerHTML = '<b>UserID:</b>' + profile.userId;
    this.displayName.nativeElement.innerHTML = '<b>Display Name: </b>' + profile.displayName;
    this.statusMessage.nativeElement.innerHTML = '<b>Status : </b>' + profile.statusMessage;
  }

  ngAfterViewInit(): void { 
    this.main();
  }

}
