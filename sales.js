var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  if (isNaN(newItem) == true) {
    alert("Enter price as a number");
  } else {
    newItem=Number(newItem);
    runningTotal=runningTotal+newItem;
    var dollars=asCurrency(runningTotal);
    document.getElementById("subtotal").innerHTML=dollars;
    document.getElementById("price").innerHTML="";
    setCookie("preTax",runningTotal,1);
  }
}
function calculateReceipt() {
  var receiptSubtotal = getCookie("preTax");
  receiptSubtotal=Number(receiptSubtotal);
  var receiptTax=asCurrency(0.075*receiptSubtotal);
  var receiptTotal=asCurrency(receiptSubtotal+receiptTax);
  document.getElementById("sub").innerHTML=receiptSubtotal;
  document.getElementById("tax").innerHTML=receiptTax;
  document.getElementById("tot").innerHTML=receiptTotal;
  setCookie("subt",receiptSubtotal,1);
  setCookie("tx",receiptTax,1);
  setCookie("total",receiptTotal,1);
  }
//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
