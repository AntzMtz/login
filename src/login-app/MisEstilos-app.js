
class MisEstilos   {
    static get template() {
        return html`
            <style>
                :host{
                    display: block;
                    text-align:left;
                    --form-buttom-the:{
                        background-color: var(--paper-deep-purple-a100);
                        color:white;
                         border:none;
                        border-radius:5px;  
                    }   
                }
            </style>
        `;
}
}
customElements.define('misestilos-app', MisEstilos);