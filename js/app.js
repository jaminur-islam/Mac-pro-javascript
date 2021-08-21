
// extra amount update funciton
function updatePrices(configuration, extraAmount) {
  const configurationField = document.getElementById(configuration + '-extra-cost');
  configurationField.innerText = extraAmount;
  updateTotal();
};

// capture extra input and update total
function getPrices(configuration) {
  const extraPricesField = document.getElementById(configuration + '-extra-cost');
  const extraPricesText = extraPricesField.innerText;
  const extraPrice = parseInt(extraPricesText);
  return extraPrice;
}
// calculate total
function updateTotal() {
  const bestPriceField = document.getElementById('best-price');
  const bestPrice = parseInt(bestPriceField.innerText);

  const extraMemoryCost = getPrices('memory');
  const extraStorageCost = getPrices('storage');
  const extraDeliveryCost = getPrices('delivery');
  // total price
  const totalPrice = document.getElementById('total-price')
  totalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
  // promo total
  const promoTotal = document.getElementById('promo-total-price');
  promoTotal.innerText = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;

};

// add event handler on configuration button
document.getElementById('default-memory').addEventListener('click', function () {
  updatePrices('memory', 0);
});
document.getElementById('best-memory').addEventListener('click', function () {
  updatePrices('memory', 180);
});
// storage
document.getElementById('default-ssd').addEventListener('click', function () {
  updatePrices('storage', 0);
});
document.getElementById('medium-ssd').addEventListener('click', function () {
  updatePrices('storage', 100);
});
document.getElementById('best-ssd').addEventListener('click', function () {
  updatePrices('storage', 180);
});
// delivery charge
document.getElementById('free-ship-btn').addEventListener('click', function () {
  updatePrices('delivery', 0);
});
document.getElementById('charged-ship-btn').addEventListener('click', function () {
  updatePrices('delivery', 20);
});

// add event handler on promo code button
document.getElementById('promo-code-btn').addEventListener('click', function () {
  const promoTotal = document.getElementById('promo-total-price');
  const total = parseInt(promoTotal.innerText);

  // input promo and get discount
  const promoInput = document.getElementById('promo-code-input')
  const promoCode = promoInput.value;
  promoInput.value = '';
  if (promoCode == 'stevekaku') {
      promoTotal.innerText = total * (100 - 20) / 100;
  }
  else {
      alert('Please give a valid promo code')
  }
});












/* 







// All balance update funciton
function balanceUpdate(isadd, ID , num) {
  // capture extraMemoryCost
  const extraMemoriCost = document.getElementById(ID);
  let extraMemoriCostNum = parseFloat(extraMemoriCost.innerText);

  // capture total Price
  const totalPriceText = document.getElementById('total-price');
  const totalPriceNum = parseFloat(totalPriceText.innerText);

  // capture All total Price
  const alltotalText = document.getElementById('all-total');
  const alltotalNum = parseFloat(alltotalText.innerText);

   // Chech Condition
  if (extraMemoriCostNum <= 0 && isadd == true) {
    extraMemoriCostNum = extraMemoriCostNum + num;
    totalPriceText.innerText = extraMemoriCostNum + totalPriceNum;
    alltotalText.innerText = extraMemoriCostNum + totalPriceNum;

  } else if (extraMemoriCostNum > 0 && isadd == false) {
    totalPriceText.innerText = totalPriceNum - extraMemoriCostNum;
    alltotalText.innerText = totalPriceNum - extraMemoriCostNum;
    extraMemoriCostNum = extraMemoriCostNum -num ;

  }
  extraMemoriCost.innerText = extraMemoriCostNum;
}

// 16gb button addeventlistener
document.getElementById('16gb-btn').addEventListener('click', function () {
  balanceUpdate(true,'extra-memory-cost' , 180)
})

// 8gb button addeventlistener
document.getElementById('8gb-btn').addEventListener('click', function () {
  balanceUpdate(false, 'extra-memory-cost' , 180)
})


// fast delivery btn add eventlistner
document.getElementById('fast-delivery').addEventListener('click', function () {
  balanceUpdate(false, 'extra-delivery-cost' , 20)
})

// slow delivery btn add eventlistner
document.getElementById('slow-delivery').addEventListener('click', function () {
  balanceUpdate(true, 'extra-delivery-cost' , 20)
}) 


//  evenlistener 256gb storage button-1
document.getElementById('256gb-storage-btn').addEventListener('click' , function(){
  balanceUpdate(false, 'extra-storage-cost' , 100)

})

// evenlistener 512gb storage button - 2
document.getElementById('512gb-storage-btn').addEventListener('click' , function(){
  balanceUpdate(true, 'extra-storage-cost' , 100);

})


// Collecting all Customize balance
function collectingBalance(ID){
  const collectingBalanceText = document.getElementById(ID);
  const collectingBalanceNum = parseFloat(collectingBalanceText.innerText);
  return collectingBalanceNum;
}
//Update balance promoCode 20% discount 
document.getElementById('submit-btn').addEventListener('click' , function(){
  const inputValue = document.getElementById('input-field').value;
    let totalPrice = collectingBalance('total-price');
    const Alltotaltext = document.getElementById('all-total');
    let AllTotal = collectingBalance('all-total');

    const getoffer  = (totalPrice/10)*8;

  if(inputValue.toLowerCase() == 'stevekaku'.toLowerCase()){
    Alltotaltext.innerText = getoffer;
    document.getElementById('promocode-success').style.display = 'block';
  }else{
    document.getElementById('promocode-success').style.display = 'none';

  }
  document.getElementById('input-field').value = ''
})
 */