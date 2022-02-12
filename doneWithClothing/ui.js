const body = document.querySelector('body')



function setTheme(){
    if(body.style.backgroundColor == 'white'){
        body.style.backgroundColor = 'black'
        return;
    }else{
        body.style.backgroundColor = 'white'
    }
}


