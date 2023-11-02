import { Component, Input, Output } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent {
  textData: string = '';
  messages: {id: number, text: string, headerLevel: number, tagType: string }[] = [];
  headerLevel = 1;
  textId = 0;
  markdownText: string = '';
  previewHTML: string = '';

  onMessageChange(newValue: string) {
    this.textData = newValue;
    console.log(this.messages);
  }
  submitForm() {
    const regex = /#+\s(.*)/g;
    const replacedText = this.textData.replace(regex, (match:any, capturedText: any) => {
      this.headerLevel = match.split(' ')[0].length - 1 === 0 ? 1 : match.split(' ')[0].length - 1;
      return `${capturedText}`;
    });
    this.messages.push({text: replacedText, id: this.textId, headerLevel: this.headerLevel, tagType: 'h1' });
  }

  updatePreview() {
    // Parse markdown to HTML
    this.previewHTML = marked(this.markdownText);
  }
}