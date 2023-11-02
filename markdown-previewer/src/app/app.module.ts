import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewerComponent } from './previewer/previewer.component';
import { EditorComponent } from './editor/editor.component';
import { HashtagToHeadingDirective } from './components/hashtag-to-heading.directive';

@NgModule({
  declarations: [
    AppComponent,
    PreviewerComponent,
    EditorComponent,
    HashtagToHeadingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
