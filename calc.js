let screen=document.getElementById('screen');
let screenValue="";
let buttons=document.querySelectorAll('button');
for (button of buttons){
    button.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        try{
        if(buttonText=='X'){
            buttonText='*'
            screenValue+=buttonText;
            screen.value=screenValue;

        }else if(buttonText=="="){
            screen.value=eval(screenValue);

        }else if(buttonText=="C"){
            screenValue="";
            screen.value=screenValue;

        }else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    }catch(err){
        alert("Invalid input");
        screenValue="";
        screen.value=screenValue;
    }

    })
}