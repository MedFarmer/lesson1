// class Stat{
//     constructor(text) {
//         this.text = text;
//     }
//     check_text(){
//         let array = [];
//         let letters = 0;
//         let digits = 0;
//         let symbols = 0;
//         array = this.text;
//         array = array.split("");
//         array.forEach(x => {
//             if(/^[a-zA-Z]+$/.test(x)) {
//                 letters += 1;
//             }else if (/^\d+$/.test(x)) {
//                 digits += 1;
//             }else{
//                 symbols +=1;
//             }
//         });
//         console.log(`number of letters: ${letters}, number of digits: ${digits}, number of symbols: ${symbols}`)
//     }
// }

// const result1 = new Stat("aA31%&");
// result1.check_text();

// class Digits2{
//     constructor(number) {
//         this.number = number;
//     }
//     convert_to_text() {
//         let d = this.number
//         let text = d.toString();
//         let digits = [];
//         let first_digit = 0;
//         let second_digit = 0;
//         let text1 = "";
//         let text2 = "";
//         digits = text.split("")
//         console.log(digits)
//         const n = ["один","два","три","четыре","пять","шесть","семь","восемь","девять"]
//         const y = ["надцать", "десят"]
//         const z = ["десять", "двадцать","тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девятносто",]

//         if(this.number === 40) {
//             console.log(z[3]);
//         } else if(this.number === 10) {
//             console.log(z[0]);
//         } else if(this.number === 90) {
//             console.log(z[8]);
//         } else if(this.number === 20) {
//             console.log(z[1]);
//         } else if(this.number === 30) {
//             console.log(z[2]);
//         } else {
//             first_digit = +digits[0];
//             second_digit = +digits[1];
//             if(first_digit === 1) {
//                 text1 = n[second_digit-1];
//                 text2 = y[0];
//                 console.log(text1, text2);
//             }else if(second_digit === 0) {
//                 text1 = n[first_digit-1];
//                 text2 = y[1];
//                 console.log(text1, text2);
//             } else{
//                 text1 = z[first_digit-1];
//                 text2 = n[second_digit-1];
//                 console.log(text1, text2);
//             }
//         }  
//     }
// }

// // const result2 = new Digits2(94);
// // result2.convert_to_text();

// class Cammel{
//     constructor(text){
//         this.text = text
//     }
//     cammel_case() {
//         let array = [];      
//         array = this.text;
//         array = array.split("");
//         array.forEach((x,i) => {            
//             if(x === "-") {
//                 array.splice(i,1)
//                 array[i] = array[i].toUpperCase();
//             }        
//         });
//         array = array.join("")        
//         console.log(array)
//     }
// }

// const result3 = new Cammel("background-color");
// result3.cammel_case();

// class Abbreviation{
//     constructor(text) {
//         this.text = text;
//     }
//     make_abbr(){
//         let array = [];      
//         let new_array = [];
//         array = this.text;
//         array = array.split("");
//         new_array[0] = array[0].toUpperCase();
//         array.forEach((x,i) => {
//             if(x === " ") {
//                 array[i+1] = array[i+1].toUpperCase();
//                 new_array.push(array[i+1])
//             }        
//         });
//         new_array = new_array.join("")        
//         console.log(new_array)
//     }
// }
// const result4 = new Abbreviation("we will do it");
// result4.make_abbr();

class Domen{
    constructor(text) {
        this.text = text;
    }
    make_domen(){
        let array = [];      
        let protokol = [];
        let domen = [];
        let path = [];
        let b = 0;
        let c = 0;
        array = this.text; 
        array = array.split("");
        let len = array.length;        
        array.forEach((x,i) => {
            if(array[i+1] === "/" && array[i+2] === "/") {
                protokol = array.slice(0,i);
                b = i + 3;
            }else if(array[i] === ".") {
                domen = array.slice(b,i+4);
                c = i +4;
                path = array.slice(c,len)                
            }
        });
        protokol = protokol.join("");
        domen = domen.join("");
        path = path.join("");
        console.log(`protokol: ${protokol}, domen: ${domen}, path: ${path}`)
    }
}
const result5 = new Domen("https://itstep.org/ua/about");
result5.make_domen();