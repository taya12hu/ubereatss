

function myfunction() {
    var x = document.getElementById('js2');
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function hamopen(){

    var x=document.getElementById('hamburgerdropdown');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.addEventListener('scroll',()=>{
    const header=document.querySelector('navbar');

    if(window.scrollY>0){
        header.classList.add('scrolled')
        else{
            header.classList.remove('scrolled');
        }
    }
})