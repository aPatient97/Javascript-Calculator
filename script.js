
//Selectors
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const cancel = document.querySelector('#C')
const divide = document.querySelector('#divide')
const screen = document.querySelector('#result')
const times = document.querySelector('#times')
const minus = document.querySelector('#minus')
const add = document.querySelector('#plus')
const modulo = document.querySelector('#modulo')
const dot = document.querySelector('#decimal')
const enter = document.querySelector('#enter')

const createString = (e) => {  
    let input = e.target.innerText //grab text content of the numbered buttons
    const text = document.createTextNode(input) //create text node to input values from buttons
    screen.append(text) //append the input to the result screen
    //input string generated i.e. 765*435 . String then evaulated. first val = numbers before operator, second val= numbers after.
}

const clear = (e) => {
    console.log('cleared!')
    screen.innerText = ''
}

cancel.addEventListener('click', clear)

const numbers = document.querySelectorAll('.numbers')

numbers.forEach(number => {
    number.addEventListener('click', createString)
})

const operations = document.querySelectorAll('.operations')

operations.forEach(ops => {
    ops.addEventListener('click', createString)
})

let inputStr = ''
   
//function for calculation - rename calc function above
const calculation = (string) => {
    let result = 0;
    let i = string.search(/[*%+/-]/)
    let operation = string[string.search(/[*%+/-]/)]
    let num1 = string.slice(0, i)
    let num2 = string.slice(i+1, string.length)
    
    switch (operation) {
        case '*' :
            result = Number(num1) * Number(num2)
            clear()
            screen.append(result)
            break
        
        case '%' :
            result = Number(num1) % Number(num2)
            clear()
            screen.append(result)
            break
        
        case '-' :
            result = Number(num1) - Number(num2)
            clear()
            screen.append(result)
            break

        case '+' : 
            result = Number(num1) + Number(num2)
            clear()
            screen.append(result)
            break

        case '/' :
            result = Number(num1) / Number(num2)
            clear()
            screen.append(result)
            break

        default:
            console.log('No operator found')
    }

 }

enter.addEventListener('click', () => {
    inputStr = screen.innerText
    calculation(inputStr)
    // return inputStr
})

