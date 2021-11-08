!true
let resultado1 = !true
console.log(resultado1)

!false
let resultado2 = !false
console.log(resultado2)

!!false
let resultado3 = !!false
console.log(resultado3)

!!true
let resultado4 = !!true
console.log(resultado4)

!1
let resultado5 = !1
console.log(resultado5)

!!1 
let resultado6 = !!1
console.log(resultado6)

!0 
let resultado7 = !0
console.log(resultado7)

!!0 
let resultado8 = !!0
console.log(resultado8)

!!"" 
let resultado9 = !!""
console.log(resultado9)

let x = 5;
let y = 9;

x < 10 && x!==5
// 5 < 10 and 5 = 5 true

x>9 || x===5
// 5 é maior que 9 = false / 5 estritamente igual a 5 = true portanto false

!(x===y)
// se a ! signfica not portanto os () serão true




let x=10
let y ="a"
y==="b" || x >= 10

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)