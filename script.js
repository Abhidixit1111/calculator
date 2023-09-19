let string = "";
let buttons = document.querySelectorAll('.myButton');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'del') {
            let result = string.substr(0, string.length-1);
            document.querySelector('input').value = result;
            string=result;
            // console.log(string.length)
            // console.log(string)
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})