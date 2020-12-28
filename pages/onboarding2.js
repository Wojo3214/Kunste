export default class OnboardingPage2 {
    constructor() {
        this.template();
    }

    // second onboarding page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding2" class="page onboarding-page">
            <img src="./media/onboarding-2.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">DISCOVER EXHIBITIONS</h3>
                <p class="onboarding_text">The app also helps you stay up to date with the 
                    ARoS newest exhibitions and makes it easier for you to read more about
                     the different artworks.</p>
                <div id="onboarding-nav">
                    <button class="skip_btn" onclick="navigateTo('home')">SKIP</button>
                    <div id="progress-dots">
                    <span class="dot" onclick="navigateTo('onboarding')"></span>
                    <span class="dot_active"></span>
                    <span class="dot" onclick="navigateTo('onboarding3')"></span>
                </div>
                    <img src="./media/arrow-big.svg" alt="arrow" class="onboarding_arrow" onclick="navigateTo('onboarding3')">
                </div>
            </div>
        </section>
        `;
    }
}