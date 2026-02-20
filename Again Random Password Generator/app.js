const capital = "ZXCVBNMASDFGHJKLPOIUYTREWQ";
const small = "zxcvbnmasdfghjklpoiuytrewq";
const n = "1234567890";
const specialChar = "!@#$%^&*()?><||:{}][<>?/.,~";

// Select Items from HTML Page
const displayText = document.querySelector(".screen");
const passwordLen = document.querySelector("#leng");
const upperCase = document.querySelector("#upper");
const lowerCase = document.querySelector("#lower");
const number = document.querySelector("#nums");
const symbol = document.querySelector("#character");
const genbtn = document.querySelector(".gen-btn");



generateRandomNumber = (dataSet) => {
    let n = Math.floor(Math.random() * dataSet.length);
    return n;
}

genbtn.addEventListener("click", () => {
    let data = "";
    if (passwordLen.value == "" || passwordLen.value < 8){
        // alert("Invalid Password...");
        displayText.innerText = "Please Select Something";
        return;
    } else {
        while (data.length <= passwordLen.value){
            if(upperCase.checked){
                data += capital[generateRandomNumber(capital)];
            }
            if(lowerCase.checked){
                data += small[generateRandomNumber(small)];
            }
            if(number.checked){
                data += n[generateRandomNumber(n)];
            }
            if(symbol.checked){
                data += specialChar[generateRandomNumber(specialChar)];
            }
        }
    }
    displayText.innerText = slicePassword(data);
});


const slicePassword = (password) => {
    return password.slice(0, passwordLen.value);
}




// const generatePassword = () => {  
//     let password = "";   
//     while (password.length < passwordLen.value){
//         if (upperCase.checked){
//             password += randomNum(capital);
//         if (lowerCase.checked){
//             password += randomNum(small);
//         }
//         if (number.checked){
//             password += randomNum(n);
//         }
//         if (symbol.checked){
//             password += randomNum(specialChar);
//         }
//     }
// }
//     trim(password);
// } 

// genbtn.addEventListener("click", () => {
//     generatePassword();
// });

// function trim(password){
//     let str = password.substring(0, passwordLen.value);
//     displayText.innerText = str;
// }