const terminal = document.querySelector('.terminal');


// Commands That executes
const commands = [
    "Start Hacking",
    "Searching Files",
    "Detect Some Files with Password",
    "Fetching Files",
    "Delete Data from PC",
    "You are Hacked!"
];

let commandIndexes = 0;

// Create Elements for Scripts.
function scripts() {
    const div = document.createElement('div');
    div.classList.add('line');
    const p = document.createElement('p');
    const span = document.createElement('span');
    p.innerText = `${commands[commandIndexes]}`;
    
    // Pass To Another Function.
    runDots(div, p, span);
}


// Run Scripts On Teminal.
let id = setInterval(() => {
    scripts();
    commandIndexes++;
    if (commandIndexes >= commands.length) {
        clearInterval(id);
    }
}, 2000);


// eye-deception of Dots.
function runDots (div, p, span) {
    let dots = '.';
    
    
    dotID = setInterval(() => {
        span.innerText += dots // Can Also Use
        // span.innerText = ".".repeat((count));
    }, 200);
    dots += '.';
    setTimeout(() => {
        clearInterval(dotID);
        span.innerText = '...';

        dots = ".";
    }, 1800);
    
    div.append(p, span);
    terminal.append(div);

}


// eye-deception of Dots. Ka Dosra Tarika.
// function runDots (div, p, span) {
//     // let dots = '.';
//     let count = 0;
    
//     dotID = setInterval(() => {
//         // span.innerText += dots // Can Also Use
//         span.innerText = ".".repeat((count));
//         count++;
//     }, 200);
//     // dots += '.';
//     setTimeout(() => {
//         clearInterval(dotID);
//         span.innerText = '...';

//         // dots = ".";
//     }, 1800);
    
//     div.append(p, span);
//     terminal.append(div);
// }