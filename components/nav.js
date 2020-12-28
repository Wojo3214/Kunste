export default class NavBar{
    constructor(){
        this.template();
        console.log("works");
    }

    // navigation template
    template(){
        document.querySelector("#app").innerHTML += /*html*/`
        <div class="nav-container">
            <nav class="navigation">
                <span class="close-btn" onclick="closeNav()">
                    <div></div>
                    <div></div>
                </span>
                <ul id="nav-items">
                    <li><a href="#home" class="nav-link">Home</a></li>
                    <li><a href="#map" class="nav-link">Museum Map</a></li>
                    <li><a href="#exhibitions" class="nav-link">Exhibitions</a></li>
                    <li><a href="#tickets" class="nav-link">Ticket store</a></li>
                    <li><a href="#profile" class="nav-link">Profile</a></li>
                </ul>
                <div class="open-hours">
                    <h3>Opening hours</h3>
                    <div class="open-hours-container">
                        <span class="day">Monday</span><span class="time">Closed</span>
                    </div>
                    <div class="open-hours-container">
                        <span class="day">Tue-Fri</span><span class="time">10:00 - 19:00</span>
                    </div>
                    <div class="open-hours-container">
                        <span class="day">Sat-Sun</span><span class="time">11:00 - 19:00</span>
                    </div>
                </div>
                <div class="contact">
                    <h3>Contact</h3>
                    <div class="contact-container">
                        <span class="contact-option">Tel:</span><span class="time"><a href="tel:32431122">32 43 11 22</a></span>
                    </div>
                    <div class="contact-container">
                        <span class="contact-option">E-mail:</span><span class="time"><a href="mailto: info@aros.dk">info@aros.dk</a></span>
                    </div>
                </div>
                <p class="hours" onclick="openHours()">Opening hours and contact</p>

                <div class="log-out-container">
                    <span class="arrow-icon"><i class="fas fa-arrow-left"></i></span>
                    <p class="log-out" onclick="logout()">Log out</p>
                </div>
            </nav>
        </div>
        `;
    }

    closeNav(){
        let navContainer = document.querySelector(".nav-container");
        navContainer.classList.remove("open-nav");
        navContainer.style.display = "none";
    }

    openHours(){
        let navItems = document.getElementById("nav-items");
        let openHours = document.querySelector(".open-hours");
        let contact = document.querySelector(".contact");
        let openHoursBtn = document.querySelector(".hours");

        if(document.querySelector(".close-hours") != null){
            document.querySelector(".close-hours").remove();
        }

        navItems.style.display = "none";
        openHours.style.display = "flex";
        contact.style.display = "flex";
        openHoursBtn.style.display = "none";

        let closeHoursBtn = document.createElement("P");
        closeHoursBtn.innerText = "Close hours and contact";
        closeHoursBtn.classList.add("close-hours");
        let nextElement = document.querySelector(".log-out-container");
        nextElement.parentNode.insertBefore(closeHoursBtn, nextElement);
        console.log(closeHoursBtn);
        closeHoursBtn.addEventListener("click", this.closeHours);

    }
    
    closeHours(){
        let navItems = document.getElementById("nav-items");
        let openHours = document.querySelector(".open-hours");
        let contact = document.querySelector(".contact");
        let openHoursBtn =document.querySelector(".hours");
        let closeHoursBtn =document.querySelector(".close-hours");

        navItems.style.display = "block";
        openHoursBtn.style.display = "block";
        openHours.style.display = "none";
        contact.style.display = "none";
        closeHoursBtn.style.display = "none";
    }
    
}