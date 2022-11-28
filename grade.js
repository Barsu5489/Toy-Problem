/*
* grade - function that generates students grade
* @marks - parameter
* return - Student grade depending on marks they got
*/

function grade()
{
    const marks = document.getElementById('input').value
    const results = document.getElementById('grade')
    
    if (marks > 79 && marks <= 100) // Grades between 79 - 100 output is grade A
    {
        results.innerHTML =  'Grade: A';
    }
    else if (marks >= 60 && marks <= 79) // Grades between ^0 - 79 output is grade B
    {
        results.innerHTML =  'Grade: B';
    }
    else if (marks >= 49 && marks <= 59) // Grades between 49 - 59 output is grade C
    {
        results.innerHTML =  'Grade: c';
    }
    else if (marks >= 40 && marks <= 49 ) // Grades between 40 - 49 output is grade D
    {
        results.innerHTML =  'Grade: D';
    }
    else if (marks >=0 && marks <40) // Grades between 0 - 40 output is grade A
    {
        results.innerHTML =  'Grade: E';
    }
    else // if input is not between 0 - 100 warning is outputted
    {
        results.innerHTML =  'Try numbers between 0 - 100';
    }
}
