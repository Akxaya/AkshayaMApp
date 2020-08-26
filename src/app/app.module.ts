import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import{Observable} from 'rxjs/Observable';
import { CastleComponent } from './castle/castle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SourceCastleService } from 'src/app/Service/source-castle.service';
import { TransformerBattleGroundComponent } from './Modules/transformer-battle-ground/transformer-battle-ground.component';
import { TransformerLineUpComponent } from './Modules/transformer-line-up/transformer-line-up.component';
import { TransformerVitalsComponent } from './Modules/transformer-vitals/transformer-vitals.component';
import { DataService } from '../app/Service/data.service';
import { transformer,selectedbot } from '../app/Elements/Transformers-interface';
/////Material/////
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatInputModule, MatInput} from '@angular/material/input';
import { TransformerResultComponent } from './Modules/transformer-result/transformer-result.component';
import { AboutMeComponent } from './Modules/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    CastleComponent,
    TransformerBattleGroundComponent,
    TransformerLineUpComponent,
    TransformerVitalsComponent,
    TransformerResultComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
     //material
     MatTabsModule,
     MatCardModule,
     MatIconModule,
     MatProgressBarModule,
     MatBadgeModule,
     HttpClientModule,
     MatChipsModule,
     MatGridListModule,
     MatToolbarModule,
     MatDividerModule,
     MatDialogModule,
     MatFormFieldModule,
     MatInputModule,
     MatListModule,
     BrowserAnimationsModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [SourceCastleService,TransformerVitalsComponent, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
