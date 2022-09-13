
function check() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let result;
    let bmi = weight/(height^2);

    if (bmi<18.5){
        result = "Underweight";
    } else if (bmi<25){
        result = "Normal";
    } else if (bmi<30){
        result = "Over weight";
    } else {
        result = "Obese";
    }
    document.getElementById("result").innerHTML = result;
}
