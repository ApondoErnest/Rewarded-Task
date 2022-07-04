import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
    this.initNotifcationBlockingConfig();
    this.initNotificationConfirmConfig();
    this.initNotificationInfoConfig();
    this.initNotificationLoadingConfig();
    this.initNotificationReportConfig();

   }


  public getNotifier() {
      return Notiflix;
  }
  
  public showLoader() {
    Notiflix.Loading.standard();
  }

  public showLoaderWithSvg(message:string, svgPath: string) {
    Notiflix.Loading.custom(`${message}...`, {
      customSvgUrl: svgPath,
    });
  }

  public showloader(message: string) {
    Notiflix.Loading.standard(`${message}...`);
  }

  public removeLoader() {
    Notiflix.Loading.remove();
  }

  private initNotificationInfoConfig() {
    Notiflix.Notify.init({
      width: '280px',
      position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' && v2.2.0 and the next versions => 'center-top' - 'center-bottom' - 'center-center'
      distance: '10px',
      opacity: 1,
      borderRadius: '5px',
      rtl: false,
      timeout: 3000,
      messageMaxLength: 110,
      backOverlay: false,
      backOverlayColor: 'rgba(0,0,0,0.5)',
      plainText: true,
      showOnlyTheLastOne: false,
      clickToClose: false,
      pauseOnHover: true,
      ID: 'NotiflixNotify',
      className: 'notiflix-notify',
      zindex: 4001,
      fontFamily: 'Quicksand',
      fontSize: '13px',
      cssAnimation: true,
      cssAnimationDuration: 400,
      cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
      closeButton: false,
      useIcon: true,
      useFontAwesome: false,
      fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
      fontAwesomeIconSize: '34px',
      success: {
        background: '#32c682',
        textColor: '#fff',
        childClassName: 'success',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(50,198,130,0.2)', // v2.2.0 and the next versions
      },
      failure: {
        background: '#ff5549',
        textColor: '#fff',
        childClassName: 'failure',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-times-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(255,85,73,0.2)', // v2.2.0 and the next versions
      },
      warning: {
        background: '#eebf31',
        textColor: '#fff',
        childClassName: 'warning',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-exclamation-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(238,191,49,0.2)', // v2.2.0 and the next versions
      },
      info: {
        background: '#26c0d3',
        textColor: '#fff',
        childClassName: 'info',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-info-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(38,192,211,0.2)', // v2.2.0 and the next versions
      }
    });
  }

  private initNotificationConfirmConfig() {
    Notiflix.Confirm.init({
      className: 'notiflix-confirm',
      width: '300px',
      zindex: 4003,
      position: 'center', // 'center' - 'center-top' -  'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-bottom' - 'right-center' - 'left-center'
      distance: '10px',
      backgroundColor: '#f8f8f8',
      borderRadius: '25px',
      backOverlay: true,
      backOverlayColor: 'rgba(0,0,0,0.5)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationStyle: 'fade', // 'zoom' - 'fade'
      cssAnimationDuration: 300,
      plainText: true,
      titleColor: '#32c682',
      titleFontSize: '16px',
      titleMaxLength: 34,
      messageColor: '#1e1e1e',
      messageFontSize: '14px',
      messageMaxLength: 110,
      buttonsFontSize: '15px',
      buttonsMaxLength: 34,
      okButtonColor: '#f8f8f8',
      okButtonBackground: '#32c682',
      cancelButtonColor: '#f8f8f8',
      cancelButtonBackground: '#a9a9a9',
    });
  }

  private initNotificationReportConfig() {
    Notiflix.Report.init({
      className: 'notiflix-report',
      width: '320px',
      backgroundColor: '#f8f8f8',
      borderRadius: '25px',
      rtl: false,
      zindex: 4002,
      backOverlayClickToClose: true,
      backOverlay: true,
      backOverlayColor: 'rgba(0,0,0,0.5)',
      fontFamily: 'Quicksand',
      svgSize: '110px',
      plainText: true,
      titleFontSize: '16px',
      titleMaxLength: 34,
      messageFontSize: '13px',
      messageMaxLength: 400,
      buttonFontSize: '14px',
      buttonMaxLength: 34,
      cssAnimation: true,
      cssAnimationDuration: 360,
      cssAnimationStyle: 'fade', // 'fade' - 'zoom'
      success: {
        svgColor: '#32c682',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#32c682',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(50,198,130,0.2)', // v2.2.0 and the next versions
      },
      failure: {
        svgColor: '#ff5549',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#ff5549',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(255,85,73,0.2)', // v2.2.0 and the next versions
      },
      warning: {
        svgColor: '#eebf31',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#eebf31',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(238,191,49,0.2)', // v2.2.0 and the next versions
      },
      info: {
        svgColor: '#26c0d3',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#26c0d3',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(38,192,211,0.2)', // v2.2.0 and the next versions
      },
    });
  }

  private initNotificationLoadingConfig() {
    Notiflix.Loading.init({
      className: 'notiflix-loading',
      zindex: 4000,
      backgroundColor: 'rgba(0,0,0,0.8)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 400,
      clickToClose: false,
      customSvgUrl: null,
      svgSize: '80px',
      svgColor: '#32c682',
      messageID: 'NotiflixLoadingMessage',
      messageFontSize: '15px',
      messageMaxLength: 34,
      messageColor: '#dcdcdc',
    });
  }

  private initNotifcationBlockingConfig() {
    Notiflix.Block.init({
      querySelectorLimit: 200,
      className: 'notiflix-block',
      position: 'absolute',
      zindex: 1000,
      backgroundColor: 'rgba(255,255,255,0.9)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 300,
      svgSize: '45px',
      svgColor: '#383838',
      messageFontSize: '14px',
      messageMaxLength: 34,
      messageColor: '#383838',
    });
  }
}
