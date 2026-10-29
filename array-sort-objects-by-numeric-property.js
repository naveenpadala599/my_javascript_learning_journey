const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 70 }
];
students.sort((a,b)=>a.score-b.score);
console.log(students);
