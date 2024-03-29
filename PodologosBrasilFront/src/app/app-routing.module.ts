import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "main",
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "main",
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "main",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
