let boy=parseInt(prompt("boy"))/100;
let ceki=parseInt(prompt("ceki"));
let bmi=ceki/(boy*boy)
console.log(bmi)
if(bmi>25){
    console.log("artiq cekili")
}
else if(18.5<bmi && 24.9>bmi){
    console.log("normal cekili")
}
else {
    console.log("ariq cekili")
}