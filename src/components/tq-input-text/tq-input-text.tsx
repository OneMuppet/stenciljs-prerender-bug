
import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tq-input-text',
  styleUrl: 'tq-input-text.scss'
})

export class TqInputText {
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() value: string;

  render() {
    return (
      <div>
        <input type="text" value={this.value} name={this.name} placeholder={this.placeholder} />
      </div>
    );
  }
}