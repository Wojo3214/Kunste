export default class OnboardingPage {
    constructor() {
        this.template();
    }

    // first onboarding page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding" class="page onboarding-page">
            <img src="./media/onboarding.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">EXPLORE KüNSTE</h3>
                <p class="onboarding_text">The KüNSTE app easily allows you to browse
                    through the exhibitions that can be found in the museum and with the
                    help of our museum map you are able to locate a given exhibitions
                    within minutes.</p>
                <div id="onboarding-nav">
                    <button class="skip_btn" onclick="navigateTo('home')">SKIP</button>
                    <div id="progress-dots">
                    <span class="dot_active"></span>
                    <span class="dot" onclick="navigateTo('onboarding2')"></span>
                    <span class="dot" onclick="navigateTo('onboarding3')"></span>
                </div>
                    <img src="./media/arrow-big.svg" alt="arrow" class="onboarding_arrow" onclick="navigateTo('onboarding2')">
                </div>
            </div>
        </section>
        `;
    }
}

