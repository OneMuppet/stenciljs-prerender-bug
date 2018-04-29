import { Component, Event, EventEmitter, State } from '@stencil/core';
import { MenuItem } from './menuItem';

@Component({
  tag: 'tq-menu',
  styleUrl: 'tq-menu.scss'
})

export class TqMenu {

  menuItems: MenuItem[] = [
    { url: '/', text: 'Home', hide: true },
    { url: '/home', text: 'Home' },
    { url: '/culture', text: 'Culture' },
    { url: '/career', text: 'Career' },
    { url: '/people', text: 'People' },
    { url: '/contact', text: 'Contact' },
    { url: '/work', text: 'Work', hide: true },
    { url: '/services', text: 'Services', hide: true },
    { url: '/events', text: 'Events', hide: true },
    { url: '/blog', text: 'Blog', hide: true },
    { url: '/admin', text: 'Admin', hide: true },
    { url: '/show', text: 'Show', hide: true },
  ];

  @State() showMobileMenu: boolean;
  @Event() onToggle: EventEmitter;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    this.onToggle.emit({ visible: this.showMobileMenu });
  }

  closeMobileMenu() {
    this.showMobileMenu = false;
    this.onToggle.emit({ visible: this.showMobileMenu });
  }

  render() {
    return (
      <div>
        <a aria-open={this.showMobileMenu} class="button toggle-menu" onClick={() => this.toggleMobileMenu()}>
          <i />
          <i />
          <i />
        </a>
        <ul id="" class={this.showMobileMenu ? 'visible' : ''}>
          {this.menuItems.map(item => {
            return (
              <li class={item.hide ? 'hide' : ''}>
                <stencil-route-link url={item.url} onClick={() => this.closeMobileMenu()}>{item.text}</stencil-route-link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}