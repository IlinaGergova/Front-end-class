function zad3(){
    class Item{
        price = 1000;
        constructor(name,discount){
            this.name = name;
            this.discount = discount;
        }
        get getPrice(){
            return this.price;
        }
        calculate(){
            return (this.price - (this.price*this.discount/100));
        }
    }

    var jacket = new Item("jacket", 5);
    console.log(jacket.calculate());
}