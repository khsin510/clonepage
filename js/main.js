const user = document.getElementById("user");




const clicked = () => {
    document.querySelector("#modal").style.display="block";
}


user.addEventListener("click",clicked);


const closeModal = () =>{
    document.querySelector("#modal").style.display="none";
}