import {
    firebaseDB
} from "../js/firebase_config.js";
import welcomePage from "../pages/welcome.js";
import Loader from "./loader.js";

class ArtDetailsService {
    constructor() {
        this.artworkRef = firebaseDB.collection("artworks");
    }

    init() {
        
        // init all artworks
        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
            
        });
        this.appendFavArtworks();
     }
     
    // appending the artworks
    appendArtworks(artworks) {
        let template = "";
        for (let artwork of artworks) {
            template += /*html*/ `
                    <article id="exhibition-artworks" onclick="selectArtwork('${artwork.id}','${artwork.title}', '${artwork.image}', '${artwork.artistimg}', '${artwork.facts}', '${artwork.name}', '${artwork.description}' )">
                        <div id="artwork-content">
                            <div id="overlay">
                                <div id="artwork-text">
                                    <h1 class="artwork_title">${artwork.title}</h1>
                                    <p class="artwork_name">${artwork.name}</p>
                                </div>
                                </div>
                                <img src="./media/arrow.svg" alt="arrow" class="artworks_arrow">
                            </div>
                        <img class="artwork_img" src='${artwork.image}'>
                        </div>
                    </article>
                `;
        }
        document.querySelector("#artwork-list").innerHTML = template;
    }
    
    // creating the button for adding to favorites
    generateFavArtworkButton(artworkId) {
        let btnTemplate = `
          <button class="fav_button" onclick="addToFavourites('${artworkId}')"><img src="./media/heart.svg"></button>`;
        if (this.userHasFav(artworkId)) {
            btnTemplate = `
            <button class="fav_button" onclick="removeFromFavourites('${artworkId}')" class="rm"><img src="./media/heart_full.svg"></button>`;
        }
        return btnTemplate;
    }

    //checking if the user has any favorite artworks
    userHasFav(favArtworkId) {
        if (welcomePage.authUser.favorites && welcomePage.authUser.favorites.includes(favArtworkId)) {
            return true;
        } else {
            return false;
        }
    }

    // adds a given artworkId to the favorites array inside _currentUser
    addToFavourites(artworkId) {
        Loader.show(true);
        welcomePage.authUserRef.set({
            favorites: firebase.firestore.FieldValue.arrayUnion(artworkId)
        }, {
            merge: true
        });
    }

    // removes a given artworkId to the favorites array inside _currentUser
    removeFromFavourites(artworkId) {
        Loader.show(true);
        welcomePage.authUserRef.update({
            favorites: firebase.firestore.FieldValue.arrayRemove(artworkId)
        });
    }

    // getting the favorite artworks
    async getFavArtworks() {
        let favorites = [];
        if (welcomePage.authUser.favorites) {
            for (let artworkId of welcomePage.authUser.favorites) {
                await this.artworkRef.doc(artworkId).get().then(function (doc) {
                    let artwork = doc.data();
                    artwork.id = doc.id;
                    favorites.push(artwork);
                });
            }
        }
        return favorites;
    }

    // appending the favorite artworks
    async appendFavArtworks() {
        let artworks = await this.getFavArtworks();
        let template = "";
        for (let artwork of artworks) {
            template += /* html */ `
            <article class="fav_artworks_profile">
              <img class="profile_fav_art" src="${artwork.image}">
              <button onclick="removeFromFavourites('${artwork.id}')" class="rm"><img src="./media/heart_delete.svg"></button>
            </article>
          `;
        }
        if (artworks.length === 0) {
            template = `
                <p>No artworks added</p>
            `;
        }
        document.querySelector('.favourite_artworks').innerHTML = template;
    }
}

const artDetailsService = new ArtDetailsService();
export default artDetailsService;