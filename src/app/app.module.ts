import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './guards/auth.guard';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';

const appRoutes: Routes =[
  {path: 'appareils',canActivate:[AuthGuard],component: AppareilViewComponent},
  {path: 'appareils/:id',canActivate:[AuthGuard],component: SingleAppareilComponent},
  {path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  {path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  {path: 'new-user', canActivate: [AuthGuard], component: UserEditComponent},
  {path: 'auth',component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,
              AuthService,
              AuthGuard,
            UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
