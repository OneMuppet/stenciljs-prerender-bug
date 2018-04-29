
import { Component, Prop, Element } from '@stencil/core';
import { FabIconTypes } from './fabIconTypes';

@Component({
  tag: 'tq-fab',
  styleUrl: 'tq-fab.scss'
})

export class TqFab {

  @Prop() key: string;
  /** Will keep the fab visible */
  @Prop() alwaysOn: boolean;
  @Prop() icon: FabIconTypes = FabIconTypes.edit;
  @Element() element;

  private showFab() {
    this.element.querySelector('.fab').classList.remove('hide');
  }

  userIsAuthorized() {
    return (window['user'] && window['user'].getHostedDomain() === 'tiqqe.com');
  }

  componentDidLoad() {
    let self = this;
    window.addEventListener('onSignIn', () => {
      if (this.userIsAuthorized()) {
        self.showFab();
      }
    })
    if (this.userIsAuthorized()) {
      self.showFab();
    }
  }

  render() {
    return (
      <a class={`fab hide ${this.alwaysOn ? 'always-on' : ''}`} href={`/admin?key=${btoa(this.key || '')}`}>
        <img alt='edit card' src={`assets/images/${this.icon}.png`} />
      </a>
    );
  }
}