$(document).ready(function(){
  //Reading the Enter key in the input field
  $(".textfield").keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('.search').click();
  }
}); 
  //Reading the click event 
  $(".search").on("click", function(){
    var text = $('.textfield').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+text+"&format=json&callback=?";
  $.getJSON(url,function(json){
    var j=0;
    $(".result").html("");
    //As long as there is a title
      while(j<json[1].length){
        //prints the title data
    $(".result").append("<a class='fetched' href = "+json[3][j]+" target='blank'>"+json[1][j]+": "+json[2][j]+"</a>");
        j++;
      }
  
  });
  });
});