import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogueModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CartdetailComponent } from './components/cartdetail/cartdetail.component';
import { ImageviewComponent } from './components/imageview/imageview.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import { ShareService } from '/services/share.service';
import { UsstateService } from './services/usstate.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path :'', component: ProductComponent},
  { path :'about', component: AboutComponent},
  { path :'contact', component: ContactComponent},
  { path :'product', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductComponent,
    CartComponent,
    CartdetailComponent,
    ImageviewComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents:[ImageviewComponent],
  providers: [ShareService, Usstateservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
