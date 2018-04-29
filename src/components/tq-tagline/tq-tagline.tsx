import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tq-tagline',
  styleUrl: 'tq-tagline.scss'
})

export class TqTagline {

  @Prop() text: string;

  render() {
    let caseInsensitiveTiqqe = RegExp('tiqqe', 'i');
    let parts = this.text.split(caseInsensitiveTiqqe);
    return (
      <div class="tagline">
        <h1>{parts[0]}<tq-logo></tq-logo>{parts[1]}</h1>
      </div>
    )
  }
}