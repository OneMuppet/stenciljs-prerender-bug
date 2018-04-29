
import { Component } from '@stencil/core';

@Component({
  tag: 'tq-logo',
  styleUrl: 'tq-logo.scss'
})

export class TqLogo {
  render() {
    return (
      <div class="logo">
        <img alt='Tiqqe logo' src="../../assets/images/logo.png" />
        <span>TIQQE</span>
      </div>
    );
  }
}