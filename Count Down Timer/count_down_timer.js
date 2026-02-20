const deadline = "October 26, 2026 12:00 AM";
document.querySelector("#deadline").innerText = deadline;

const boxOfDays = document.querySelector(".box1");
const boxOfhours = document.querySelector(".box2");
const boxOfMinus = document.querySelector(".box3");
const boxOfSec = document.querySelector(".box4");



const clock = () => {
    const end = new Date(deadline);
    const now = new Date();
    const diff = (end - now) / 1000;
    time(diff);

    if (diff <=0){
        boxOfDays.innerText = '00';
        boxOfhours.innerText = '00';
        boxOfMinus.innerText = '00';
        boxOfSec.innerText = '00';
        clearInterval(timer);
        return;
    }
}

const time = (diff) => {
    const days = Math.floor(diff / 86400);
    boxOfDays.innerText = days;

    const hours = Math.floor((diff % 86400) / 3600);
    boxOfhours.innerText = hours;
    
    const minus = Math.floor((diff % 3600) / 60);
    boxOfMinus.innerText = minus;
    
    const sec = Math.floor(diff % 60);
    boxOfSec.innerText = sec;

}


const timer = setInterval(clock, 1000);