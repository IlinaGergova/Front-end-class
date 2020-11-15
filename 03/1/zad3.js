function zad3(){
    var array = [10,5,13,18,51];
    var result = array.filter(isEven);

    function isEven(num){
        return num % 2 == 0;
    }

    // for(var index = 0 in result){
    //     console.log(result[index]);
    // }
    return result;
}