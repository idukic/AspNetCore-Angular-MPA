import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppTwoComponent } from './components/app/appTwo.component';
import { NavMenuComponent } from '../../appCommon/components/navmenu/navmenu.component';

// import { AppComponent } from '../../appOne/app/components/app/app.component'; 
// import { HomeComponent } from '../../appOne/app/components/home/home.component';
// import { FetchDataComponent } from '../../appOne/app/components/fetchdata/fetchdata.component';
// import { CounterComponent } from '../../appOne/app/components/counter/counter.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppTwoComponent ],
    declarations: [
        //AppComponent,
        NavMenuComponent,
        //CounterComponent,
        //FetchDataComponent,
        AppTwoComponent,
        //HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home2', pathMatch: 'full' },
            // { path: 'home', component: HomeComponent },
            // { path: 'counter', component: CounterComponent },
            // { path: 'fetch-data', component: FetchDataComponent },
            { path: 'home2', component: AppTwoComponent },
            { path: '**', redirectTo: 'home2' }
        ])
    ]
};
