import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "@angular/compiler"; // Ensure JIT compiler is loaded

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
