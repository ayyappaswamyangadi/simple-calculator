let screen = document.getElementById("input")
let buttons = document.querySelectorAll('button')

// for(item of buttons){
//     item.addEventListener('click', (e) =>{
//         let buttonText = e.target.innerText;
//         // let screenValue = '';
//         screenValue = buttonText
//         screen.value += screenValue
//         console.log(buttonText)
//         // let screenValue = buttonText
//         // screen.value += screenValue
//         if(buttonText == '='){
//             screenValue = eval(screen.value)
//             screen.value = screenValue
//         }

//     })
// }
for(item of buttons){
item.addEventListener('click', function(num){
    buttonText = num.target.innerText
    console.log(buttonText)
    
    if(buttonText != '=' && buttonText != 'C' && buttonText != 'CE' && buttonText !='Del' ){
        // let screenValue = buttonText
        buttonValue = num.target.innerText
        screen.value += buttonValue;
    }

    else if(buttonText == 'Del'){
        screen.value = (screen.value).slice(0,-1);
    }

    else if(buttonText == '='){
        screen.value = eval(screen.value)
    }

    else {
        screen.value = ' ';
    }
        
})
}