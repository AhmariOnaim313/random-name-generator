var list=["Japan","London","Russia","Ireland","Sweden", "Thailand","Romanina","Singapore","Australia", "Dubai"];


var button = document.getElementById("button");

button.addEventListener("click", function(){
  var rand = Math.random();
  var bigger = rand * list.length
  var round = Math.floor(bigger);
  document.getElementById("placeholder").innerHTML =list[round];
});


// var rand= Math.random()
// console.log(rand);
// var bigger= rand*list.length
// function()
// var round=Math.floor(bigger)
// console.log(rand);
// console.log(bigger);
// console.log(round);
//
// console.log(list[round]);
//
// console.log(list[0]);
//
// var button = document.getElementById("travel")
// button.addEventlistener("button", function(){
//   document.getElementById("placeholder").innerHTML =(list[round]);
// })
