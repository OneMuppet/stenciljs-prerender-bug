
import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'tq-input-file',
  styleUrl: 'tq-input-file.scss'
})

export class TqInputFile {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() placeholder: string;

  @Event() fileSelected: EventEmitter;

  fileSelectedHandler(event) {
    this.fileSelected.emit(event.srcElement.files[0]);
  }

  render() {
    return (
      <div>
        <input type="file" onChange={(event) => this.fileSelectedHandler(event)} value={this.value} name={this.name} placeholder={this.placeholder} />
      </div>
    );
  }
}