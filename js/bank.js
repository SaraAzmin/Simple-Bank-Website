
// deposit button click event 
document.getElementById("deposit-button").addEventListener('click', function () {

    //update deposit 
    const newDepositAmount = getInputValue('deposit-input');

    const currentDepositTotalText = document.getElementById('deposit-total');
    const currentDepositTotal = parseFloat(currentDepositTotalText.innerText);

    const newDepositTotal = currentDepositTotal + newDepositAmount;
    currentDepositTotalText.innerText = newDepositTotal;


    //balance update
    const currentBalanceTotalText = document.getElementById('balance-total');
    const currentBalanceTotal = parseFloat(currentBalanceTotalText.innerText);

    const newBalanceTotal = currentBalanceTotal + newDepositAmount;
    currentBalanceTotalText.innerText = newBalanceTotal;

})

//withdraw button click event

document.getElementById("withdraw-button").addEventListener('click', function () {

    //update withdraw
    const newWithdrawAmount = getInputValue('withdraw-input');

    const currentWithdrawTotalText = document.getElementById('withdraw-total');
    const currentWithdrawTotal = parseFloat(currentWithdrawTotalText.innerText);

    const newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;
    currentWithdrawTotalText.innerText = newWithdrawTotal;


    //balance update
    const currentBalanceTotalText = document.getElementById('balance-total');
    const currentBalanceTotal = parseFloat(currentBalanceTotalText.innerText);

    const newBalanceTotal = currentBalanceTotal - newWithdrawAmount;
    currentBalanceTotalText.innerText = newBalanceTotal;

})

//fatch new deposit or withdraw amount
function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const newAmount = parseFloat(inputField.value);
    inputField.value = '';

    return newAmount;
}