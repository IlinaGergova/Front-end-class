function zad6(){
    var A = [10,5,13,18,51];
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(A.reduce(reducer));
}