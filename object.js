const  man = {
    name : "refat",
    age : 32,
    height : "5'9 ",

    start: function (){
        this.drive();
        console.log('refat is runnging now');

    },
    drive: function(){
        console.log('refat is now drive a car');
    },
}

// document.getElementById('obj').innerHTML = man.age;
// document.getElementById('obj').innerHTML = man["name"];
document.getElementById('obj').innerHTML = man.start();
 console.log(man.start());

