const API_URL="http://localhost:3000/api/post";
const API_BASE_URL="http://localhost:3000";



window.onload = () =>{
    getpost();
}


const getpost =()=>{
    fetch(API_URL, {
        method: 'GET'
    }).then((Response)=>{
        return Response.json();
    }).then((data)=>{
        bulidpost(data);
    })
}




bulidpost =(data)=>{
    console.log(data);

}

next =()=>{
  
    window.location="/demo.html";
   
   
}