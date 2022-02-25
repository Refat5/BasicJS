const listName = ['refat','khalis','tanvir','durjoy'];

//document.getElementById('arrayMethod').innerHTML = listName.toString();
// document.getElementById('arrayMethod').innerHTML = listName.join("--");

             // The pop() method returns the value that was "popped out":


// document.getElementById('arrayMethod').innerHTML = listName.pop();

       // The push() method adds a new element to an array (at the end):


// document.getElementById('arrayMethod').innerHTML = listName.push('refat23');

            // The shift() method removes the first array element and "shifts" all other elements to a lower index.


// document.getElementById('arrayMethod').innerHTML = listName.shift();

                  // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

    // document.getElementById('arrayMethod').innerHTML = listName.unshift('hey');
    // document.getElementById('arrayMethod').innerHTML = listName;


           //The concat() method creates a new array by merging (concatenating) existing arrays:

// const newName = ['shawon','sabbir','skr'];
// const allName = listName.concat(newName);
// document.getElementById('arrayMethod').innerHTML = allName;
   
                //The splice() method can be used to add new items to an array:

// let sp = listName.splice(2,0,'ahad','opi');
// console.log(sp);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let hey =fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(hey);
// document.getElementById('arrayMethod').innerHTML = hey;

    // The slice() method slices out a piece of an array into a new array.

    //document.getElementById('arrayMethod').innerHTML = listName.slice(1,2);

    document.getElementById('arrayMethod').innerHTML = listName.slice(2);


