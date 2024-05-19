// src/app/documentation/documentation-routing.module.ts
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {GettingStartedComponent} from "./pages/getting-started/getting-started.component";
import {AlertsComponent} from "./pages/alerts/alerts.component";
import {GridComponent} from "./pages/grid/grid.component";
import {ColorsComponent} from "./pages/colors/colors.component";
import {TablesComponent} from "./pages/tables/tables.component";
import {FormsComponent} from "./pages/forms/forms.component";
import {CardsComponent} from "./pages/cards/cards.component";
import {ButtonsComponent} from "./pages/buttons/buttons.component";

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {
}
