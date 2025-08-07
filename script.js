let a = +prompt("Birinchi sonni kiriting");
let b = +prompt("Ikkinchi sonni kiriting");
let c = +prompt("Uchinchi sonni kiriting");

if (a >= b && a <= c || a <= b && a >= c) {
    orta = a;
} else if (b >= a && b <= c || b <= a && b >= c) {
    orta = b;
} else {
    orta = c;
}

alert("O'rta qiymat : " + orta);
