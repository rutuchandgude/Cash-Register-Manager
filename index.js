const billAmt = document.querySelector("#bill-amount");
const csshGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfnotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 2, 1]; 

checkButton.addEventListener("click", function validateBillAmtAndCashAmount(){
   hideMessage();
        if(billAmt.value > 0) {
            if(csshGiven.value >= billAmt.value){
                    const amountToBeReturned = csshGiven.value - billAmt.value;
                    calculateChange(amountToBeReturned);
                }
            else{
                showMessage("Do You Wanna WASH plates!!!");
            }
        } else {
            showMessage("Invalid Bill-Amount");
        }
});

function calculateChange(amountToBeReturned){
    for(let i = 0; i <= availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
            );
        amountToBeReturned %= availableNotes[i];
        noOfnotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display ="none";
}

function showMessage(msg){
    console.log("here");
    message.style.display ="block";
    message.innerText = msg;

}