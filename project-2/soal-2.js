let mtk = 84;
let bahasaIndonesia = 92;
let bahasaInggris = 96;
let ipa = 80;

let mapel = [mtk, bahasaIndonesia, bahasaInggris, ipa];
let total = [mtk + bahasaIndonesia + bahasaInggris + ipa];
let jumlah= mapel.length;
let avg = total / jumlah;
// let avg = 59;

let grade;
if (avg >= 90){
    grade = "Grade = A";
}else if (avg >= 80 && avg < 90){
    grade = "Grade = B";
}else if (avg >= 70 && avg < 80){
    grade = "Grade = C";
}else if (avg >= 60 && avg < 70){
    grade = "Grade = D";
}else {
    grade = "Grade = E";
}

console.log("Rata-rata = " + avg);
console.log(grade);