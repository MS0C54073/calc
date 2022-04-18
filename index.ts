import { question } from "readline-sync";
type Operator = '+' | '-' | '*' | '/';
function main(): void
{
    const firstStr: string =question('Enter the first number:\n');
    const operator: string =question('Enter OPerator:\n');
    const secondStr: string =question('Enter the first number:\n');
    //const firstNum = isNumber(firstStr);
    //console.log(firstNum);

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput)
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result= calculate(firstNum,operator as Operator,secondNum);
        console.log(result);
    }
    else
    {
        console.log("\nInvalid input\n");
        main()
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number)
{
    switch(operator)
    {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
}
}
}

function isOperator(operator: String): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':    
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean  
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);  
    return isNum;
}

main();