const billAmount = document.querySelector("#total_bill");
const cashGiven = document.querySelector("#cash_given");
const label_cash_given = document.querySelector('#label_cash_given')
const change_table =document.querySelector('.change-table')
const submit_button =document.getElementById('submit_button')
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const noOfNotes_td = document.querySelectorAll(".no-of-notes_td");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function opencashGiven() {
    label_cash_given.style.display = 'block'
    cashGiven.style.display = 'block'
    
}
submit_button.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    
    if (billAmount.value > 0) {
        
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            change_table.style.display = 'block'
            calculateChange(amountToBeReturned);

        } else {
            showMessage(
                "Cash provided should be greater than to the bill amount")
        }
    } else {
        showMessage("Invalid bill amount 😑");
    }
});
function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
        if (numberOfNotes > 0) {
            noOfNotes[i].style['font-size'] = '2rem'
            noOfNotes[i].style.color = 'red'
            noOfNotes_td[i].style['font-size'] = '2rem'
        }
        noOfNotes[i].setAttribute('data-value',numberOfNotes)
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
