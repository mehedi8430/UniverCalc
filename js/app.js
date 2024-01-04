const btns = document.querySelectorAll('button');
const textarea = document.querySelector('textarea');
const dayNight = document.querySelector('#dayNight');
const footer = document.querySelector('footer p');
const calculator = document.querySelector('.calculator');

// add event listener to all buttons
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const value = btn.getAttribute('data-value');
        // prevent decimal point repeated 
        // if(value === '.') {
        //     if(textarea.value.includes('.')) {
        //         return;
        //     }
        // }
        calculate(value);
    })
}
)

// factorial function
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// calculate function
function calculate(value) {
    switch (value) {
        case '(':
            textarea.value += value;
            break;
        case ')':
            textarea.value += value;
            break;
        case '.':
            textarea.value += value;
            break;
        case 'AC':
            textarea.value = '';
            break;
        case 'DEL':
            textarea.value = textarea.value.slice(0, -1);
            break;
        case '√':
            try {
                textarea.value = Math.sqrt(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'pow':
            // textarea.value = value;
            try {
                textarea.value = Math.pow(Number(textarea.value), prompt('Enter Second Number '));
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case '%':
            try {
                textarea.value = Number(textarea.value) / 100;
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'log':
            try {
                textarea.value = Math.log(textarea.value);
            }
            catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'sin':
            try {
                textarea.value = Math.sin(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'cos':
            try {
                textarea.value = Math.cos(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'tan':
            try {
                textarea.value = Math.tan(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'e':
            textarea.value += Math.E;
            break;
        case 'pi':
            textarea.value += Math.PI;
            break;
        case 'sinh':
            try {
                textarea.value = Math.sinh(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'cosh':
            try {
                textarea.value = Math.cosh(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'tanh':
            try {
                textarea.value = Math.tanh(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'abs':
            try {
                textarea.value = Math.abs(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'sci':
            try {
                textarea.value = parseFloat(textarea.value).toExponential();
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case 'log10':
            try {
                textarea.value = Math.log10(textarea.value);
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case '!':
            try {
                let result = factorial(textarea.value);
                textarea.value = result;
            } catch (error) {
                textarea.value = 'Type First Number!';
            }
            break;
        case '=':
            try {
                if (textarea.value[0] === '0') {
                    textarea.value = textarea.value.slice(1, textarea.value.length);
                }
                let result = eval(textarea.value);
                textarea.value = result;
            } catch (error) {
                textarea.value = 'Error';
            }
            break;
        default:
            textarea.value += value;
            break;
    }
}


// dayNight Mode  

dayNight.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    dayNight.classList.toggle('active');
    footer.classList.toggle('active');
    calculator.classList.toggle('active');
    if (document.body.classList.contains('dark')) {
        dayNight.value = 'Night';
    } else {
        dayNight.value = 'Day';
    }
}
)
