import {
    firebaseDB
} from "../js/firebase_config.js";

import artDetailsService from "../js/art-details-service.js";

export default class ArtDetails {
    constructor() {
        this.template();
        this.artworkRef = firebaseDB.collection("artworks");
        this.read();
    }

    read() {
        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
            this.appendOtherArtworks(artworks)
        });
    }
    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="art-details" class="page">
                  <div id="artwork-banner">
                      <div class="artwork-image-container"></div>
                      <div id="artwork-overlay"></div>
                      <img src="./media/back-arrow.svg" id="back-arrow" alt="back arrow" onclick="navigateTo('exhibition-details')">
                      <h3 class="artwork-title"></h3>
                      <div class="fav-button-container"></div>
                  </div>
                  <div id="artwork-description-top">
                      <div id="image-wrapper">
                        <div id="artist-image-container">
                        </div>
                        </div>
                        <div id="artwork-facts-container">
                            <p class="facts_title">Year: Type: Size:<p>
                            <p class="facts"></p>
                        </div>
                        </div>
                  <div id="details-container">
                    <div id="artwork-description-left">
                         <h1 class="artist-name"></h1>
                         <h3 class="artwork-name"></h3>
                    </div>
                    <div id="artwork-description-right">
                         <h3 class="description-title">Description</h3>
                         <p class="description-text"></p> 
                    </div>
                  </div>
                  <div id="artist-artworks">
                      <h4 class="list-title">Other artworks by this artist</h4>
                  <div id="other-artworks-list"></div>
                </div>
               </section>
          `;
    }

    appendOtherArtworks(artworks) {
        let template = "";
        for (let artwork of artworks) {
            template += /*html*/ `
                <img class="other-artwork-image" src='${artwork.image}'>
            `;
        }
        document.querySelector("#other-artworks-list").innerHTML = template;
    }

    addToFavourites(artworkId) {
        artDetailsService.addToFavourites(artworkId);

    }

    removeFromFavourites(artworkId) {
        artDetailsService.removeFromFavourites(artworkId);
    }

}