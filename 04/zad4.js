function zad4() {
    var person = {
        privateSal: function(){
        let _salary = 1000;
        return _salary;
    },
        getSecretSalaryInfo: function (){
            return this.privateSal();
        }
    };

    var stoleSalaryInfo = person._salary;

    //console.log(person.getSecretSalaryInfo()); 
    console.log(stoleSalaryInfo); 
}