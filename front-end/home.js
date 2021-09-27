const navslide=()=>{
    const mob =document.querySelector(".mob");
    const nav= document.querySelector('.nav-links');
    const navlinks=document.querySelectorAll('.nav-links li');
    mob.addEventListener('click',()=>{
        nav.classList.toggle("nav-active");


        navlinks.forEach((link,index)=>{
            if(link.style.animation)
            {
                link.style.animation="";
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s   `;
            }
         });
         mob.classList.toggle('toggle');
    });
  
}
navslide();




  next =()=>{
  
    
    
    setTimeout(function(){ window.location="/search.html"; },4000);
   
  }
