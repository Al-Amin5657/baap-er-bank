document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insufficient Balance');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;




})