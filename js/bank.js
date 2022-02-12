// deposit button click event 
document.getElementById("deposit-button").addEventListener('click', function () {
    //update deposit 
    const newDepositAmount = getInputValue('deposit-input');

    if (newDepositAmount >= 0) {
        updateTotalAmount('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, 'deposit');
    }
})

//withdraw button click event
document.getElementById("withdraw-button").addEventListener('click', function () {
    //update withdraw
    const newWithdrawAmount = getInputValue('withdraw-input');

    if (newWithdrawAmount >= 0) {
        updateTotalAmount('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, 'withdraw');
    }
})

//fatch new deposit or withdraw amount
function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const newAmount = parseFloat(inputField.value);
    inputField.value = '';
    return newAmount;
}

//calculate total amount
function updateTotalAmount(totalFieldId, newAmount) {

    const currentTotalText = document.getElementById(totalFieldId);
    const currentTotal = parseFloat(currentTotalText.innerText);
    const newTotal = currentTotal + newAmount;
    currentTotalText.innerText = newTotal;
}

//update balance after transection
function updateBalance(amount, transectionType) {

    let newBalanceTotal = 0;
    const currentBalanceTotalText = document.getElementById('balance-total');
    const currentBalanceTotal = parseFloat(currentBalanceTotalText.innerText);

    if (transectionType == 'deposit') {
        newBalanceTotal = currentBalanceTotal + amount;
    }
    else if (transectionType == 'withdraw') {
        newBalanceTotal = currentBalanceTotal - amount;
    }
    currentBalanceTotalText.innerText = newBalanceTotal;
}