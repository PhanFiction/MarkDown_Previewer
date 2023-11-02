import { Component, Input, Output } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent {
  markdownText: string = `
    # This is a header 
    ## This is a second header
    ### This is a third header
  `;
  previewHTML: string = '';
  
  updatePreview() {
    // Parse markdown to HTML
    this.previewHTML = marked(this.markdownText);
  }
}