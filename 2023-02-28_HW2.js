class Check_2_numbers{
    constructor(first_number, second_number){
        this.first_number = first_number;
        this.second_number = second_number;
    }
    check_numbers() {
        if(this.first_number < this.second_number) {
            console.log(`-1`)
        }else if (this.first_number > this.second_number) {
            console.log(`1`)
        }else {
            console.log(`0`)
        }
    }
}

// const result1 = new Check_2_numbers(1,1);
// result1.check_numbers();

class Factor{
    constructor(number){
        this.number = number;
    }
    factorial_calc() {
        let b = 1;
        for (let i = 1; i <= this.number; i++ ) {
            b = b * i
        }
        console.log(b)
    }
}
// const result2 = new Factor(4);
// result2.factorial_calc();

class Combine{
    constructor(first_number, second_number, third_number) {
        this.first_number = first_number;
        this.second_number = second_number;
        this.third_number = third_number;
    }
    concatanation() {
        let array = []
        array.push(this.first_number, this.second_number, this.third_number)
        array = array.join("")
        console.log(array)

    }
}

// const result3 = new Combine(1,2,3);
// result3.concatanation();

class Square{
    constructor(first_number, second_number) {
        this.first_number = first_number;
        this.second_number = second_number;
    }
    square_calc() {
        if (this.second_number != null) {
            console.log(this.first_number * this.second_number)
        } else {
            console.log(this.first_number * this.first_number)
        }
    }
}

const result4 = new Square(2);
result4.square_calc();