function zad5(){
    var A = [10,5,13,18,51];
    var result = A.filter(divideByThree);

    function divideByThree(num){
        return num % 3 == 0;
    }

    // for(var index = 0 in result){
    //     console.log(result[index]);
    // }

    return result;
}