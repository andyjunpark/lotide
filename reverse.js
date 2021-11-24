const args = process.argv;
let sliced = args.slice(2);
sliced.forEach(function(element) {
  let reversedString = '';
  for (let i = element.length - 1; i >= 0; i--) {
    reversedString += element[i];
  } console.log(reversedString);
});