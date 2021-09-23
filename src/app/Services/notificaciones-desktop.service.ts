import {Injectable} from '@angular/core';
import {firebase} from '@firebase/app';
import '@firebase/messaging';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UsuariosService } from './usuarios.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesDesktopService {

  
  
constructor(
  private httpClient: HttpClient,
  private authService:AuthenticationService,
  private usuariosService:UsuariosService
){
  
}
 
init(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    console.log("......................");
      navigator.serviceWorker.ready.then((registration) => {
          // Don't crash an error if messaging not supported
          console.log("Desde init!!!");
          if (!firebase.messaging.isSupported()) {
                 resolve();
                 return;
          }

          const messaging = firebase.messaging();

          // Register the Service Worker
          messaging.useServiceWorker(registration);

          // Initialize your VAPI key
          messaging.usePublicVapidKey(
            environment.firebase.vapidKey
          );         
          // Optional and not covered in the article
          // Listen to messages when your app is in the foreground
          messaging.onMessage((payload) => {
              console.log(payload);
          },error=>{
            console.log(error)
          });
          // Optional and not covered in the article
          // Handle token refresh
          messaging.onTokenRefresh(() => {
              messaging.getToken().then(
              (refreshedToken: string) => {
                  console.log(refreshedToken);
              }).catch((err) => {
                  console.error(err);
              });
          });

          resolve();
      }, (err) => {
          reject(err);
      });
  });
}

requestPermission(): Promise<void> {
    return new Promise<void>(async (resolve) => {
        if (!Notification) {
            resolve();
            return;
        }
        if (!firebase.messaging.isSupported()) {
            resolve();
            return;
        }
        try {
            const messaging = firebase.messaging();
            await messaging.requestPermission();

            const token: string = await messaging.getToken();

            console.log('User notifications token:', token);
            this.usuariosService.updateNotificaiconesWebToke(this.authService.getUID(), token);
        } catch (err) {
            // No notifications granted
        }

        resolve();
    });
  }


  
}