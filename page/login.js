import { Chat } from '../page/chat.js';
import {inputCommon} from '../common/inputCommon.js';
import { inputCheckBox } from '../common/inputCheckBox.js';
import { setScreen } from '../index.js';
import { Register } from '../page/register.js'

class Login {
    image = document.createElement("img");
    container = document.createElement('div');
    title = document.createElement('h3');
    
    form = document.createElement('form');

    emailDiv = document.createElement('div');
    passDiv = document.createElement('div');
    
    iconUser = document.createElement('div');
    iconPass = document.createElement('div');

    inputEmail = new inputCommon("email", "Enter your email", "inputEmail");
    inputPass = new inputCommon("password", "Enter your password", "inputPassword");

    lableCheckBox = document.createElement('span');
    inputCheckBox = new inputCheckBox('checkbox', 'remember', 'Remember me');

    actionContainer = document.createElement('div');
    btnLogin = document.createElement('button');
    btnRegister = document.createElement('button');

    lableSocial = document.createElement('span');
    socials = document.createElement('div');

    faceBook = document.createElement('a');
    twitter = document.createElement('a');
    google = document.createElement('a');

    constructor() {
        this.title.innerHTML = "Login";
        this.image.src = "https://i.pinimg.com/564x/e1/b4/32/e1b432f65e5f219f8891c15f72a461c0.jpg"
        
        this.container.appendChild(this.form);

        this.lableCheckBox.innerHTML = "Remember me";
        this.lableCheckBox.classList.add('check');

        this.form.appendChild(this.title);  

        this.emailDiv.classList.add('inputDiv');

        this.iconUser.innerHTML = '<i class="fas fa-user"></i>';
        this.iconUser.classList.add('infor');

        this.emailDiv.appendChild(this.iconUser);
        this.emailDiv.appendChild(this.inputEmail.container);

        this.form.appendChild(this.emailDiv);

        this.passDiv.classList.add('inputDiv');
        
        this.iconPass.innerHTML = '<i class="fas fa-lock"></i>';
        this.iconPass.classList.add('infor');

        this.passDiv.appendChild(this.iconPass);
        this.passDiv.appendChild(this.inputPass.container);

        this.form.appendChild(this.passDiv);

        this.form.appendChild(this.inputCheckBox.container);

        this.inputCheckBox.container.appendChild(this.lableCheckBox);
        this.form.appendChild(this.socials);
        this.inputCheckBox.container.classList.add('check');

        this.inputEmail.container.classList.add('infor');
        this.inputPass.container.classList.add('infor');

        this.btnLogin.innerHTML = "Login";
        this.btnLogin.classList.add("btn");
        this.btnRegister.innerHTML = "Go to register";
        this.btnRegister.classList.add("btn");

        this.lableSocial.innerHTML = "Bạn có thể đăng nhập với ";

        this.socials.classList.add("socials");
        this.faceBook.innerHTML = '<i class="fab fa-facebook-f"></i>';
        this.faceBook.href = "https://www.facebook.com/ptx.giang.90/";
        this.twitter.innerHTML = '<i class="fab fa-twitter"></i>';
        this.google.innerHTML = '<i class="fab fa-google"></i>';

        this.container.classList.add("wrap");

        this.form.classList.add('form');


        this.btnLogin.addEventListener("click", this.handleLogin);
        this.btnRegister.addEventListener("click", this.handleRegister);

        this.container.appendChild(this.image);

        this.form.appendChild(this.btnLogin);
        this.form.appendChild(this.btnRegister);

        this.socials.appendChild(this.lableSocial);
        this.socials.appendChild(this.faceBook);
        this.socials.appendChild(this.twitter);
        this.socials.appendChild(this.google);
    }

    handleLogin = (e) => {
        e.preventDefault();
        const email = this.inputEmail.getValue();
        const password = this.inputPass.getValue();

         
        if (!email) {
            this.inputEmail.setErrMessage("Email cannot be empty");
        } else {
            this.inputEmail.setErrMessage("");
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                console.log(userCredential);
                // Signed in
                var user = userCredential.user;

                console.log(user);
                // ...
                console.log('Đăng nhập thành công');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });

          
    }

    handleRegister = (e) =>{
        e.preventDefault();
        const registerScreen = new Register ();
        setScreen(registerScreen.container);
    }
}

export {Login}