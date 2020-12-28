import {
     firebaseDB
} from "../js/firebase_config.js";

let exhibitionsData = [];

export default class Exhibitions {
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

     // exhibitions page template
     template() {
          document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibitions" class="page">
                    <div id="search-container">
                         <img src="./media/search_icon.svg" id="search-icon" alt="search icon" onclick="openSearch()">
                         <input type="search" placeholder="Search..." onkeyup="search(this.value)" class="search-bar">   
                         <img src="./media/close_button.png" id="close-button" alt=" close button" onclick="closeSearch()">
                    </div>
               <div id="exhibitions-container">

                </div>    
               </section>
          `;
     }

     // appending the exhibitions in the template
     appendExhibitions(exhibitions) {
          let template = "";
          for (let exhibition of exhibitions) {
               template += /*html*/ `
          <article class="exhibition-item" onclick="selectExhibition('${exhibition.name}', '${exhibition.image}', '${exhibition.floor}', '${exhibition.description}')">
               <div class="image-container">
                    <img src="${exhibition.image}" alt="exhibition" class="exhibition-image">
               </div>
               <div class="dark-overlay"></div>
               <div class="exhibition-details-container">
                    <h1 class="exhibition-name">${exhibition.name}</h1>
                    <div class="date-arrow-container">
                    <p class="exhibition-date">Exhibition end: ${exhibition.date}</p>
                    <img src="./media/arrow.svg" alt="arrow" id="arrow">
                    </div>
               </div>
          </article>
          `;
          }
           document.querySelector("#exhibitions-container").innerHTML = template;
     }  

     // search functionality
     search(value) {
          let searchValue = value.toLowerCase();
          let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.name.toLowerCase().includes(searchValue));
          this.appendExhibitions(filteredExhibitions);

          if(filteredExhibitions.length === 0){
               this.noResults();
          }
     }
     
     // the message that appears if there are no results for the search
      noResults() {

          let template = `
               <p class="no-results-info">Sorry but we couldn't find this for you!</p>
          `;
          document.querySelector("#exhibitions-container").innerHTML = template;
     }

     // animation for opening the search bar
     openSearch() {
          let searchIcon = document.querySelector("#search-icon");
          let searchBar = document.querySelector(".search-bar");
          let closeButton = document.querySelector("#close-button");
          closeButton.style.opacity = "1";
          searchIcon.style.opacity = "0";
          searchBar.classList.add("active");
     }

     // animation for closing the search bar
     closeSearch() {
          let searchIcon = document.querySelector("#search-icon");
          let searchBar = document.querySelector(".search-bar");
          let closeButton = document.querySelector("#close-button");
          closeButton.style.opacity = "0";
          searchIcon.style.opacity = "1";
          searchBar.classList.remove("active");
     }

}




