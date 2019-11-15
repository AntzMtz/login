import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import './invisi.html';

class FormButton extends PolymerElement {

    static get template() {
        return html`
            <style>
            
            </style>
            
            <paper-button id="cance">quien</paper-button>
        `;
    }    

}
window.customElements.define('formbutton-app', FormButton);