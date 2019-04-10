$("#ketchup").hide(function() {
    $(".apple").hide();
    $("#mustard").hide();
     $(".hello").hide();
      $(".sriracha").hide();
      $("p").hide();
      $(".milk").hide();
});

$("button").click(function() {
    $ ("body").css("background-color", "pink");
    $ ("#mustard").show();
    $ ("button").hide();
    $ (".clouds").show();
    
});

$("#mustard").dblclick(function() {
    $ ("#mustard").hide();
    $ (".clouds").hide();
    $ ("#ketchup").show();
    $ (".milk").show();
    
});

