const btn = document.querySelector('.btn-toggle');
const text = document.querySelector('.text-toggle');

btn.onclick = () =>{
    text.classList.toggle('none');
    if(text.classList.contains('none')){
        btn.textContent = 'Learn More'
    }else{
        btn.textContent = 'Hide'  
    }
}