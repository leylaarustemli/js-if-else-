let teref1=parseInt(prompt("birinci teref"));
let teref2=parseInt(prompt("ikinci teref"));
let teref3=parseInt(prompt("ucuncu teref"));
if(teref1+teref2>teref3 && teref2+teref3>teref1 && teref1+teref3>teref2){
    if (teref1<=0||teref2<=0||teref3<=0) {
        console.log(false)
    } else {
        console.log(true)
    }
}
else{
    console.log(false)
}

 



