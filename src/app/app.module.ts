import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardSpotifyPlayerComponent } from './card-spotify-player/card-spotify-player.component';
import { MaterialModule } from 'material-module';
@NgModule({
    declarations: [AppComponent, CardSpotifyPlayerComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
