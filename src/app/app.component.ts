import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {BackgroundMode} from '@ionic-native/background-mode';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar,
                splashScreen: SplashScreen, backgroundMode: BackgroundMode) {

        platform.ready().then(() => {
            backgroundMode.enable();
            backgroundMode.on('activate').subscribe(() => {
                let array = [1, 2, 3, 4, 5];
                for (let a of array) {
                    console.log(a);
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
