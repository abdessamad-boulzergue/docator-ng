import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.css']
})
export class DocEditorComponent implements OnInit {

   rubanItems:Array<Object> = [];

  constructor() { }

  ngOnInit(): void {
    this.rubanItems= [
      {
        name: "Insertion",
        children: [
          {
            class: "compositionTools-Paragraph",
            title: "Paragraph",
            icon: "mdi-text",
            draggable: true,
            type: "this.rt.TEXT_EDITOR_TYPE",
          },
          {
            class: "compositionTools-Image",
            icon: "mdi-image",
            title: "Image",
            draggable: true,
            type: "this.rt.IMAGE_TYPE",
          },
          {
            class: "compositionTools-Table",
            title: "Table",
            icon: "mdi-table",
            draggable: true,
            type: "TableEditor",
          },
          {
            class: "compositionTools-UserInput",
            title: "UserInput",
            icon: "mdi-sign-text",
            draggable: true,
            type: "UserInput",
          },
        ],
      },
      {
        name: "Home",
        children: [
          {
            title: "Bold",
            icon: "mdi-format-bold",
            draggable: false,
            key: "this.rt.FONT_FAMILY_BOLD",
          },
          {
            title: "Italic",
            icon: "mdi-format-italic",
            draggable: false,
            key: "this.rt.FONT_FAMILY_ITALIC",
          },
          {
            title: "Underline",
            icon: "mdi-format-underline",
            draggable: false,
            key: "this.rt.TEXT_DECORATION_UNDERLINE",
          },
        ],
      },
    ];
  }

}
