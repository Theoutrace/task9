///When we type on the input box show me those items from the list which match my search string
//Now go ahead and take description of the item too in the input box where you are creating the item
//When you are displaying the item show the description of the item below that
//Now when we try to search, check both the name of the item and the description. 
                //If search string is found in any place show the item

var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit',addItem)   //created event and tasked it to run a function addItem

//delete event //
itemList.addEventListener('click', removeItem)   //on click of delete btn (x) , we need to run a fn remove item

//filter event
filter.addEventListener('keyup', filterItems)    // call filter items on submit of key
 
//creating function addItem
function addItem(e){
    e.preventDefault()

    // console.log(1);
    //get input value //
    var newItem = document.getElementById('item').value;
    let arr = newItem.split(';')
    console.log(arr);
    
    //create new li element to add after the input //
    var li = document.createElement('li')
    //create <p> tag for item name //
    var name = document.createElement("p")
    name.innerHTML = arr[0]

    //create ptag for disc. amd add value //
    var disc = document.createElement("p")
    disc.innerHTML = arr[1]

    //add class name to it
    li.className = 'list-group-item';
    // console.log(li);


    //add textNode with input value
    li.appendChild(name)
    li.appendChild(disc)

    // li.appendChild(document.createTextNode(newItem))    //imp. 
    //create a delete button element //
    var deleteBtn = document.createElement('button')

    //add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //append text node //
    deleteBtn.appendChild(document.createTextNode('X'))
    // append btn in the li as btn should be inside of the <li> //
    li.appendChild(deleteBtn)
    //append <li> to list //
    //now we want to append child and pass that in <li>  //
    itemList.appendChild(li)
}
// remove item 
function removeItem(e){

    if (e.target.classList.contains('delete')){
        //confirming to delete //
        if (confirm('Are you sure ?')){
            //if yes then create a variable <li>
            var li = e.target.parentElement  //li is the parent and we need to delete that using btn so parentElement
            itemList.removeChild(li) //li is the child of item list ul

        }
        
    }
}

//filter items
function filterItems(e){
    //convert input into lowercase
    var text = e.target.value.toLowerCase()
    // console.log(text);   //uncomment this to see action in log   Amazing !!! 

    //grab all the <li> within the item list
    var items = itemList.getElementsByTagName('li')

    //we need to turn this collection into an array //
    // console.log(items);
    Array.from(items).forEach(function(item){
        // var itemName = item.firstChild.textContent
        var itemName = item.textContent
        // console.log(itemName);
        //compare in the items if the typed item name is present in the list grabbed //
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })

}












