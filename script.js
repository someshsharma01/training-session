let button = document.querySelector(".btn");
let savedTheme = localStorage.getItem("theme");

if(savedTheme){
    document.body.classList.add(savedTheme);
}
else{
    document.body.classList.add("dark");
}

button.addEventListener("click",function(dets){
    if(document.body.classList.contains("light")){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
    else{
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme","light");
    }
});
