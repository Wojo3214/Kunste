//firebase

import {
    firebaseDB
} from "../js/firebase_config.js";

import artDetailsService from "../js/art-details-service.js";


export default class ExhibitionDetailsPage {
    constructor() {
        this.template();
        this.exhibitionRef = firebaseDB.collection("exhibitions");
        this.artworkRef = firebaseDB.collection("artworks");
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

        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
            artDetailsService.appendArtworks(artworks);
        });
    }

    // exhibition details page template
    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibition-details" class="page exhibition-details">
                  <div id="details-banner">
                      <div id="overlay"></div>
                      <img src="./media/back-arrow.svg" id="back-arrow" alt="back arrow" onclick="navigateTo('exhibitions')">
                      <h3 class="exhibition_title"></h3>
                      <img src="./media/map.svg" alt="map" class="banner_img" onclick="navigateTo('map')">
                  </div>
                  <div id="details-description">
                    <div id="floor-description">
                        <h1 class="floornumber"></h1>
                    </div>
                      <div>
                          <h3 class="description_title">Description</h3>
                          <p class="description_text"></p> 
                      </div>
                  </div>
                  <div id="exhibition-artworks">
                      <h4 class="list_title">Artworks in this exhibition</h4>
                  <div id="artwork-list"></div>
                </div>
               </section>
          `;
    }

}
