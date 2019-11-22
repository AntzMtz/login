import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

class FormButtom extends PolymerElement{
    static get template(){
        return html`
            <style>
              paper-button{
                //color: var(--paper-white-100);
                //--background-color: var(--fotm-butom);
                @apply(--form-buttom-the);
                }
            </style>
            
            <paper-button>{{but}}</paper-button>
            
        `;
    
    }

    static get properties() {
        return {
          but: {
            type: String,
            value: ''
          },
          
        };
      }


}
window.customElements.define('formbuttom-app', FormButtom);