var container = document.getElementById("container");

var btns = document.querySelectorAll(".btns");

fetch("data.json/data_arabic.json").then(response => response.json()).then(data => {

    for (var i = 0; i < data.length; i++) {

        container.innerHTML += `


    <div class="col mb-5">
    <span class="country hide">${data[i].country}</span>
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem; z-index:1;">${data[i].sale}</div>
            <!-- Product image-->
            

            <div id="carouselExampleControls${i}" class="carousel " data-ride="carousel" data-interval="0">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${data[i].img1}" class="d-block w-100 heightImg" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${data[i].img2}" class="d-block w-100 heightImg" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${data[i].img3}" class="d-block w-100 heightImg" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${data[i].img4}" class="d-block w-100 heightImg" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${data[i].img5}" class="d-block w-100 heightImg" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls${i}" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls${i}" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
             
            </a>
          </div>

            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center" >
                    <!-- Product name-->
                    <h5 class="fw-bolder">${data[i].title}</h5>
                 
                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        ${data[i].stars}
                    </div>
                    <!-- Product price-->
                    <div class="kolprice" dir="rtl">
                    <span class="text-muted text-decoration-line-through">${data[i].oldPrice1}</span>
                   <span>$</span><span class="priceproduct">${data[i].amountprice}</span>
                   </div>
                </div>
            </div>
            <!-- Product actions-->
            <div class="flag"><img width="50px" height="30px" src="${data[i].flag}"></div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center btns" id="${data[i].id}" ><a class="btn btn-outline-dark mt-auto " href="#">تفاصيل</a></div>
            </div>
        </div>
    </div>`


    }

// loop for check price in front of page

var priceproduct = document.querySelectorAll(".priceproduct");
var kolprice = document.querySelectorAll(".kolprice");
for (var i = 0; i < priceproduct.length; i++) {
  if (priceproduct[i].innerHTML >= 120){
    kolprice[i].style.backgroundColor ="#ff0000a1"
    kolprice[i].style.borderRadius = "10px"
    kolprice[i].innerHTML += "<i class='fas fa-hand-holding-usd'></i>"
  } else if (priceproduct[i].innerHTML >= 90){
    kolprice[i].style.backgroundColor ="#dccb35b3"
    kolprice[i].style.borderRadius = "10px"
    kolprice[i].innerHTML += "<i class='fas fa-star-half-alt'></i>"
  } else {
    kolprice[i].style.backgroundColor ="#008000bd"
    kolprice[i].style.borderRadius = "10px"
    kolprice[i].innerHTML += "👌"
  }
}







    var detailsSection = document.getElementById("detailsSection");
    var searchDiv = document.getElementById("searchDiv")

    for (var q = 0; q < document.querySelectorAll(".btns").length; q++) {
        document.querySelectorAll(".btns")[q].onclick = function () {
            container.classList.add("hide");
            detailsSection.classList.remove("hide");
            searchDiv.style.display = "none";

            detailsSection.innerHTML = `
      
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">



                <div id="carouselExampleControls" class="carousel" data-ride="carousel" data-interval="0">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${data[this.id].img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data[this.id].img2}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data[this.id].img3}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data[this.id].img4}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data[this.id].img5}" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>

  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  
  </a>
</div>


                
                
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="small mb-1" >SKU: BST-498</div>
                    <h1 class="display-5 fw-bolder" id="placeNameChosen">${data[this.id].title}</h1>
                    <div class="fw-bolder d-flex justify-content-end stars-color">${data[this.id].stars}</div>
                    <div class="fs-5 mb-5">
                        <span class="text-decoration-line-through">${data[this.id].oldPrice1}</span>
                       <span>$<span id="priceID">${data[this.id].amountprice} </span><span id="infoChildPrice"><abbr title="سعر الأطفال: هذا السعر للأطفال دون سن 6 سنوات $${data[this.id].childPrice} لكل طفل"><i class="fas fa-info-circle"></i></abbr></span><span class="hide" id="hidePriceForChild">${data[this.id].childPrice}</span>
                    </div>
                    <p class="lead" >${data[this.id].detail}</p>
                    <div class="d-flex justify-content-end">
                    <a href="index_arabic.html">
                     <button class="btn btn-outline-dark flex-shrink-0 " type="button">
                            الرجوع الى الصفحه الرئيسه
                            <i class="bi bi-house-door-fill"></i>
                        </button>
                        </a>
                        <button class="btn btn-outline-dark flex-shrink-0 marginLeft" type="button"  onclick="goToCheckOut(${data[this.id].childPrice})">                    
                            حجز
                            <i class="fas fa-concierge-bell"></i>
                        </button>
                        
                    </div>
                </div>
            </div>
        `
            
        }



    }






})


var checkOutList = document.getElementById("checkOutList");

function goToCheckOut(x){
  var childPriceId = document.getElementById("childPriceId");
  var placeName = document.getElementById("placeName");
  var placeNameChosen = document.getElementById("placeNameChosen");
  var priceID = document.getElementById("priceID");
  var pricePerPerson = document.getElementById("pricePerPerson");

    detailsSection.classList.add("hide")
    checkOutList.classList.remove("hide");
    placeName.innerHTML = placeNameChosen.innerHTML;
    pricePerPerson.innerHTML = priceID.innerHTML;
    childPriceId.innerHTML = `الأطفال <span id="infoChildPrice"><abbr title="سعر الأطفال: هذا السعر للأطفال دون سن 6 سنوات $${x} لكل طفل"><i class="fas fa-info-circle"></i></abbr></span>`
}



var priceForTotalAdults = document.getElementById("priceForTotalAdults");
function numberOfAdults1(val){
  var priceID = document.getElementById("priceID");

  var howManyPersons = document.getElementById("howManyPersons");
  priceForTotalAdults.innerHTML = Number(priceID.innerHTML) * val;
  howManyPersons.innerHTML = val;

  plusplus();
}


var priceForTotalChildren = document.getElementById("priceForTotalChildren");
function numberOfChildren1(val){
  var operationForChildren = document.getElementById("operationForChildren");
  operationForChildren.classList.remove("hide")

  var hidePriceForChild = document.getElementById("hidePriceForChild");
  var pricePerChild = document.getElementById("pricePerChild");

  pricePerChild.innerHTML = hidePriceForChild.innerHTML;
  howManyChildren.innerHTML = val;
  priceForTotalChildren.innerHTML = Number(hidePriceForChild.innerHTML) * val;
  plusplus();

}


function checkForRedeem(){
 

var inputFordiscountCode = document.getElementById("inputFordiscountCode");
var discountprice = document.getElementById("discount");
if (inputFordiscountCode.value === "xteam1"){
  discountprice.innerHTML = 10;
  
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice  - Number(discountprice.innerHTML)
}else if (inputFordiscountCode.value === "xteam2"){
  discountprice.innerHTML = 20;
  
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice  - Number(discountprice.innerHTML)
} else if (inputFordiscountCode.value === "xteam3"){
  discountprice.innerHTML = 30;
  
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice  - Number(discountprice.innerHTML)
} else if (inputFordiscountCode.value === "xteam4"){
  discountprice.innerHTML = 40;
  
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice  - Number(discountprice.innerHTML)
} else if (inputFordiscountCode.value === "xteam5"){
  discountprice.innerHTML = 50;
  
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice  - Number(discountprice.innerHTML)
} else if (inputFordiscountCode.value === "xteam6"){
  discountprice.innerHTML = 60;
  
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice  - Number(discountprice.innerHTML)
}

return false; // معلومه مهمه اذا كان السكرول يصعد الى الاعلى فبهذا الكود بامكانك الغاء السكرولينج
}


function plusplus(){
  var totalprice = document.getElementById("totalprice");
  var totaladultsAndChildrenPrice = Number(priceForTotalAdults.innerHTML) + Number(priceForTotalChildren.innerHTML);

  totalprice.innerHTML = totaladultsAndChildrenPrice;

}






// datum check-in
function checkInDatumselect(){
  var checkInDatum = document.getElementById("checkInDatum");
  var checkInList = document.getElementById("checkInList");
  checkInList.innerHTML = checkInDatum.value;
}


//datum check-out
function checkOutFunction(){
  document.getElementById("checkoutdatum").innerHTML = document.getElementById("outCheckdate").value;
 

}



// payment function
function checkedfunc(){

  var debit = document.getElementById("debit");
  var paypal = document.getElementById("paypal")
  var CVVSection = document.getElementById("CVVSection");
  var expirationSection = document.getElementById("expirationSection");
  var cc_name = document.getElementById("cc-name");
  var cc_number = document.getElementById("cc-number");

  var descriptiontxt = document.getElementById("descriptiontxt");
  
  if(debit.checked == true){
    cc_number.value ="";
    cc_name.value ="";
    cc_number.setAttribute("type","text");
    CVVSection.style.display = "none";
    expirationSection.style.display = "none";
    cc_name.innerHTML = "الأسم على الكارد";
    cc_number.previousElementSibling.innerHTML = "Debit card number - رقم الكارد البنكي";
    descriptiontxt.innerHTML = "ملئ الأسم كما هو مكتوب على الكارت البنكي";
  } else if(paypal.checked == true){
    cc_number.value ="";
    cc_name.value ="";
    cc_number.setAttribute("type","password");
    CVVSection.style.display = "none";
    expirationSection.style.display = "none";
    cc_name.innerHTML = "PayPal Account - حساب البي بال";
    cc_number.previousElementSibling.innerHTML = "كلمة السر";
    descriptiontxt.innerHTML = "Put your PayPal Account - ضع حساب البي بال الخاص بك";
  } else {
    cc_number.value ="";
    cc_name.value ="";
    CVVSection.style.display = "";
    expirationSection.style.display = "";
    cc_number.setAttribute("type","text");
    cc_name.innerHTML = "الأسم على الكارد";
    cc_number.previousElementSibling.innerHTML = "Debit card number - رقم الكارد البنكي";
    descriptiontxt.innerHTML = "ملئ الأسم كما هو مكتوب على الكارت البنكي";
  }
  
}

  


// check Out Button action

var checkOutbtn = document.getElementById("checkOutbtn");

checkOutbtn.addEventListener("click", (e) =>{
  e.preventDefault()
    var firstName = document.getElementById("firstName");
    // var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var telephone = document.getElementById("telephone");
    var address = document.getElementById("address");
    var numberOfAdults11 = document.querySelector(".numberOfAdults11");
    var checkInDatum = document.getElementById("checkInDatum");
    var outCheckdate = document.getElementById("outCheckdate");
   

    var credit1 = document.getElementById("credit");
    var debit1 = document.getElementById("debit");
    var paypal1 = document.getElementById("paypal");

    var cc_nameOne = document.getElementById("cc-nameOne");
    var cc_number1 = document.getElementById("cc-number");
    var cc_expiration = document.getElementById("cc-expiration");
    var cc_cvv = document.getElementById("cc-cvv");

    var error = document.getElementById("error");

    if(firstName.value.length < 5){ 
     error.innerHTML = "الأسم الأول غير صالح"
    } else if(email.value.length <= 5 || email.value.indexOf("@") == -1){
      error.innerHTML = "البريد الألكتروني غير صالح"
    } else if(isNaN(telephone.value) || telephone.value.length != 10){
      error.innerHTML = "رقم الهاتف غير صالح"
    } else if(address.value.length < 7){
      error.innerHTML = "العنوان غير صالح"
    } else if(numberOfAdults11.value == 0){
      error.innerHTML = "يجب اختيار عدد البالغين";
    } else if(checkInDatum.value == 0){
      error.innerHTML = "يجب اختيار تاريخ الوصل";
    } else if(outCheckdate.value == 0){
      error.innerHTML = "يجب اختيار تاريخ المغادره";
    } else if(credit1.checked == true){
      if(cc_nameOne.value === "" || cc_number1.value === "" || cc_expiration.value === "" || cc_cvv.value === ""){
        error.innerHTML = "يجب ملئ جميع حقول الخاصه بالطريقه الدفع"
      } else{
        window.location.href = "thankyou_arabic.html"
      }
      
    }else if(debit1.checked == true){
        if(cc_nameOne.value === "" || cc_number1.value === ""){
          error.innerHTML = "يجب ملئ جميع حقول الخاصه بالطريقه الدفع"
        } else {
          window.location.href = "thankyou_arabic.html"
        }
      }
        else if(paypal1.checked == true){
      if(cc_nameOne.value === "" || cc_number1.value === ""){
        error.innerHTML = "يجب ملئ جميع حقول الخاصه بالطريقه الدفع"
      } else {
        window.location.href = "thankyou_arabic.html"
      }
    } 
  
  
})




// search field

var searchfield = document.getElementById("searchfield");

searchfield.addEventListener("keyup", () =>{

var country = document.querySelectorAll(".country");

for (i = 0; i < country.length; i++) {

  if(searchfield.value == ""){

    country[i].parentElement.style.display = "block";

  } else if(country[i].textContent.toUpperCase().startsWith(searchfield.value.toUpperCase()) == false) {

    country[i].parentElement.style.display = "none";

  } else {
    
    country[i].parentElement.style.display = "block";

  }
}
})