function zad2(){
    var A = [10,5,13,18,51];
    var B = new Array();
    for(var index = 0; index < A.length; index++){
        B[index] = A[index]*2;
        console.log(B[index]);
    }

    console.log(zad4(A));
    console.log(zad4(B));
}

function zad4(arr){
    for(var index = 0 in arr){
        if(arr[index] < 10){
            return true;
        }
    }
    return false;
}
