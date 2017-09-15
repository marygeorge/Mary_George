

$("#submitForm").on("click",function(){
// setTimeout(function() {
  semail={
      name: $("#senderName").val().trim(),
      email:$("#email").val().trim(),
      message:$("#message").val().trim()
    };
    console.log(semail);
    $.post("/sendmail", semail, function() {
      console.log("mailsend");
    });

  // }, 320);
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

