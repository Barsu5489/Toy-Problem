/*
* grade - function that generates students grade
* @marks - parameter
* return - Student grade depending on marks they got
*/

function grade(marks)
{
    if (marks > 79) // Grade A block
    {
        return 'A';
    }
    else if (marks >=60 && marks <=79) // Grad B block
    {
        return 'B';
    }
    else if (marks >= 49 && marks <= 59) // Grade C block
    {
        return 'c';
    }
    else if (marks >= 40 && marks <=49 ) // Grade D block
    {
        return 'D';
    }
    else // Grade E block(0 - 49)
    {
        return 'E';
    }
}
