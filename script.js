var student = {
    fullname: 'dahmad',
    age: 155,
    score :{
        session1: 12,
        session2: 112
    }
}

console.log( student.session1);





function jadrmorba3(x){
  return  x**0.5
}
console.log(jadrmorba3(2151))


alert('anl9aw lik lhel l mo3adala dyalk (ax**2 + bx + c =0 ) ')
var a = parseFloat(prompt('insert the value of a'))
if (a != 0) {
    var b = Number(prompt('insert the value of b'))
    var c = Number(prompt('insert the value of c'))
}
else alert('the value of a must be  difftent than 0')
console.log(a ,b ,c)
console.log(typeof a ,typeof b ,typeof c)

// calcul delta

var delta = b*b - (4*a*c)
alert(delta)
if (delta > 0){
    var x1 = -(b + jadrmorba3(delta)) / 2*a
    var x2 = -(b - jadrmorba3(delta)) / 2*a
    alert('hadi 3ndha 2 solutions'+"X1="+x1 +" X2 ="+ x2)
}
else if (delta  == 0) {
    var x0 = -b/2*a 
    alert('hadchi dyalk 3ndo hell wahd X0=' + x0)

} else if (delta < 0) {
    alert('had mo3adala dyalk ma3ndhach hel f |R')
}else{
    alert('chi haja machi talhih programme required numbers')
}
alert('sala programme')


