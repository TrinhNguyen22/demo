import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { MainHeader } from './NashTrophy/main-header/main-header.component';
import { NashTrophyComponent } from './NashTrophy/nash-trophy.component';
import { UserService } from './NashTrophy/services/user.service';
import { LoginFormComponent } from './NashTrophy/login-form/login-form.component';
import { MainSidebar } from './NashTrophy/main-sidebar/main-sidebar.component';
import { ContentWrapper } from './NashTrophy/content-wrapper/content-wrapper.component';
import { Content1Component } from './NashTrophy/content-wrapper/content-1/content-1.component';
import { Content2Component } from './NashTrophy/content-wrapper/content-2/content-2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeader,
    MainSidebar,
    ContentWrapper,
    LoginFormComponent,
    NashTrophyComponent,
    Content1Component,
    Content2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'index',
        component: NashTrophyComponent,
        children: [
          {
            path: 'index1',
            component: Content1Component
    
          },
          {
            path: 'index2',
            component: Content2Component
          },
        ]
      },
     
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      
      
    ]),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
