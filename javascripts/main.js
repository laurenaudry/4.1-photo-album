$(function(){

  var $imgHolderElement = $("[data-js='img-container']");
  var $modalElement = $("[data-js='modal']");
  var $modalImgElement = $("[data-js='modal__image']");
  var $closeElement = $("[data-js='close-modal']");

  $imgHolderElement.on("click", function(e){
    var $imageSrc = $(e.currentTarget.children[0]).attr("src");
    var $imageTitle = $(e.currentTarget.children[1]).text();
    $modalElement.toggleClass("modal__visible");
    $modalImgElement.attr("src", $imageSrc);
  });

  $closeElement.on("click", function(e){
    $("div h2").remove();
    $modalImgElement.attr("src", "");
    $modalElement.toggleClass("modal__visible");
  });

});
