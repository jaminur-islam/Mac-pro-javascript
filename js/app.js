
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
