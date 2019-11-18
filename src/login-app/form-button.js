import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import './form-buttom.js';

class FormButton extends PolymerElement {

    static get template() {
        return html`
            <style>
            
            </style>
            <formbuttom-app id="cance">cancel</formbuttom-app>
            
            
        `;
    }    

    viewCan(){
        this.$.cance.hidden="none";
      }

      ready(){
          super.ready();
          this.$.cance.addEventListener("click",()=>{
              this.viewCan();
          })
      }
}
window.customElements.define('formbutton-app', FormButton);