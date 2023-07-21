function checkGrade(exam,totalMarks)
{
    if ( totalMarks >= 89 && totalMarks <= 100 && exam == "Final-exam" ) 
    {
        return true;
    }

    if ( totalMarks >= 90 )
    {
        return true;
    }

    return false;
}

console.log(checkGrade("Mid-term",80));         // FALSE
console.log(checkGrade("Mid-term",90));         // TRUE
console.log(checkGrade("Final-exam",80));       // FALSE
console.log(checkGrade("Final-exam",90));       // TRUE