var math = Number(prompt("Enter Your Maths Marks"));
var physics = Number(prompt("Enter Your Physics Marks"));
var chemistry = Number(prompt("Enter Your Chemistry Marks"));
var urdu = Number(prompt("Enter Your Urdu Marks"));
var pst = Number(prompt("Enter Your PST Marks"));


var totalMarks = 500;
var obtainMarks = (math + physics + chemistry + urdu + pst);
var percentage = (obtainMarks/totalMarks) * 100;

if(percentage >= 90){
    grade = "A";
} else if (percentage >= 80){
    grade = "B";
}  else if (percentage >= 70){
    grade = "C";
}  else if (percentage >= 60){
    grade = "D";
}  else if (percentage >= 50){
    grade = "E";
}  else{
    grade = "F";
} 



alert(
    `
        Total Marks = ${totalMarks}
        Obtained Marks = ${obtainMarks}
        Percentage = ${percentage}
        Grade = ${grade}

    `
)