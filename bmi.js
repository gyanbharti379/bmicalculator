 const form = document.querySelector('form')
 let bmi = 0;
 let result = "";

 function focusNext(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission or other default behavior
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus(); // Set focus to the next form element
    }
}

 form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
     
    result = document.querySelector('#results');
    
    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;

    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;

    }else{
        bmi = (weight / ((height*height)/10000)).toFixed(2);
        
        if (bmi < 18.6){
            result.innerHTML = `<span>BMI = ${bmi} Kg/m^2<br> You are Under Weight</span>`;
        }
        else if (bmi > 18.6 & bmi < 24.9){
            result.innerHTML = `<span>BMI = ${bmi} Kg/m^2<br> You are Normal Weight</span>`;
        }
        else{
            result.innerHTML = `<span>BMI = ${bmi} Kg/m^2<br> You are Over Weight</span>`;
        }
    }
    
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function(){
    document.getElementById("form").reset(); // Reset all fields in the form
    document.getElementById("results").innerHTML = "";
   
};
