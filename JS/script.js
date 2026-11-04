let englishmarks = Number(prompt("Enter Your English Marks"));
let urdumarks = Number(prompt("Enter Your Urdu Marks"));
let physicsmarks = Number(prompt("Enter Your Physics Marks"));
let chemistrymarks = Number(prompt("Enter Your Chemistry Marks"));
let computermarks = Number(prompt("Enter Your Computer Marks"));
let pstmarks = Number(prompt("Enter Your PST Marks"));
let islmarks = Number(prompt("Enter Your Islamiat Marks"));


let totalMarks = 700;

let obtainMarks  = englishmarks + urdumarks + physicsmarks + chemistrymarks + computermarks + pstmarks + islmarks;
let percentage = obtainMarks/totalMarks * 100;

document.write(percentage);
