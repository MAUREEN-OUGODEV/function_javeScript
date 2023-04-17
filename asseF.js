// You manage a grocery store and need to keep track of the inventory of various items.
//  You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
let items= ["Milk","water","soap","Books","Pens","yorgut","detergent","cookingoil","bodyoil","sugar"]

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
 let stockQualities = [{item:"Milk",stock:24},{item:"water",stock:45},{item:"soap",stock:67 },{item:"Books",stock:8},{item:"Pens",stock:12},{item:"yorgut",stock:5},{item:"detergent",stock:60},{item:"cookingoil",stock:35},{item:"bodyoil",stock:19},{item:"sugar",stock:6}]

// Write a function to add a new item to the inventory, updating both arrays.
function addnewItem(){
    items.push("eggs")

   stockQualities.push({item:"eggs",stock:23})

    

}
addnewItem()
console.log(items)
console.log(stockQualities)

  
// Write a function to update the stock quantity of an existing item.
let updateItem = stockQualities.map (num =>{
    if(num.item == "water"){
        num.stock = 9;
    }
    return num
})
console.log(updateItem)


// Write a function to calculate the total number of items in the inventory.
function totalNumber(item){
return item.stock
}
function sum(one,two){
    return one+two;
}
console.log(stockQualities.map(totalNumber).reduce(sum))
// Write a function to find the item with the lowest stock quantity.

    let stockMin  =Math.min(...stockQualities.map(object=>object.stock));
    console.log(stockMin)
    


