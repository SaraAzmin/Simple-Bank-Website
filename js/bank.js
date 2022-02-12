// deposit button 

document.getElementById("deposit-button").addEventListener('click', function () {

    //update deposit 
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositField.value);

    const currentDepositTotalText = document.getElementById('deposit-total');
    const currentDepositTotal = parseFloat(currentDepositTotalText.innerText);

    const newDepositTotal = currentDepositTotal + newDepositAmount;
    currentDepositTotalText.innerText = newDepositTotal;
    depositField.value = '';


    //balance update
    const currentBalanceTotalText = document.getElementById('balance-total');
    const currentBalanceTotal = parseFloat(currentBalanceTotalText.innerText);

    const newBalanceTotal = currentBalanceTotal + newDepositAmount;
    currentBalanceTotalText.innerText = newBalanceTotal;

})

//withdraw button

document.getElementById("withdraw-button").addEventListener('click', function () {

    //update withdraw
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    const currentWithdrawTotalText = document.getElementById('withdraw-total');
    const currentWithdrawTotal = parseFloat(currentWithdrawTotalText.innerText);

    const newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;
    currentWithdrawTotalText.innerText = newWithdrawTotal;
    withdrawField.value = '';


    //balance update
    const currentBalanceTotalText = document.getElementById('balance-total');
    const currentBalanceTotal = parseFloat(currentBalanceTotalText.innerText);

    const newBalanceTotal = currentBalanceTotal - newWithdrawAmount;
    currentBalanceTotalText.innerText = newBalanceTotal;

})