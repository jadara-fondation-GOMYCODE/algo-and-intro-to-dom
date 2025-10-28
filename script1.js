

function summ(){
    var b = Number(document.getElementById('b').value)
    var a = Number(document.getElementById('a').value)
    var operator = document.getElementById("operator").value
    return  document.getElementById("resault").innerHTML = `${a} ${operator} ${b}`
}