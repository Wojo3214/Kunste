import {
    firebaseDB
} from "../js/firebase_config.js";
import Loader from "../js/loader.js";
import spaService from "../js/spa.js";
import artDetailsService from "../js/art-details-service.js";


class WelcomePage {
    constructor() {
        this.template();
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.userRef = firebaseDB.collection("users");
        this.authUser;
        this.authUserRef;
    }

    init(){
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if(user){
                this.userAuthenticated(user);
            }   else {
                this.userNotAuthenticated();
            }
        });
    }

    userAuthenticated(user) {
        this.initAuthUserRef();
        Loader.show(false);
        document.getElementById("user-name").innerHTML =
        `${user.displayName}`;
    }

    userNotAuthenticated() {
        console.log("Firebase");
        spaService.navigateTo("start");
        // Firebase UI configuration
        const uiConfig = {
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: '#your-card'
        };
        this.ui.start('#firebaseui-auth-container', uiConfig);
        Loader.show(false);
    }

    initAuthUserRef() {
        let authUser = firebase.auth().currentUser;
        this.authUserRef = firebaseDB.collection("users").doc(authUser.uid);

        // init user data and favourite artworks
        this.authUserRef.onSnapshot({
            includeMetadataChanges: true
        }, userData => {
            if (!userData.metadata.hasPendingWrites) {
                let user = {
                    ...authUser,
                    ...userData.data()
                }; //concating two objects: authUser object and userData objec from the db
                this.authUser = user;
                artDetailsService.init();
                Loader.show(false);
            }
        });
    }

    logout() {
        firebase.auth().signOut();
    }
  
    updateAuthUser(ticket, mail) {
        Loader.show(true);

        //update user database
        this.authUserRef.set({
            ticket: ticket,
            mail: mail
        }, {
            merge: true
        }).then(() => {
            Loader.show(false);
        });
    }

    updateUser() {
        let ticket = document.querySelector('#ticket').value;
        let mail = document.querySelector('.firebaseui-id-email').value;

        
        let inputTicketError = document.getElementById("ticket-error");
        if(ticket.length == 6){  
            this.updateAuthUser(ticket, mail);
            navigateTo('onboarding');
        } else{
            inputTicketError.innerText = "Your card should have 6 numbers";   
        }
    }     

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
                <!--START PAGE-->
               <section id="start" class="page start-page">
                    <header class="welcome">
                        <h1>Welcome in KüNSTE</h1>
                    </header>
                    <div class="choice">
                        <div class="main-cta-btn">
                            <a href="#login" class="go"><p class="log-out">Log in / Sign up</p><span class="arrow-icon"><i class="fas fa-arrow-right"></i></span></a>
                        </div><!--FUTURE IMPROVEMENTS
                        <div class="other-options">
                            <a href="#guest" class="log-in-option guest">Continue as a guest</a>
                            <a href="#signup" class="log-in-option">Sign up</a>
                        </div>-->
                    </div>
               </section>
               <!--LOGIN PAGE-->
               <section id="login" class="page login-page">
                    <header class="welcome">
                        <h1>Log in / Sign up to KüNSTE</h1>
                    </header>
                    
                    <div class="login-container">
                        <div id="firebaseui-auth-container"></div>
                    </div>
               </section>
              
               <!--ADD YOUR CARD PAGE-->
               <section id="your-card" class="page your-card-page">
                    <header class="welcome">
                        <h1>Get your virtual card</h1>
                    </header>
                    <div class="card-container">
                        <p class="card-desc">We want to enable our clients to visit our museum in the most convenient and comfortable way, that's why you can get a virtual tickets if you already have traditional one.  To get virtual ticket you have to write a code from your current ticket. Your ticket will be available in "Profile page".</p>

                        <input id="ticket" type="number" name="card-number" placeholder="Ticket number" maxlength="6">
                        <p id="ticket-error" class="ticket-error"></p>
                        <div class="choice2">
                            <div class="skip-go-container">
                                <a href="#home" class="skip">SKIP</a>
                                <div class="go" onclick="updateUser()"><p class="log-out">Get a virtual ticket</p><span class="arrow-icon"><i class="fas fa-arrow-right"></i></span></div>
                            </div>
                        </div>
                    </div>
               </section>
               <!--YOUR TICKET PRESENTATION PAGE-->
               <section id="your-card-presentation" class="page your-card-presentation-page">
                    <header class="welcome">
                        <h1>Your virtual card</h1>
                    </header>
                    <div class="card-container">
                        <img src="./media/kunste-card.png" class="card" alt="Your card">
                        <p class="card-desc">Your KüNSTE ticket has been added. Now you can go to "Homepage".</p>
                        <div class="choice2">
                            <div class="main-cta-btn">
                                <a href="#onboarding" class="go"><p class="log-out">Let's start</p><span class="arrow-icon"><i class="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
               </section>
          `;
    }
}

const welcomePage = new WelcomePage()
export default welcomePage;
