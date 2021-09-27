const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


next =()=>{
  
  window.location="/home.html";
  document.write("your form successfully submitted....<br>  please wait..<br> Redirecting to Destination page");
  setTimeout('next()',3000);
 
}