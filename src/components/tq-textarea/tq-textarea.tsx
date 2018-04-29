
import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'tq-textarea',
  styleUrl: 'tq-textarea.scss'
})

export class TqTextarea {
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  @Element() element;
  @Event() contentChanged: EventEmitter;
  editor: any;

  componentWillLoad() {
    var quillCss = (document.createElement('link'));
    quillCss.href = 'https://cdn.quilljs.com/1.0.0/quill.snow.css';
    quillCss.rel = 'stylesheet';
    document.head.appendChild(quillCss);
  }

  componentDidLoad() {

    var quillJs = (document.createElement('script'));
    quillJs.src = 'https://cdn.quilljs.com/1.0.0/quill.js';
    let self = this;
    this.element.appendChild(quillJs);

    quillJs.onload = () => {
      let toolbarOptions = [
        ['bold', 'italic', 'underline'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

        [{ 'color': ['#ffffff', '#f34a4a', '#262F34', '#F1D3BC', '#615049'] }],
        [{ 'align': [] }],
        ['image', 'video'],
        ['clean']                                         // remove formatting button
      ];
      self.editor = new window['Quill']('#editor', {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        }
      });

      self.editor.on('text-change', () => {
        let data = {
          text: self.editor.getText(),
          html: this.editor.container.querySelector('.ql-editor').innerHTML
        };
        this.contentChanged.emit(data);
      });
      this.editor.container.querySelector('.ql-editor').innerHTML = this.value;
    }
  }

  render() {
    return (
      <div>
        <div id='toolbar'></div>
        <div id='editor'></div>
      </div>
    );
  }
}