function calcRate(){
    const income = parseFloat(document.getElementById('income').value.trim());
    const extra = parseFloat(document.getElementById('extra').value.trim());
    const age = document.getElementById('age').value.trim();
    const deductions = parseFloat(document.getElementById('deduction').value.trim());
    const overall = income + extra - deductions;
    let rate;
    if(overall < 800000 || overall == 800000){
        console.log("no tax")
        rate = 0; 
    } else {
        console.log("tax")
        if (age == "<40"){
            rate = 0.3;
            console.log(rate);
        }
        else if(age == "≥ 40 & < 60"){
            rate = 0.4;
            console.log(rate);
        }
        else {
            rate = 0.1;
            console.log(rate)
        }
    }
    return rate; 
}

function calcTax(){
    const incomeInput = document.getElementById('income').value.trim().replace(/,/g, '');
    const extraInput = document.getElementById('extra').value.trim().replace(/,/g, '');
    const deductionsInput = document.getElementById('deduction').value.trim().replace(/,/g, '');
    
    const income = parseFloat(incomeInput);
    const extra = parseFloat(extraInput);
    const deductions = parseFloat(deductionsInput);
    
    const overall = income + extra - deductions;
    const rate = calcRate();
    const reduction = overall - 800000;
    let tax = rate * reduction;
    let ans = tax.toString();
    let tax2 = ans.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

    const income2 = overall - tax;

    const ansDiv = document.querySelector('.ans');
    ansDiv.style.visibility = 'visible';

    const resultElement = document.getElementById("result");
    const existingIncomeElement = document.getElementById("income2");
    if (existingIncomeElement) {
        resultElement.removeChild(existingIncomeElement);
    }

    const newElement = document.createElement("p");
    newElement.textContent =  income2;
    newElement.id = "income2"; 
    resultElement.appendChild(newElement);
}




function validateForm() {
    const income = parseFloat(document.getElementById('income').value.trim());
    const extra = parseFloat(document.getElementById('extra').value.trim());
    const age = document.getElementById('age').value.trim();
    const deductions = parseFloat(document.getElementById('deduction').value.trim());
    
    const incomeError = document.querySelector('.income-error');
    if (isNaN(income) || income <= 0) {
        console.log('Please enter a valid positive number for income.');
        incomeError.style.visibility = 'visible';
        return false;
    } else {
        incomeError.style.visibility = 'hidden';
    }
    
    const extraError = document.querySelector('.extra-income-error');
    if (isNaN(extra) || extra <= 0) {
        console.log('Please enter a valid positive number for extra income.');
        extraError.style.visibility = 'visible';
        return false;
    } else {
        extraError.style.visibility = 'hidden';
    }
    
    const ageError = document.querySelector('.age-error');
    if (!age || age === "") {
        console.log('Please select an age group.');
        ageError.style.visibility = 'visible';
        return false;
    } else {
        ageError.style.visibility = 'hidden';
    }
    
    const deductionError = document.querySelector('.deduction-error');
    if (isNaN(deductions) || deductions <= 0) {
        console.log('Please enter a valid positive number for deductions.');
        deductionError.style.visibility = 'visible';
        return false;
    } else {
        deductionError.style.visibility = 'hidden';
    }
    
    return true;
}



function onClickHandler(){
    if(validateForm()){
        calcTax()
    }
}

function closeHandler(){
    const ansDiv=document.querySelector('.ans');
    ansDiv.style.visibility='hidden'
    const incInput=document.getElementById('income')
    const extraInput=document.getElementById('extra')
    const deductionInput=document.getElementById('deduction')
    const ageSelect=document.getElementById('age')
    incInput.value="";
    extraInput.value="";
    ageSelect.value="";
    deductionInput.value="";
}
