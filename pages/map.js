import {
    firebaseDB
} from "../js/firebase_config.js";

let exhibitionsData = [];

export default class Map {
    constructor() {
        this.exhibitionRef = firebaseDB.collection("exhibitions");
        this.template();
        this.read();
    }

    read() {
        this.exhibitionRef.onSnapshot(snapshotData => {

            snapshotData.forEach(doc => {
                let exhibition = doc.data();
                exhibition.id = doc.id;
                exhibitionsData.push(exhibition);
            });
            this.appendExhibitions(exhibitionsData);
        });

    }

    // map page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
            
        <section id="map" class="page map_page">
            <header class="topbar">
               <h2 class="map_title">ARoS MUSEUM APP</h2>
            </header>
            <div class="map_container">
            <div class="map_exhibition_details_filtered"></div>
                <div class="map_exhibition_details">
                    <div class="exhibition-image-map">
                        <h1 class="floornumbermap"></h1>
                        <h3 class="exhibition_title_map"></h3>
                    </div>
                </div>
                
                <div class="map_floors">
                    <div class="floor_button" onclick="openFloors()">
                        <p>FLOORS</p>
                        <div class="floors_container">
                        <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor4()">7</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor3()">6</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor2()">5</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor1()">4</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor0()">3</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle"onclick="openMapFloor5()" >2</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor6()">1</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor()">0</div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
        `;

    }

    openFloors() {
        document.querySelector(".floors_container").style.display = "flex"
    }

    openMapFloor() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background2.png')",
            document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("0"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };

    openMapFloor0() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background.png')",
            document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("3"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };

    openMapFloor1() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background2.png')",
            document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("4"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor2() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background.png')",
            document.querySelector(".floors_container").style.display = "none"

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("5"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor3() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background2.png')",
            document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("6"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor4() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background.png')",
            document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("7"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor5() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background2.png')",
            document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("2"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor6() {
        document.querySelector(".map_page").style.backgroundImage = "url('./media/map_background.png')",
            document.querySelector(".floors_container").style.display = "none";
        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("1"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };

    // appending the exhibitions
    appendExhibitions(exhibitions) {
        let template = "";
        for (let exhibition of exhibitions) {
            template += /*html*/ `
            <div class="map_exhibition_img">
                <img class="exhibition_img_map" src='${exhibition.image}'>
                <h3 class="exhibition-floor map_floor">FLOOR ${exhibition.floor}</h3>
                <h1 class="exhibition-name map_name">${exhibition.name}</h1>
            </div>
        </article>
        `;
        }
        document.querySelector(".map_exhibition_details_filtered").innerHTML = template;
    }

}