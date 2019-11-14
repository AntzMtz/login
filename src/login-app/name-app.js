import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';

import '@polymer/iron-icons/iron-icons.js';

import '@polymer/iron-form/iron-form.js';




/**
 * @customElement
 * @polymer
 */
class NameApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          text-align:left;
        }
      </style>

      <span>Mi nombre es {{name}}</span>
    `;

  }
  static get properties() {
      return {
        name: String
      };
    }

    ready(){
      super.ready();
      setTimeout(()=>{
        //console.log("ejecuto")
        this.dispatchEvent(new CustomEvent("namechanged"))

      },3000)

    }

}
window.customElements.define('name-app', NameApp);
