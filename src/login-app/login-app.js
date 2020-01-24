import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';

import '@polymer/iron-icons/iron-icons.js';

import '@polymer/iron-form/iron-form.js';
import './name-app.js';


/**
 * @customElement
 * @polymer
 */
class LoginApp extends PolymerElement {
    static get template() {
        return html `
        <style>
        :host {
          display: block;
          text-align:left;
          --fotm-butom:var(--paper-blue-200);
          --form-buttom-the:{
            background-color: var(--paper-deep-purple-a100);
            color:white;
            border:none;
            border-radius:5px;  
          }


        }
        paper-card{
          text-align: center;
          width: 400px;
          height: 250px;
          padding: 0em 1em 1em 1em;
        }
        paper-button[can]{
          color: var(--paper-white-100);
          background-color: var(--google-blue-100);
        }
        paper-input{
          width: 380px;
        }
        paper-button[raised]{
          background-color: var(--google-blue-100);
          text-align: center;

        }
        
        form{
          text-align: left;
        }
        form .card-acctions {
          padding-top: .51em;
          padding-left: .51em;
          text-align: center;
        }
        paper-card .card-header{
          font-size: 2em;
        }
        paper-card .card-header iron-icon{
          padding-top: .2em;
          height: 1.5em;
          width: 1.5em;
          color: var(--paper-blue-300);
        }
        form .card-content iron-icon{

          color: var(--paper-blue-300);
        }
        form .vacio {

          color: black;
        }



    paper-input.custom:hover {
      border: .51px solid #29B6F6;
    }

    paper-input.custom {
      margin-bottom: 8px;
      --primary-text-color: #01579B;
      --paper-input-container-color: blue;
      --paper-input-container-focus-color: blue;
      --paper-input-container-invalid-color: red;
      border: 1px solid #BDBDBD;
      border-radius: 5px;

      /* Reset some defaults */
      --paper-input-container: { padding: 5;};
      --paper-input-container-underline: { display: none; height: 0;};
      --paper-input-container-underline-focus: { display: none; };

      /* New custom styles */
      --paper-input-container-input: {
        box-sizing: border-box;
        font-size: inherit;
        padding: 1px;
      };
      --paper-input-container-input-focus: {
        background: rgba(0, 0, 0, 0.1);
      };
      --paper-input-container-input-invalid: {
        background: rgba(255, 0, 0, 0.3);
      };
      --paper-input-container-label: {
        top: 5px;
        left: 4px;
        background: white;
        padding: 5px;
        font-weight: bold;
      };
      --paper-input-container-label-floating: {
        width: auto;
        color: blue;
      };      
    }

      </style>
      <content></content>
      <paper-card   elevation="5" animated-shadow="false">
      <div class="card-header">
        <iron-icon class = "big" src ="src/imagen/whatsapp.png"></iron-icon>
        Crear Cuenta
        <iron-icon icon="icons:fingerprint"></iron-icon>

      </div>

      <form is="iron-form" id="form">
        <div class="card-content">
          <div class="vacio">
            <name-app name={{name1}} id="codi"></name-app>

          </div>

          <paper-input class="custom" value="{{email}}" type="email" id="email" always-float-label label="Email" required auto-validate>

            <iron-icon icon="mail" slot="prefix"></iron-icon>

          </paper-input>

          <paper-input  class="custom" id="pass" always-float-label label="Contraseña" type="Password" required auto-validate>
            <iron-icon icon="icons:lock" slot="prefix"></iron-icon>
          </paper-input>
        


        </div>
        <div class="card-acctions" id="but">
          <!--paper-button raised id="env" on-click="addUser">Enviar</paper-button>
          <paper-button raised id="env" >Enviar</paper-button>
          <paper-button can id="cance">Cancelar</paper-button-->
          <formbuttom-app raised id="env" but="Enviar" ></formbuttom-app> 
          <formbuttom-app can id="cance" but="Cancelar"></formbuttom-app>  
          
        </div>
        
      </form>
      </paper-card>
    `;

    }

    addUser(e) {
        if (this.$.email.validate() == false) {
            this.$.email.label = "Coloca un Mail Valido";
        } else {
            this.$.email.label = "Email";
        }

        if (this.$.pass.validate() == false) {
            this.$.pass.label = "Introduce tu Password";
        } else {
            this.$.pass.label = "Password";
        }
        console.log(e.target.id);
    }


    presiona() {
        this.name1 = "Antonio";
    }
    _emailChanged(a, b) {
        console.log(a);
        console.log(b);

    }

    mine() {
        if (this.up) {
            this.style.boxShadow = "none"
            this.up = false
        } else {
            this.style.boxShadow = "10px 10px 20px black"
            this.up = true
        }
    }


    ready() {
        super.ready();
        setTimeout(() => {
            this.name = "Antonio"
        }, 3000)

        //this.addEventListener("click",this.noVisible)
        //console.log(this.$.codi);
        this.$.cance.addEventListener("click", (e) =>
            this.presiona() + this.addUser(e) + this.viewCan()
        )
        this.$.codi.addEventListener("namechanged", (e) => {
            this.addUser(e)
        })
        this.$.env.addEventListener("click", (e) => {
            this.viewCanNo()
            console.log(this.$.email.value);
            if (this.$.email.value == "erly") {
                location.href = './src/Ejercicio/Ejercicio1.html'
            } else if (this.$.email.value == "Antz") {
                location.href = './src/HTML/HolaMundo.html'
            } else if (this.$.email.value == "cecy") {
                location.href = './src/HTML/doc2.html'
            } else if (this.$.email.value == "a") {
                location.href = './src/JavaScript/JSEjer.html'
            } else if (this.$.email.value == "b") {
                location.href = './src/JavaScript/JSEjer2.html'
            } else if (this.$.email.value == "c") {
                location.href = './src/JavaScript/JSEjer3.html'
            } else if (this.$.email.value == "d") {
                location.href = './src/JavaScript/JSVideos.html'
            } else if (this.$.email.value == "e") {
                location.href = './src/JavaScript/Audio/JSaudi.html'
            } else if (this.$.email.value == "formu") {
                location.href = './src/Formulario/formulario01.html'
            } else if (this.$.email.value == "canvas") {
                location.href = './src/Graficos/Canvas.html'
            } else if (this.$.email.value == "canvas1") {
                location.href = './src/Graficos/canvas02.html'
            } else if (this.$.email.value == "canvas2") {
                location.href = './src/Graficos/canvas02.html'
            } else if (this.$.email.value == "canvas3") {
                location.href = './src/Graficos/canvas03.html'
            } else if (this.$.email.value == "canvas4") {
                location.href = './src/Graficos/canvas04.html'
            }
        })
        this.addEventListener("click", () => {
            this.mine()

        })

    }




    viewCan() {
        this.$.cance.hidden = "false"
    }
    viewCanNo() {
        //this.$.cance.hidden="true"
        //this.$.env.hidden="false"
        this.$.cance.hidden = ""
    }

    static get properties() {
        return {
            name1: {
                type: String,
                value: 'Antz'
            },
            email: {
                type: String,
                observer: "_emailChanged"
            },
            up: {
                type: Boolean
            }

        };
    }


}
customElements.define('login-app', LoginApp);