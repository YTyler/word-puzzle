$(document).ready(function(){
  $(".sentence").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val().split("");
    var vowels = ["a","e",'i',"o","u", "A","E",'I',"O","U"];
    for (i = 0; i < userInput.length; i++){
      for (j = 0; j < vowels.length; j++){
        if (userInput[i] === vowels[j]) {
          userInput[i] = "-";
        }
      }
    }
    $("#output").text(userInput.join(""));
    $(".sentence").hide();
    console.log(userInput.join(""))
  });
});
