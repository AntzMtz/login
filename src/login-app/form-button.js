import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import './form-buttom.js';
import './MisEstilos-app.js';
class FormButton extends PolymerElement {

    static get template() {
        return html`
            <style include="MisEstilos">
                
            </style>
            <formbuttom-app id="cance" but="Salida"></formbuttom-app>
            
            
        `;
    }    

    viewCan(){
        //this.$.cance.hidden="none";
        //this.style.display="none";
        this.style.visibility="hidden";
      }
    
      
      
    ready(){
          super.ready();
          this.addEventListener('click', this.viewCan);

          this.$.cance.addEventListener("click",()=>{
              this.viewCan();
          })
      }
}
window.customElements.define('formbutton-app', FormButton);