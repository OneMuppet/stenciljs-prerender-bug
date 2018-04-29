/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  Card,
} from './entities/card';
import {
  CardSizes,
} from './entities/cardSizes';
import {
  FabIconTypes,
} from './components/tq-fab/fabIconTypes';

declare global {

  namespace StencilComponents {
    interface AppAdmin {

    }
  }

  interface HTMLAppAdminElement extends StencilComponents.AppAdmin, HTMLStencilElement {}

  var HTMLAppAdminElement: {
    prototype: HTMLAppAdminElement;
    new (): HTMLAppAdminElement;
  };
  interface HTMLElementTagNameMap {
    'app-admin': HTMLAppAdminElement;
  }
  interface ElementTagNameMap {
    'app-admin': HTMLAppAdminElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-admin': JSXElements.AppAdminAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAdminAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppCareer {

    }
  }

  interface HTMLAppCareerElement extends StencilComponents.AppCareer, HTMLStencilElement {}

  var HTMLAppCareerElement: {
    prototype: HTMLAppCareerElement;
    new (): HTMLAppCareerElement;
  };
  interface HTMLElementTagNameMap {
    'app-career': HTMLAppCareerElement;
  }
  interface ElementTagNameMap {
    'app-career': HTMLAppCareerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-career': JSXElements.AppCareerAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCareerAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppCulture {

    }
  }

  interface HTMLAppCultureElement extends StencilComponents.AppCulture, HTMLStencilElement {}

  var HTMLAppCultureElement: {
    prototype: HTMLAppCultureElement;
    new (): HTMLAppCultureElement;
  };
  interface HTMLElementTagNameMap {
    'app-culture': HTMLAppCultureElement;
  }
  interface ElementTagNameMap {
    'app-culture': HTMLAppCultureElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-culture': JSXElements.AppCultureAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCultureAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppPeople {

    }
  }

  interface HTMLAppPeopleElement extends StencilComponents.AppPeople, HTMLStencilElement {}

  var HTMLAppPeopleElement: {
    prototype: HTMLAppPeopleElement;
    new (): HTMLAppPeopleElement;
  };
  interface HTMLElementTagNameMap {
    'app-people': HTMLAppPeopleElement;
  }
  interface ElementTagNameMap {
    'app-people': HTMLAppPeopleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-people': JSXElements.AppPeopleAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPeopleAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppShow {

    }
  }

  interface HTMLAppShowElement extends StencilComponents.AppShow, HTMLStencilElement {}

  var HTMLAppShowElement: {
    prototype: HTMLAppShowElement;
    new (): HTMLAppShowElement;
  };
  interface HTMLElementTagNameMap {
    'app-show': HTMLAppShowElement;
  }
  interface ElementTagNameMap {
    'app-show': HTMLAppShowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-show': JSXElements.AppShowAttributes;
    }
  }
  namespace JSXElements {
    export interface AppShowAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppWork {

    }
  }

  interface HTMLAppWorkElement extends StencilComponents.AppWork, HTMLStencilElement {}

  var HTMLAppWorkElement: {
    prototype: HTMLAppWorkElement;
    new (): HTMLAppWorkElement;
  };
  interface HTMLElementTagNameMap {
    'app-work': HTMLAppWorkElement;
  }
  interface ElementTagNameMap {
    'app-work': HTMLAppWorkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-work': JSXElements.AppWorkAttributes;
    }
  }
  namespace JSXElements {
    export interface AppWorkAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqApp {

    }
  }

  interface HTMLTqAppElement extends StencilComponents.TqApp, HTMLStencilElement {}

  var HTMLTqAppElement: {
    prototype: HTMLTqAppElement;
    new (): HTMLTqAppElement;
  };
  interface HTMLElementTagNameMap {
    'tq-app': HTMLTqAppElement;
  }
  interface ElementTagNameMap {
    'tq-app': HTMLTqAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-app': JSXElements.TqAppAttributes;
    }
  }
  namespace JSXElements {
    export interface TqAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqCardEditor {
      'card': Card;
    }
  }

  interface HTMLTqCardEditorElement extends StencilComponents.TqCardEditor, HTMLStencilElement {}

  var HTMLTqCardEditorElement: {
    prototype: HTMLTqCardEditorElement;
    new (): HTMLTqCardEditorElement;
  };
  interface HTMLElementTagNameMap {
    'tq-card-editor': HTMLTqCardEditorElement;
  }
  interface ElementTagNameMap {
    'tq-card-editor': HTMLTqCardEditorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-card-editor': JSXElements.TqCardEditorAttributes;
    }
  }
  namespace JSXElements {
    export interface TqCardEditorAttributes extends HTMLAttributes {
      'card'?: Card;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqCard {
      'card': Card;
      'cardSize': CardSizes;
      'fullscreen': boolean;
    }
  }

  interface HTMLTqCardElement extends StencilComponents.TqCard, HTMLStencilElement {}

  var HTMLTqCardElement: {
    prototype: HTMLTqCardElement;
    new (): HTMLTqCardElement;
  };
  interface HTMLElementTagNameMap {
    'tq-card': HTMLTqCardElement;
  }
  interface ElementTagNameMap {
    'tq-card': HTMLTqCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-card': JSXElements.TqCardAttributes;
    }
  }
  namespace JSXElements {
    export interface TqCardAttributes extends HTMLAttributes {
      'card'?: Card;
      'cardSize'?: CardSizes;
      'fullscreen'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqFab {
      /**
       * Will keep the fab visible 
       */
      'alwaysOn': boolean;
      'icon': FabIconTypes;
      'key': string;
    }
  }

  interface HTMLTqFabElement extends StencilComponents.TqFab, HTMLStencilElement {}

  var HTMLTqFabElement: {
    prototype: HTMLTqFabElement;
    new (): HTMLTqFabElement;
  };
  interface HTMLElementTagNameMap {
    'tq-fab': HTMLTqFabElement;
  }
  interface ElementTagNameMap {
    'tq-fab': HTMLTqFabElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-fab': JSXElements.TqFabAttributes;
    }
  }
  namespace JSXElements {
    export interface TqFabAttributes extends HTMLAttributes {
      /**
       * Will keep the fab visible 
       */
      'alwaysOn'?: boolean;
      'icon'?: FabIconTypes;
      'key'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqInputFile {
      'name': string;
      'placeholder': string;
      'value': string;
    }
  }

  interface HTMLTqInputFileElement extends StencilComponents.TqInputFile, HTMLStencilElement {}

  var HTMLTqInputFileElement: {
    prototype: HTMLTqInputFileElement;
    new (): HTMLTqInputFileElement;
  };
  interface HTMLElementTagNameMap {
    'tq-input-file': HTMLTqInputFileElement;
  }
  interface ElementTagNameMap {
    'tq-input-file': HTMLTqInputFileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-input-file': JSXElements.TqInputFileAttributes;
    }
  }
  namespace JSXElements {
    export interface TqInputFileAttributes extends HTMLAttributes {
      'name'?: string;
      'onFileSelected'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqInputText {
      'name': string;
      'placeholder': string;
      'value': string;
    }
  }

  interface HTMLTqInputTextElement extends StencilComponents.TqInputText, HTMLStencilElement {}

  var HTMLTqInputTextElement: {
    prototype: HTMLTqInputTextElement;
    new (): HTMLTqInputTextElement;
  };
  interface HTMLElementTagNameMap {
    'tq-input-text': HTMLTqInputTextElement;
  }
  interface ElementTagNameMap {
    'tq-input-text': HTMLTqInputTextElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-input-text': JSXElements.TqInputTextAttributes;
    }
  }
  namespace JSXElements {
    export interface TqInputTextAttributes extends HTMLAttributes {
      'name'?: string;
      'placeholder'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqLogo {

    }
  }

  interface HTMLTqLogoElement extends StencilComponents.TqLogo, HTMLStencilElement {}

  var HTMLTqLogoElement: {
    prototype: HTMLTqLogoElement;
    new (): HTMLTqLogoElement;
  };
  interface HTMLElementTagNameMap {
    'tq-logo': HTMLTqLogoElement;
  }
  interface ElementTagNameMap {
    'tq-logo': HTMLTqLogoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-logo': JSXElements.TqLogoAttributes;
    }
  }
  namespace JSXElements {
    export interface TqLogoAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqMenu {

    }
  }

  interface HTMLTqMenuElement extends StencilComponents.TqMenu, HTMLStencilElement {}

  var HTMLTqMenuElement: {
    prototype: HTMLTqMenuElement;
    new (): HTMLTqMenuElement;
  };
  interface HTMLElementTagNameMap {
    'tq-menu': HTMLTqMenuElement;
  }
  interface ElementTagNameMap {
    'tq-menu': HTMLTqMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-menu': JSXElements.TqMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface TqMenuAttributes extends HTMLAttributes {
      'onOnToggle'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqTagline {
      'text': string;
    }
  }

  interface HTMLTqTaglineElement extends StencilComponents.TqTagline, HTMLStencilElement {}

  var HTMLTqTaglineElement: {
    prototype: HTMLTqTaglineElement;
    new (): HTMLTqTaglineElement;
  };
  interface HTMLElementTagNameMap {
    'tq-tagline': HTMLTqTaglineElement;
  }
  interface ElementTagNameMap {
    'tq-tagline': HTMLTqTaglineElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-tagline': JSXElements.TqTaglineAttributes;
    }
  }
  namespace JSXElements {
    export interface TqTaglineAttributes extends HTMLAttributes {
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqTextarea {
      'name': string;
      'placeholder': string;
      'value': string;
    }
  }

  interface HTMLTqTextareaElement extends StencilComponents.TqTextarea, HTMLStencilElement {}

  var HTMLTqTextareaElement: {
    prototype: HTMLTqTextareaElement;
    new (): HTMLTqTextareaElement;
  };
  interface HTMLElementTagNameMap {
    'tq-textarea': HTMLTqTextareaElement;
  }
  interface ElementTagNameMap {
    'tq-textarea': HTMLTqTextareaElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-textarea': JSXElements.TqTextareaAttributes;
    }
  }
  namespace JSXElements {
    export interface TqTextareaAttributes extends HTMLAttributes {
      'name'?: string;
      'onContentChanged'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TqTopbar {

    }
  }

  interface HTMLTqTopbarElement extends StencilComponents.TqTopbar, HTMLStencilElement {}

  var HTMLTqTopbarElement: {
    prototype: HTMLTqTopbarElement;
    new (): HTMLTqTopbarElement;
  };
  interface HTMLElementTagNameMap {
    'tq-topbar': HTMLTqTopbarElement;
  }
  interface ElementTagNameMap {
    'tq-topbar': HTMLTqTopbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tq-topbar': JSXElements.TqTopbarAttributes;
    }
  }
  namespace JSXElements {
    export interface TqTopbarAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }