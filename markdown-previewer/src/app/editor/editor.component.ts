import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  message: string = '';

  onMessageChange(newValue: string) {
    this.message = newValue;
    console.log(newValue);
  }
}
