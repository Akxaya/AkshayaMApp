import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { CastleComponent } from './castle/castle.component';
import { TransformerBattleGroundComponent } from './Modules/transformer-battle-ground/transformer-battle-ground.component';
import { AboutMeComponent } from './Modules/about-me/about-me.component';


const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'transformer', component: TransformerBattleGroundComponent },
  { path: 'castle', component: CastleComponent },
  {path:'', component:AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
