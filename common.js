// calculate 
//caculate subTotal
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-price')
    const currentCaseTotal = getTextElementValueById('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
   

    // calculte Tax 
    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    const taxAmountNum = parseFloat(taxAmount);
    setTextElementValueById('tax-amount', taxAmountNum);

    const finalAmount = currentSubTotal + taxAmountNum;
    setTextElementValueById('final-total', finalAmount);
}

// Total Product Price
function getTextElementValueById(elementId) {
    const itemTotalPrice = document.getElementById(elementId);
    const itemTotalPriceString = itemTotalPrice.innerText;
    const itemTotalPriceNum = parseInt(itemTotalPriceString);
    return itemTotalPriceNum;
    // const updateTotalPrice = totalPriceNum + casePrice;
    // console.log(updateTotalPrice)
    // totalPrice.innerText = updateTotalPrice;
}

// set Text element value by id
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}