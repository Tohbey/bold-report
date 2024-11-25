import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {
  constructor(@Optional() @SkipSelf() appRoutingModule: AppRoutingModule) {
    if (appRoutingModule) {
      throw new Error(
        "App Routing Module can only be a singleton imported by the Root AppModule "
      );
    }
  }
}
