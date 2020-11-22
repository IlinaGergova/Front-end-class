function zad2(){
    class Person{
        planet = "Earth";
        constructor(name){
            this.name=name;
        }
    }

    Person.prototype.print = function() {console.log(`Hello ${this.name} from planet ${this.planet}`)}

    var one = new Person("John");
    one.print();
    var two = new Person("Mike");
    two.print();
    var three = new Person("Suzy");
    three.print();

}