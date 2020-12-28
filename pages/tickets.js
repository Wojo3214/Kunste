export default class TicketsPage {
    constructor() {
        this.template();
    }

    //tickets page template
    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="tickets" class="page tickets-page">
                <div>

                <div id="underlay1">
                </div>
                <div id="ticket-box">
                    <img src="./media/close.svg" id="info-close" onclick="closeTicketInfo()">
                    <h2 class="info_title">Annual Passes</h2>
                    <p class="ticket_text">Enjoy unlimited free entry for ARoS. Obtain enhanced opportunities 
                    to experience art through the membership of the ARos club.</p>
                     <h2 class="info_title">ARoS27</h2>
                    <p class="ticket_text">The ARoS27 membership is for people between the age 18 and 27 - 
                    independent on whether you are a student. The membership gives you free entrance to the 
                    museum for an entire year, invitations to membership events as well as a variety of 
                    other benefits.<a href="https://www.aros.dk/da/besoeg/%C3%A5rskort/" id="info-link">Read more about ARoS27 here. </a></p>
                    <h2 class="info_title">ARoS Art Club</h2>
                    <p class="ticket_text">The ARoS Art Club membership offers you and a guest free admission to 
                    the museum for a year, invitations to private views, individual exhibitions and a list of
                    other advantages.<a href="https://www.aros.dk/da/besoeg/%C3%A5rskort/" id="info-link">Read more about ARoS Art Club here.</a></p>
                </div>   

                    <h2 class="tickets_title">TICKETS</h2>

                        <div id="ticket-types">
                        <h5 class="ticket_title">Adult<h5> 
                        <div id="ticket-amount">
                                <h5 class="ticket_price">150DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this);"><img src="./media/minus.svg" alt="minus" 
                        class="minus_btn"></button>
                        <span class="quantity_value" id="quantity">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this);"><img src="./media/plus.svg" alt="plus" 
                        class="plus_btn"></button>
                        </div>    
                        </div>  

                        <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Youth<h5> 
                              <p class="ticket_subtitle">(Under 31)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">120DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount1(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity1">0</span>
                        <button type="button" value="plus" onclick="updateAmount1(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>
                        
                        <div id="ticket-types">
                           <h5 class="ticket_title">Students<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">120DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount2(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity2">0</span>
                        <button type="button" value="plus" onclick="updateAmount2(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>  

                        <div>
                            <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Groups<h5> 
                              <p class="ticket_subtitle">(Min 20 person)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">130DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount3(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity3">0</span>
                        <button type="button" value="plus" onclick="updateAmount3(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div>
                        </div> 

                        <div>
                            <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Children<h5> 
                              <p class="ticket_subtitle">(Under 18)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">FREE<h5> 
                        <button type="button" value="minus" onclick="updateAmount4(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity4">0</span>
                        <button type="button" value="plus" onclick="updateAmount4(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>

                    </div>

                <div>
                    <div id="tickets-container">
                    <h2 class="tickets_title">ANNUAL PASSES</h2>
                    <img src="./media/question.svg" alt="question mark" class="info_btn" onclick="openTicketInfo()">
                    </div>
                    <div>
                        <div id="ticket-types">
                           <h5 class="ticket_title">ARoS27<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">200DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount5(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity5">0</span>
                        <button type="button" value="plus" onclick="updateAmount5(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>  

                        <div id="ticket-types">
                           <h5 class="ticket_title">ARoS Art Club<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">410DKK<h5> 
                                <form>
                                <button type="button" value="minus" onclick="updateAmount6(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                                <span class="quantity_value" id="quantity6">0</span>
                                <button type="button" value="plus" onclick="updateAmount6(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                                </form>
                        </div> 
                        </div>

                    </div>

                    <div id="price-total">
                    <h3 class="price_text">Total price: 0 DKK<h3>
                    <button class="checkout_btn" onclick="navigateTo('')">PROCEED TO CHECKOUT<img src="./media/arrow-big.svg" alt="arrow" class="checkout_arrow"><button>
                <div>

                </div>
                

               </section>
          `;
    }

    // increment, decrement and quantity functionality 
    updateAmount(that) {
        let number = document.getElementById('quantity');
        let num = Math.min(Math.max(parseInt(number.innerHTML), 0), 19);
        num = (that.value == "minus") ? --num : ++num;
        number.innerHTML = num;
        console.log("it works");
    }

    updateAmount1(that) {
        let number1 = document.getElementById('quantity1');
        let num1 = Math.min(Math.max(parseInt(number1.innerHTML), 0), 19);
        num1 = (that.value == "minus") ? --num1 : ++num1;
        number1.innerHTML = num1;
    }

    updateAmount2(that) {
        let number2 = document.getElementById('quantity2');
        let num2 = Math.min(Math.max(parseInt(number2.innerHTML), 0), 19);
        num2 = (that.value == "minus") ? --num2 : ++num2;
        number2.innerHTML = num2;
    }

    updateAmount3(that) {
        let number3 = document.getElementById('quantity3');
        let num3 = Math.min(Math.max(parseInt(number3.innerHTML), 0), 19);
        num3 = (that.value == "minus") ? --num3 : ++num3;
        number3.innerHTML = num3;
    }

    updateAmount4(that) {
        let number4 = document.getElementById('quantity4');
        let num4 = Math.min(Math.max(parseInt(number4.innerHTML), 0), 19);
        num4 = (that.value == "minus") ? --num4 : ++num4;
        number4.innerHTML = num4;
    }

    updateAmount5(that) {
        let number5 = document.getElementById('quantity5');
        let num5 = Math.min(Math.max(parseInt(number5.innerHTML), 0), 19);
        num5 = (that.value == "minus") ? --num5 : ++num5;
        number5.innerHTML = num5;
    }

    updateAmount6(that) {
        let number6 = document.getElementById('quantity6');
        let num6 = Math.min(Math.max(parseInt(number6.innerHTML), 0), 19);
        num6 = (that.value == "minus") ? --num6 : ++num6;
        number6.innerHTML = num6;
    }

    // Ticket info modal

    openTicketInfo() {

        document.querySelector(".tickets-page").style.overflow = "hidden";
        document.querySelector(".tickets-page").style.height = "fit-content";
        document.querySelector("#ticket-box").style.display = "flex";
        document.querySelector("#underlay1").style.display = "block";
    }

    closeTicketInfo() {
        document.querySelector(".tickets-page").style.overflow = "unset";
        document.querySelector(".tickets-page").style.height = "unset";
        document.querySelector(".tickets-page").style.opacity = "unset";
        document.querySelector("#ticket-box").style.display = "none";
        document.querySelector("#underlay1").style.display = "none";
    }


}

