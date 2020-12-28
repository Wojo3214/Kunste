import {
    firebaseDB
} from "../js/firebase_config.js";


export default class Profile {
    constructor() {
        this.exhibitionRef = firebaseDB.collection("artworks");
        this.template();
        this.read();
    }

    read() {
        this.exhibitionRef.onSnapshot(snapshotData => {
            let exhibitions = [];
            snapshotData.forEach(doc => {
                let exhibition = doc.data();
                exhibition.id = doc.id;
                exhibitions.push(exhibition);
            });
        });
    }

    // profile page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
            
        <section id="profile" class="page profile_page">
    
        <div id="underlay">
                </div>
                <div id="info-box">
                    <img src="./media/close.svg" id="info-close" onclick="closeStampsInfo()">
                    <h2 class="info_title">Stamps Collection</h2>
                    <div id="img-section">
                    <img src="./media/coffee.png" class="info_img" alt="coffee">
                    <img src="./media/coffee.png" class="info_img" alt="coffee">
                    </div>
                    <p class="info_text">Collect ARoS Coffee Stamps every time you 
                        enter the museum and scan your Virtual Ticket.</p>
                    <p class="info_text">Get <b>FREE COFFEE</b> in ARoS Café by 
                        collecting 10 coffee stamps.</p>
                    <p class="info_text_bold">You can get 1 coffee stamp per day..</p>

                </div>   
        
        <div class="detailed_ticket">
            <img src="./media/detailed_ticket.png" alt="detailed ticket" class="detailed_card" onclick="closeTicket()">
        </div>
        <img src="./media/settings.png" class="settings_icon">
            <header class="topbar profile_top">
               <h2 id="profile-title">PROFILE</h2>
               <h3 id="user-name"></h3>
            </header>
            <div class="virtual_card">
                <h3 id="titles">Your virtual ticket</h3>
                <img src="./media/virtual_card.png" id="card-img" onclick="zoomTicket()"> 
                <div class="subscription_time">
                    <h4 class="subscription_time">Student ticket</h4>
                    <h4 class="subscription_time">243 days left</h4>
                </div>
            </div>


            <div class="coffee_stamps">
                <div class="title_container">
                <h3 id="titles">Coffee stamps collection</h3>
                <img src="./media/question.svg" alt="question mark" class="info_btn" onclick="openStampsInfo()">
                </div>
                <div class="collection">
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png">    
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                </div>
            </div>

            <div class="coffee_stamps">
                <h3 id="titles">Favourite artworks</h3>
                <div class="favourite_artworks">
                   
                </div>
            </div>
            
        </section>
        
        `;
    }

    // animation enlarging the ticket
    zoomTicket() {
        document.querySelector(".profile_page").style.padding = "0";
        document.querySelector(".profile_page").style.overflow = "hidden";
        document.querySelector(".profile_page").style.height = "100vh";
        document.querySelector(".detailed_ticket").style.display = "flex";
    }

    //animation minimizing the ticket
    closeTicket() {
        document.querySelector(".profile_page").style.padding = "30px";
        document.querySelector(".profile_page").style.overflow = "unset";
        document.querySelector(".profile_page").style.height = "unset";
        document.querySelector(".detailed_ticket").style.display = "none";
    }

    // Coffee stamps info modal

    openStampsInfo() {

        document.querySelector(".profile_page").style.overflow = "hidden";
        document.querySelector(".profile_page").style.height = "fit-content";
        document.querySelector("#info-box").style.display = "flex";
        document.querySelector("#underlay").style.display = "block";
    }

    closeStampsInfo() {
        document.querySelector(".profile_page").style.overflow = "unset";
        document.querySelector(".profile_page").style.height = "unset";
        document.querySelector(".profile_page").style.opacity = "unset";
        document.querySelector("#info-box").style.display = "none";
        document.querySelector("#underlay").style.display = "none";
    }

}
