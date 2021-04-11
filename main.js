 var pic_array = ["familypage.jpg","dad.jpg","mom.jpg","son.jpg","sis.jpg","grandparents.jpg","cartoon-dog-names.jpg"];
 var name_array = ["My family","Chandu Indrakanti","Padmavati kalluri","Satvik Datta(me)","Raaga Eshwara","grandmom,Granddad(maternal,paternal)","lucky(my dog)"]
 var i=0;
 function nextslide(){
 document.getElementById("name_array").innerHTML=name[i];
 document.getElementById("pic_array").src=picture[i];
 i++;
 }