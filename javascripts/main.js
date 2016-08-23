$(function() {


  var $photoList = $("[data-js='photo_list']");
  var $lateElement = $("[data-js='modal-late']");
  var $teaElement = $("[data-js='modal-tea']");
  var $gladiatorElement =  $("[data-js='modal-gladiator']");
  var $backButton = $("[data-js='back_button']");


var modal = document.getElementsByClassName('modal')
var $btn = $("[data-js='myBtn']");
var $span = $("[data-js='close']")[0];

$btn.onclick = function() {
    modal.style.display = "block";
}

$span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});
