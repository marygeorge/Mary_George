

$("#submitForm").on("click",function(){
  event.preventDefault();
  var nm=$("#senderName").val().trim();
  var em=$("#email").val().trim()
  var msg=$("#message").val().trim()
  if( nm!=="" && em!=="" && msg!="")
  {
    semail={
        name: nm,
        email:em,
        message:msg
      };
      console.log(semail);
      $.post("/sendmail", semail).then( function(data) {
        console.log(data);
        
      });
      $("#sendNotify").html("Got it! I'll replay in less that 24 hrs.");
      $("#sendNotify").show();
  }
  else
  {
    $("#sendNotify").html("Have a question in mind? Enter your name, email and that question so i can get back to you.")
    $("#sendNotify").show();
  }
});

function copyToClipboard()
{
  event.preventDefault();
   var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("emailtxt").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  $('#copyemail').animate({'opacity': 0}, 250, function(){
      $(this).html('Copied').animate({'opacity': .5}, 250);
      $(this).animate({'opacity': 0}, 250, function(){
        $(this).html('Copy email').animate({'opacity': 1}, 250);
      });
    });
   
}

