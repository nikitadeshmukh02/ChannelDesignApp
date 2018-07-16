import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from '../../app/app.component';
import { ChannelComponent } from '../channel.component/channel.component';
 



const APP_ROUTES: Routes = [
  {
    path: '', component: ChannelComponent
    
  }
    ]
  export const Routing = RouterModule.forRoot(APP_ROUTES);

