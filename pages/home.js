import {
    firebaseDB
} from "../js/firebase_config.js";

export default class HomePage {
    constructor() {
        this.exhibitsImgRef = firebaseDB.collection("exhibitions").limit(4);
        this.template();
        this.read();
    }

    read() {
        this.exhibitsImgRef.onSnapshot(snapshotData => {
            let exhibitsImgs = [];
            snapshotData.forEach(doc => {
                let exhibitImg = doc.data();
                exhibitImg.id = doc.id;
                exhibitsImgs.push(exhibitImg);
            });
            this.appendExhibitsImgs(exhibitsImgs);
        });
    }

    // home page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/`
            <section id="home" class="page home-page">
                <div class="home-content">
                    <header class="applogo">
                        <img src="./media/aros-logo.svg" class="logo-main">
                    </header>
                </div>
                <div class="current-exhibitions">
                    <h3 class="home_title">CURRENT EXHIBITIONS</h3>
                    <div class="current-exhibitions-stuff"></div>
                    <a href="#exhibitions" class="more">See more</a>
                </div>
            </section>
        `;
    }

    // appending the current exhibitions
    appendExhibitsImgs(exhibitsImgs) {
        let htmlTemplate = "";
        for (let exhibitImg of exhibitsImgs) {
            htmlTemplate += `
                <div class="exhibits" onclick="selectExhibition('${exhibitImg.name}', '${exhibitImg.image}', '${exhibitImg.floor}', '${exhibitImg.description}' )">
                    <img src="${exhibitImg.image}" alt="${exhibitImg.name}">
                    <h3>${exhibitImg.name}</h3>
                </div>
                
          `;
        }
        document.querySelector('.current-exhibitions-stuff').innerHTML = htmlTemplate;
    }

    // opening and closing of the navigation
    openCloseNav() {
        console.log("Clicked nav");
        let navContainer = document.querySelector(".nav-container");
        navContainer.style.display = "block";
        navContainer.classList.add("open-nav");
    }
}
