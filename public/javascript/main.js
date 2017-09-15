

function wait(s){
   var start = new Date().getTime();
   var end = start;
   while(end < start + (s*1000)) {
     end = new Date().getTime();
  }
}
var profileInterval;
$(".photoimage").hover(changeProfilePhotos,stopProfilePhotos);
function changeProfilePhotos()
{
	profileInterval=setInterval(function(){
		var s=$(".photoimage").attr("src");
		var no=parseInt(s.charAt(17));
		//console.log(s.charAt(17));
		if(no===9)
		{no=1;}
		else{no=no+1}
		//var imgNo=no+1;
		s="images/headshots/"+no.toString()+".JPG"
			
		$(".photoimage").attr("src",s);
	},500);
}

function stopProfilePhotos()
{
	clearInterval(profileInterval);
$(".photoimage").attr("src","images/headshots/1.JPG");	
}

$("#aboutMe").on("click",function(){
	window.location.href="AboutMe.html";
});

function contactMe(){
	window.location.href="Contact.html";
}

function sideclick(){
	window.location.href="SmallBusiness/Shop.html";
}


$("#resume").on("click",function(){
	
	window.location.href='MaryGeorge.docx';
	
});

$("#lol").on("click",function(){
	window.location.href="Contact.html";
});

$("#projects").on("click",function(){
	window.location.href="Projects.html";
});

$("#hobby").on("click",function(){
	window.location.href="Hobbies.html";
});

$("#linkedin").on("click",function(){
	window.open("https://www.linkedin.com/in/mary-george-07312047/","_blank");
});

$("#github").on("click",function(){
	window.open("https://github.com/marygeorge","_blank");
});

$("#Me").on("click",function(){
	window.location.href="AboutMe.html";
});