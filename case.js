// Add even listener Increase button 
document.getElementById('btn-increase-case').addEventListener('click', ()=>{
    const itemCaseCount = getCaseNumber(true);
    updateCasePrice(itemCaseCount);
    calculateSubTotal()
})


// Add even listener Decrease button 
document.getElementById('btn-decrease-case').addEventListener('click', ()=>{
    const itemCaseCount = getCaseNumber(false);
    updateCasePrice(itemCaseCount);
    calculateSubTotal()
})


// Get Case Price
function getCaseNumber(isIncrease) {
    const caseCount = document.getElementById('item-case');
    const caseCountString = caseCount.value;
    const caseCountNum = parseInt(caseCountString);
    let newCaseCountNum;
    if (isIncrease){
        newCaseCountNum = caseCountNum + 1;
    }else {
        newCaseCountNum = caseCountNum - 1;
    }
    caseCount.value = newCaseCountNum;
    return newCaseCountNum;
}


//Update Case Price
function updateCasePrice(itemCaseCount) {
    const casePrice = document.getElementById('case-price');
    const casePriceTotal = itemCaseCount * 59;
    casePrice.innerText = casePriceTotal;
}

