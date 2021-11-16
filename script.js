var intialPrice=document.querySelector("#intial-price");
var numberOfStocks=document.querySelector("#number-stock");
var currentPrice=document.querySelector("#current-price");
var tellMeBtn=document.querySelector("#tell-me");
var resultText=document.querySelector("#output-text");

tellMeBtn.addEventListener("click",clickHandler);

function clickHandler(){
  let firstPrice=intialPrice.value;
  let stockNumber=numberOfStocks.value;
  let latestPrice=currentPrice.value;
  calculateProfitOrLoss(firstPrice,stockNumber,latestPrice);
}
function calculateProfitOrLoss(intial,quantity,current){
  if(intial>current){
    let lossAmount=(intial-current)*quantity;
    let lossAmountPercentage=(lossAmount/(intial*quantity))*100;

    resultText.style.color="red";
    resultText.innerHTML=`Yay!! Your loss is : ${lossAmount.toFixed(2)} and loss Percentage is: ${lossAmountPercentage.toFixed(2)}%`;
  }
  else if(intial<current){
    let gainAmount=(current-intial)*quantity;
    let gainAmountPercentage=(gainAmount/(intial*quantity))*100;
    resultText.style.color="green";
    resultText.innerHTML=`Yay!! Your profit is : ${gainAmount.toFixed(2)} and profit Percentage is: ${gainAmountPercentage.toFixed(2)}%`;

  }
  else{
    resultText.style.color="yellow"
    resultText.innerText= `No pain No gain, and no gain no pain :)`;
  }
}