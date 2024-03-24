// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideStore } from '@ngrx/store';
import { counterReducer } from "./app/store/counter.reducer";
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from "./app/store/counter.effects";


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
    providers: [provideStore({ counter: counterReducer }), provideEffects([CounterEffects])]
});
