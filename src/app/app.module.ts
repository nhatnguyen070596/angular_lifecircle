import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { ChildComponent } from './ng-on-init/child-component/child-component.component';
import { ParentComponent } from './ng-on-init/parent-component/parent-component.component';
import { ParentDochckComponent } from './ng-do-check/parent/parent.component';
import { ChildDoCheckComponent } from './ng-do-check/child/child.component';
import { HomeComponent } from './ng-after-content-init/home/home.component';
import { HomeAfterContentCheckedComponent } from './ng-after-content-checked/home-after-content-checked/home-after-content-checked.component';
import { HomeAfterViewInitComponent } from './ng-after-view-init/home-after-view-init/home-after-view-init.component';
import { ParentNgDesTroyComponent } from './ng-on-destroy/parent-ng-des-troy/parent-ng-des-troy.component';
import { ChildNgDesTroyComponent } from './ng-on-destroy/child-ng-des-troy/child-ng-des-troy.component';

@NgModule({
  declarations: [
    AppComponent,
    NgOnInitComponent,
    ChildComponent,
    ParentComponent,
    ParentDochckComponent,
    ChildDoCheckComponent,
    HomeComponent,
    HomeAfterContentCheckedComponent,
    HomeAfterViewInitComponent,
    ParentNgDesTroyComponent,
    ChildNgDesTroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
