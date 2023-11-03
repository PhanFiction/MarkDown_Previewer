import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  markdownText: string = `# Header
## Header
### Header
- Bullet point
  - another bullet point
    - third bullet point

*You can make the text italic*
  
You can also make the **text bold**

Or it can be ***BOTH***

You can also add [links](links)

You can also create code like the one below:

A Simple code with two backticks \`<div></div>\`,

\`\`\`
    // this is multi-line code:

    function Example(firstLine, lastLine) {
      if (firstLine == '' && lastLine == '') {
        return null;
      }
    }
\`\`\`

You can also make **block quotes**
> Block Quotes!

There is also tables that you can create like the one below 
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

There is also numbered list to:
1. Numberlist 1.
1. Feel free to use 1's only
3. Number list 3
4. Number list 4
`;
  previewHTML: string = '';
  
  updatePreview() {
    // Parse markdown to HTML
    this.previewHTML = marked(this.markdownText);
  }

  ngOnInit(): void {
    this.updatePreview();
  }

  
}