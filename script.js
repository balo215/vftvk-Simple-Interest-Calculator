/*
    function: compute
    description: after clicking the button "Compute interes"
                 verify the first field to be a positive integer, 
                 if not, sends an alert and focus on the missing value field
                 if it is, proceed to do the math to get the interest
    author: Blas Gonzalez
*/
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + "</mark>, <br> at an interest rate of <mark>" + rate + "</mark>. <br> you will receive an amount of <mark>" + interest + "</mark>, <br> in the year <mark>" + year + "</mark>";
   
}

/*
    function: updateRate
    description: updates the number below the range field
    author: Blas Gonzalez
*/
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        