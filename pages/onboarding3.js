export default class OnboardingPage3 {
    constructor() {
        this.template();
    }

    // third onboarding page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding3" class="page onboarding-page">
            <img src="./media/onboarding-3.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">PURCHASE YOUR TICKET</h3>
                <p class="onboarding_text">Do you want to skip the line? Purchasing your tickets or 
                    annual passes through our app allows you to skip the line at the ticket office 
                    and you can start exploring our exhibitions in an instant.</p>
                <div id="onboarding-nav">
                    <button class="skip_btn" onclick="navigateTo('home')">SKIP</button>
                    <div id="progress-dots">
                    <span class="dot" onclick="navigateTo('onboarding')"></span>
                    <span class="dot" onclick="navigateTo('onboarding2')"></span>
                    <span class="dot_active"></span>
                </div>
                    <img src="./media/arrow-big.svg" alt="arrow" class="onboarding_arrow" onclick="navigateTo('home')">
                </div>
            </div>
        </section>
        `;
    }
}