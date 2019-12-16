//js file

/*
The program successfully works by defining a SeparateByValue function that separates
a given array into another array based on an indicated object. Then, the SeparateByValue
function is called on each array element that was created with the first call
to properly create a final array.  This array stores values as follows:

The first array dimension separates the given array by the first parameter.  The second
array dimension separates the first array dimension further by the second parameter.  The
third dimension picks out the individual elements of the array along with the first and second
dimension.
 */

//first function:  Separate an array by given object and store in a new array.
//return the new array
function SeparateByValue(ArrayToBeSorted, SortByOne)
{
  //first part of the function just finds the different values of the
  //object to sort by;
  var diffVals = [];
  ArrayToBeSorted.forEach(x =>
    {

        var flag = 0;
        diffVals.forEach(y =>
          {

            if(x[SortByOne]==y)
              {
                flag = 1;  //flag the variable if it already exists.
              }
          });

          if(flag == 0)
            {
              diffVals[diffVals.length] = x[SortByOne];  //add to diffVals if doesn't exist
            }
            flag = 0;  //reset flag variable
    }
  );
  //this is the end of the first part of the app.

  /*The second part of the function creates a new array and puts ArrayToBeSorted
  elements into this array.  It groups them by the values in the diffVals array.
*/
  var sortedArray = [[]];

  var counterVariable = 0;

  diffVals.forEach(a =>
  {
      sortedArray[counterVariable] = [];

      ArrayToBeSorted.forEach(b =>
      {
          if(a==b[SortByOne])
          {
            sortedArray[counterVariable][sortedArray[counterVariable].length] = b;
          }
      });
  counterVariable++;
  });

  return sortedArray;
}

/*
This function just calls the SeparateByValue twice to group an array by two values.
It is the final function.
*/
function SortByTwoValues(ArrayToBeSorted, SortByOne, SortByTwo) {

  var firstStageArray = []

  //get rid of null values
  var counterV = 0;
  ArrayToBeSorted.forEach(x => {
    if((x[SortByOne] != null) && (x[SortByTwo] != null))
     {
       firstStageArray[counterV] = x;
       counterV++;
     }
  })

  secondStageArray = SeparateByValue(firstStageArray, SortByOne); //first call

  var finalArray = [];

  counterVariable = 0;

  /*
  second call.  Loop through the secondStageArray and call SeparateByValue
  to separate the array again by the second value.
  */
  secondStageArray.forEach(secondStageArray => {
    finalArray[counterVariable] = SeparateByValue(secondStageArray, SortByTwo);

    counterVariable++;
  });


  return finalArray;

}

//testing values demonstrating functionality of algorithm.




var person1 = {firstName: "John", lastName: null, middleName: "Kim"};
var person2 = {firstName: "John", lastName: "Guardado", middeName: "Smith"};
var person3 = {firstName: "Matt", lastName: "Goralka", middleName: "Ostroski"};
var person4 = {firstName: "John", lastName: "Doe", middleName: "Walters"};
var person5 = {firstName: "Matt", lastName: "Webster", middleName: "Webster"};
var person6 = {firstName: null, lastName: "Bloom", middleName: "Bloomington"};
var person7 = {firstName: "Matt", lastName: "Webster", middleName: "Wellington"};

var firstName = "firstName";
var lastName = "lastName";

var personArray1 = [person1,person2,person3,person4,person5, person6, person7];
var personArray2 = [person3, person6, person1, person2, person4, person5];

printarray = [];
printarray = SortByTwoValues(personArray1, firstName, lastName);

console.log("personarray1 sorted:")

console.log("printarray[0]");
console.log(printarray[0]);
console.log("printarray[1]");
console.log(printarray[1]);
console.log("Printarray[0][0]");
console.log(printarray[0][0]);
console.log("printarray[0][1]");
console.log(printarray[0][1]);
console.log("printarray[0][0][0]");
console.log(printarray[0][0][0]);


//demonstration2



var person21 = {firstName: 1, lastName: 1, middleName: "Goralka"};
var person22 = {firstName: 2, lastName: 1, middleName: "Walters"};
var person23 = {firstName: 1, lastName: 1, middleName: "Johnsons"};
var person24 = {firstName: 1, lastName: 2, middleName: "Joanna"};
var person25 = {firstName: 1, lastName: 2, middleName: "Steve"};
var person26 = {firstName: 1, lastName: 3, middleName: "Smith"};
var person27 = {firstName: 2, lastName: 2, middleName: "Nick"};
var person28 = {firstName: 2, lastName: 2, middleName: "Laura"};
var person29 = {firstName: 3, lastName: 4, middleName: "Julia"};
var person210 = {firstName: 3, lastName: 5, middleName: "Paul"};
var person211 = {firstName: 3, lastName: 5, middleName: "Anne"};

personArray3 = [person21, person22, person23, person24, person25, person26, person27, person28, person29, person210, person211];
var firstName2 = "firstName";
var lastName2 = "lastName";

printarray2 =SortByTwoValues(personArray3, firstName2, lastName2);

console.log("Second Example");

console.log("printarray2[0]");
console.log(printarray2[0]);
console.log("printarray2[1]");
console.log(printarray2[1]);
console.log("printarray2[2]");
console.log(printarray2[2]);
console.log("printarray2[0][0]");
console.log(printarray2[0][0]);
console.log("printarray2[0][1]");
console.log(printarray2[0][1]);
console.log("printarray2[0][0][0]");
console.log(printarray2[0][0][0]);
console.log("printarray2[2][1][0]");
console.log(printarray2[2][1][0]);
console.log("printarray2[2][1][1]");
console.log(printarray2[2][1][1]);

var person31 = {first: 1, second: "Goralka"};
var person32 = {first: 2, second: "Smith"};
var person33 = {first: 3, second: "Johnson"};
var person34 = {first: 1, second: "Goralka"};
var person35 = {first: 1, second: "Smith"};
var person36 = {first: 3, second: "Scarlett"};
var person37 = {first: 3, second: "Johnson"};

personArray4 = [person31, person32, person33, person34, person35, person36, person37];
var first = "first";
var second = "second";

printArray3 = SortByTwoValues(personArray4, first, second);

console.log("Third Example");
console.log("printArray3[0]");
console.log(printArray3[0]);
console.log("printArray3[1]");
console.log(printArray3[1]);
console.log("printArray3[2]");
console.log(printArray3[2]);
console.log("printArray3[0][0]");
console.log(printArray3[0][0]);
console.log("printArray3[0][1]");
console.log(printArray3[0][1]);
console.log("printArray3[0][0][0]");
console.log(printArray3[0][0][0]);

console.log("printArray3[2][0]");
console.log(printArray3[2][0]);
console.log("printArray3[2][1]");
console.log(printArray3[2][1]);
console.log("printArray3[2][0][1]");
console.log(printArray3[2][0][1]);
