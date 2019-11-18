import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

class FormButtom extends PolymerElement{
    static get template(){
        return html`
            <style>
            
            </style>
            
            <paper-button>quien</paper-button>
            
        `;
    
    }
}
window.customElements.define('formbuttom-app', FormButtom);