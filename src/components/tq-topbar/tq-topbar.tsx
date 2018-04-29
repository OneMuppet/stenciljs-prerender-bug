import { Component } from '@stencil/core';

@Component({
  tag: 'tq-topbar',
  styleUrl: 'tq-topbar.scss'
})

export class TqTopbar {
  render() {
    return (
      <div>
        <tq-logo></tq-logo>
        <tq-menu></tq-menu>
      </div>
    )
  }
}