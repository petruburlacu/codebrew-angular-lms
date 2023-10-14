import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeService } from "./data-access/home.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    providers: [],
    loadComponent: () =>
      import("./feature/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "privacy",
    loadComponent: () =>
      import("./feature/privacy-details/privacy-details.component").then(
        (m) => m.PrivacyDetailsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeService], // Provide the service here
})
export class HomeRoutingModule {}
