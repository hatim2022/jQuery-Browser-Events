$(document).ready(function () {
    $("#akronInfoDiv").hide();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").hide();
});

$("#mainButton").click(function(){
    $("#akronInfoDiv").hide();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").hide();
    $("#mainInfoDiv").show();
  });

  $("#akronButton").click(function(){
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").hide();
    $("#mainInfoDiv").hide();
    $("#akronInfoDiv").show();
  });

  $("#minneapolisButton").click(function(){
    $("#louisvilleInfoDiv").hide();
    $("#mainInfoDiv").hide();
    $("#akronInfoDiv").hide();
    $("#minneapolisInfoDiv").show();
  });

  $("#louisvilleButton").click(function(){
    $("#mainInfoDiv").hide();
    $("#akronInfoDiv").hide();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").show();
  });

  $("#akronWeatherButton").click(function(){
    $('#akronWeather').toggle('slow');
  });
  $("#minneapolisWeatherButton").click(function(){
    $('#minneapolisWeather').toggle('slow');
  });
  $("#louisvilleWeatherButton").click(function(){
    $('#louisvilleWeather').toggle('slow');
  });

  
  


  $("td").hover( 
function() {
    $("td").css("background-color","WhiteSmoke");
  },
function() {
    $("td").css("background-color","white");
}  
  
  );