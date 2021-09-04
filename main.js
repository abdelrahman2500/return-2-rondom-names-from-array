var arr = ["ss","dd","ff","gg","hh"], newArr=[];
var name

document.getElementById("arr").innerHTML = "Array = ["+ arr.join(" , ") + "]" 

console.log(arr)

function setNewArr(){
    for(i = 0; i < 2; i++){
        newArr.push(arr[Math.ceil(Math.random()*5)-1])
    }
    displayNewArr()
}

function displayNewArr(){
    if(newArr[0] != newArr[1]){
        console.log( newArr)
        document.getElementById("newArr").innerHTML = "New Rondom Array : [" + "'"+newArr[0]+"'"+" , "+"'"+ newArr[1]+"'"+ "]"
    } else {
        newArr=[];
        setNewArr()
    }
}
displayNewArr()
