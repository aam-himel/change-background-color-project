// DOM selection
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const displayText = document.querySelector('h2');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target);
        // Creating element and node for display text
        const textString = `BG Changed to ${e.target.id}!`;
        console.log(textString);

        if(e.target.id === 'white' ){
            body.style.color = 'black';
            body.style.backgroundColor = 'white';
            displayText.innerText = textString
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red';
            displayText.innerText = textString
        } 
        if(e.target.id === 'green'){
            body.style.backgroundColor = 'green';
            displayText.innerText = textString
        } 
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
            displayText.innerText = textString
           
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = 'orange';
            displayText.innerText = textString
           
        }
        if(e.target.id === 'black'){
            body.style.color = 'white';
            body.style.backgroundColor = 'black';
            displayText.innerText = textString
        }
        if(e.target.id === 'blue'){
            body.style.color = 'white';
            body.style.backgroundColor = 'blue';
            displayText.innerText = textString
        }
    });
});
