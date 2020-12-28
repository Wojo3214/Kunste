class SpaService {
  constructor() {
    this.defaultPage = "home";
  }

  init() {
    this.page = document.querySelectorAll(".page");
    this.pageChange();
  }

  // Hide all pages
  hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
      page.style.display = "none";
    }
  }

  // Show page or tab
  showPage(pageId) {
    this.hideAllPages();
    if (pageId == "home") {
      document.querySelector(`#${pageId}`).style.display = "flex";
      this.hideNavIcon(false);
    } else if (pageId == "login") {
      document.querySelector(`#${pageId}`).style.display = "flex";
      this.hideNavIcon(true);
    } else if (pageId == "start") {
      document.querySelector(`#${pageId}`).style.display = "flex";
      this.hideNavIcon(true);
    } else if (pageId == "signup") {
      document.querySelector(`#${pageId}`).style.display = "flex";
      this.hideNavIcon(true);
    } else if (pageId == "your-card") {
      document.querySelector(`#${pageId}`).style.display = "flex";
      this.hideNavIcon(true);
    } else if (pageId == "your-card-presentation") {
      document.querySelector(`#${pageId}`).style.display = "flex";
      this.hideNavIcon(true);
    } else if (pageId == "onboarding") {
      document.querySelector(`#${pageId}`).style.display = "block";
      this.hideNavIcon(true);
    } else if (pageId == "onboarding2") {
      document.querySelector(`#${pageId}`).style.display = "block";
      this.hideNavIcon(true);
    } else if (pageId == "onboarding3") {
      document.querySelector(`#${pageId}`).style.display = "block";
      this.hideNavIcon(true);
    } else {
      document.querySelector(`#${pageId}`).style.display = "block";
      this.hideNavIcon(false);
    }

  }

  hideNavIcon(hide){
    if(hide){
      console.log("hiden nav");
      document.querySelector(".nav-btn").style.display = "none";
    } else {
      document.querySelector(".nav-btn").style.display = "block";

    }
  }

  // navigate to a new view/page by changing href
  navigateTo(pageId) {
    window.location.href = `#${pageId}`;
  }

  //Change the page
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    this.showPage(page);
    let navContainer = document.querySelector(".nav-container");
    navContainer.style.display = "none";
  }
}

const spaService = new SpaService();
export default spaService;