console.log("hello welcome")

const button = document.querySelector(".btn");
// console.log(button)

const bill_amount = document.querySelector("#bill")
const cash = document.querySelector("#cash")
console.log(bill_amount)

const all_td = document.querySelectorAll("tbody td");
console.log(all_td)
const error_msg = document.querySelector("#error-msg");
const error_msg_1 = document.querySelector("#error-msg-1");


console.log(error_msg , error_msg_1)



const arr = [2000,500,200,100,50,20,10,5,1]


// to make a function 
function count(){
    let total = cash.value - bill_amount.value
    if (total >= 0){
        for (let i = 0; i < arr.length ; i++){
            if (total >= arr[i]){
                let note = total / arr[i]
                // console.log(note)
                all_td[i].innerText = Math.floor(note)
                total = total - Math.floor(note) * arr[i]
                // console.log(total)
                
            }
            else{
                all_td[i].innerText = "0"
            }
        } 
    }else{
        console.log("Enter the valid amounts")
        error_msg_1.innerText = "YOUR CASH IS LESS THAN YOUR BILL AMOUNTS SO PLEASE ENTER THE VALID CASH AMOUNTS "
        clear()
    }
}


button.addEventListener("click", (e) => {
    e.preventDefault()
    if (bill_amount.value == 0){
        error_msg.innerText = "Enter the valid Bill amounts"    
        bill_amount.addEventListener("click" , () =>{
            error_msg.innerText = ""
        })
    }
    else if(cash.value == 0){
        console.log("invalid cash")
        error_msg_1.innerText = "Enter the valid cash "
       clear()
    }
    else{
        count()
        // bill_amount.value = ""
        // cash.value = ""
    }
})


// clear the input box 

function clear(){
    cash.addEventListener("click" , () =>{
        error_msg_1.innerText = ""
    })
}