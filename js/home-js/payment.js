const container = document.querySelector('.payment-method-payoneer');
const frontImage = document.querySelector('.front-animation');
const backImage = document.querySelector('.back-animation');

function rotateBackImage() {
    backImage.style.transform = 'rotate(45deg)';
    setTimeout(() => {
        backImage.style.transform = 'rotate(0deg)';
        rotateFrontImage();
    }, 1000);
}

function rotateFrontImage() {
    frontImage.style.transform = 'rotate(15deg)';
    setTimeout(() => {
        frontImage.style.transform = 'rotate(0deg)';
    }, 1000);
}

setInterval(() => {
    rotateBackImage();
}, 2000);


function openPaymentSuccess() {
    $(".payment-success").addClass("active");
    $("body").addClass("stop-scrolling");
  }

  //Payment Success popup
function closePaymentSuccess() {
    $(".payment-success").removeClass("active");
    $("body").removeClass("stop-scrolling");
  }