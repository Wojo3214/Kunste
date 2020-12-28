class Loader {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <div id="loader">
        <div class="dot-container">
          <div class="loader-dot dot1"></div>
          <div class="loader-dot dot2"></div>
          <div class="loader-dot dot3"></div>
        </div>
      </div>
    `;
  }

  show(show) {
    let loader = document.getElementById('loader');
    if (show) {
      loader.classList.remove("hide");
    } else {
      loader.classList.add("hide");
    }
  }

}

const loader = new Loader();
export default loader;