import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css']
})
export class PreviewerComponent {
  @Input() previewHTML: string = '';
}
