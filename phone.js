// Add even DECREASE button handler 
document.getElementById('btn-increase-phone').addEventListener('click', ()=> {
    const itemCountNum = getItemCount(true)
    updateTotalPrice(itemCountNum);
    calculateSubTotal()
   
})

// Add even INCREASE button handler
document.getElementById('btn-decrease-phone').addEventListener('click', ()=> {
    const itemCountNum = getItemCount(false)
    updateTotalPrice(itemCountNum);
    calculateSubTotal()
})

// Get Input Field Number
function getItemCount(isIncrease) {
    const itemCount = document.getElementById('item-phone');
    const itemCountString = itemCount.value;
    const itemCountNum = parseInt(itemCountString);
    let newItemCountNum;
    if(isIncrease){
            newItemCountNum = itemCountNum + 1;
        }else{
            newItemCountNum = itemCountNum - 1;
        }
        itemCount.value = newItemCountNum;
        return newItemCountNum;
}

// Update Phone Price
function updateTotalPrice(itemCountNum) {
    const phoneTotal = itemCountNum * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneTotal;
}

