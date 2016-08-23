$(function() {

  var albumOne = [
   {
     title: "Late",
     src: "assets/late.jpeg"
   },
   {
     title: "Tea",
     src: "assets/tea.jpeg"
   },
   {
     title: "Gladiator",
     src: "assets/gladiator.jpeg"
   }
 ]

  var $photoList = $("[data-js='photo_list']");
  var $lateElement = $("[data-js='modal-late']");
  var $teaElement = $("[data-js='modal-tea']");
  var $gladiatorElement =  $("[data-js='modal-gladiator']");
  var $backButton = $("[data-js='back_button']");

  albumOne.forEach(function(image){
     var imageContainer = $(`<li class= 'image-container'>${image.title}</li>`);

     var newImage = $("<img class='image'>").attr("src",image.src);

     imageContainer.append(newImage);

     $photoList.append(imageContainer);
  });

  $photoList.on("click", "li:first-child", function(){
    $lateElement.show("modal-hideLate")
  })

  $photoList.on("click", "li:nth-child(2)", function(){
    $teaElement.show("modal-hideTea")
  })

  $photoList.on("click", "li:nth-child(3)", function(){
    $gladiatorElement.show("modal-hideGladiator")
  })

  $backButton.on("click", function(){
    $lateElement.show("modal-hideLate")
  })

  $backButton.on("click", function(){
    $teaElement.hide("modal-hideTea")
  })

  $backButton.on("click", function(){
    $gladiatorElement.hide("modal-hideGladiator")
  })


});
