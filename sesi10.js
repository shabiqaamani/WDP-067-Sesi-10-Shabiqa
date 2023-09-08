console.log("1. Soal Variabel");

let nama = "Shabiqa Amani";
const umur = "I'm 22 Years old";

console.log(nama);
console.log(umur);
console.log("//////////////////////////////////////////////////////////////////////////////////////////")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("2. Soal Array");
//Array Awal
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];
console.log(fruits);

//Array setelah di push
fruits.push("Figs");
console.log(fruits);

//Array setelah di edit salah satu buahnya
fruits[1] = "Blueberry";
console.log(fruits);

//Array setelah di pop
fruits.pop();
console.log(fruits);
console.log("//////////////////////////////////////////////////////////////////////////////////////////")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("3. Soal Object");

const myInformation = {
    first_name: "Shabiqa",
    last_name: "Amani",
    hobbies: ["Swimming", "Reading", "Watching Movies"],
    favorite_number: 2,
    wear_glasses: true
}

console.log(myInformation);


//Cetak Nama Lengkap
console.log("a. Full Name: " + myInformation.first_name + " "+ myInformation.last_name);

//Ubah Favorite Number jadi 8
myInformation.favorite_number = 8;
console.log(myInformation);
console.log("b. Favourite Number: " + myInformation.favorite_number);

//Tambah Hobi Coding
myInformation.hobbies.push("Coding");
console.log(myInformation);
console.log("c. Hobbies: " + myInformation.hobbies);

//Tambah property lulusan
myInformation.lulusan = "Hacktiv8";
console.log(myInformation);
console.log("d. Lulusan: " + myInformation.lulusan);

//Cetak hobi satu per satu
console.log("e. Cetak Hobi: ");
for (let i = 0; i < myInformation.hobbies.length; i++){
    console.log(myInformation.hobbies[i]);
}

//cetak seluruh keys dan values dari object
console.log("f. Cetak Seluruh Keys dan Values: ");

console.log(Object.keys(myInformation));
console.log(Object.values(myInformation));


//loop
for (let i = 0; i < Object.keys(myInformation).length; i++){
    console.log(Object.keys(myInformation)[i] + ': ' + Object.values(myInformation) [i]);
}


console.log("//////////////////////////////////////////////////////////////////////////////////////////")

//Fungsi yang mencetak tanggal sekarang
function currentDate (){
    console.log(new Date().getDate() + '-'+ new Date().getMonth() + '-'+ new Date().getFullYear());
}

currentDate();

//Fungsi yang mengembalikan tanggal sekarang
function currentDate2(){
    let date = new Date();
    return date.getDate() + '-'+ new Date().getMonth() + '-'+ new Date().getFullYear() ;
}

console.log(currentDate2());


console.log("//////////////////////////////////////////////////////////////////////////////////////////")

function evenOddNumbers (number){
    if (isNaN(number) || typeof number !== 'number'){
        return "Invalid Data";
    }
    else if (number % 2 === 0){
        return "Genap";
    }
    else{
        return "Ganjil";
    }
}

console.log( 'angka 2: ' + evenOddNumbers(2));
console.log( 'angka 3: ' + evenOddNumbers(3));
console.log( 'angka 20: ' + evenOddNumbers(20));
console.log( 'angka 21: ' + evenOddNumbers(21));
console.log('Not a Number: ' + evenOddNumbers("me"))