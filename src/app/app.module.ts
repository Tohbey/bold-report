import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MsalGuard,
  MsalGuardConfiguration,
  MsalModule,
  MsalService,
} from "@azure/msal-angular";
import {
  IPublicClientApplication,
  PublicClientApplication,
  BrowserCacheLocation,
  LogLevel,
  InteractionType,
} from "@azure/msal-browser";
import { environment } from "src/environments/environment";
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from "@angular/fire/compat/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { BoldReportDesignerModule } from "@boldreports/angular-reporting-components";

import "@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min";
import "@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min";

// data-visualization
import "@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min";
import "@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min";

// code-mirror
import "codemirror/lib/codemirror";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/mode/sql/sql";
import "codemirror/mode/vb/vb";

import * as CodeMirror from "codemirror";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
const codemirror = "CodeMirror";
window[codemirror] = CodeMirror;

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.applicationId,
      authority: "https://login.microsoftonline.com/" + environment.tenantId,
      redirectUri: environment.redirectURL,
      postLogoutRedirectUri: "/",
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE,
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ["user.read"],
    },
    loginFailedRoute: "/login-failed",
  };
}

// Initialize MSAL during app initialization
export function initializeMsal(msalService: MsalService) {
  return () => msalService.initialize();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MsalModule,
    NgxChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    LoadingBarHttpClientModule,
    BoldReportDesignerModule,
    ToastrModule.forRoot({ timeOut: 30000 }),
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    MsalService,
    MsalGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMsal,
      deps: [MsalService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

window["jQuery"] = window["$"] = $;
