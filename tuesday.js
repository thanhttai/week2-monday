// 2. Into Ziff Zubb
function ziffZubb(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0) {
            console.log(`${i} ziff`)
        } else if (i % 5 === 0) {
            console.log(`${i} zubb`)
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} ziffZubb`)
        } else {
            console.log(i)
        }
    }
}


// 3. Greatest Common Divisor

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b)
}


//4. Least Common Multiple
function lcmTwoNumbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / lcmTwoNumbers(x, y));
}

function lcmTwoNumbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

// 5. Prime number

function isPrimeNumber(number) {
    let isPrime = true;

    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
}

function nthprime(n) {
    var prime = [], i = 1
    while (i++ && prime.length < n) prime.reduce((a, c) => (i % c) * a, 2) && prime.push(i)
    return prime.length ? prime.pop() : -1
}
[-1, 0, 2, 3, 5, 10, 100].forEach(n => console.log(`nthprime(${n})=${nthprime(n)}`))


// 6. Capture Time
function captureTime() {
    var a = Date.now();
    console.log(`minutes ${a / 60000}`)
    console.log(`Years ${a / (60000 * 60 * 24 * 365)}`)
    console.log(`Months ${a / (60000 * 60 * 24 * 30)}`)
    console.log(`Seconds ${a / 1000}`)
    console.log(`Days ${a / 60000 * 60 * 24}`)
}

//7 Capture
function problem1() {
    for (var i = 0; i < 5; i++) {
        console.log(Math.random())
    }
}

function problem2() {
    for (var i = 0; i < 100; i++) {
        var a = Math.floor(Math.random() * 10)
        if (0 < a < 10) {
            console.log(a)
        }
    }
}

function getRandomInt(start, end) {
    min = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start + 1)) + start;

}
// console.log(getRandomInt(5, 8))

//Get random item
function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

//8. Nested For Loop
function nestedLoop(n) {
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // Internal loop
        for (let j = 1; j <= i; j++) {
            string = `${string} ${i}`;
        }
        string += "\n";
    }
    console.log(string)
}
nestedLoop(8);


//checkBoard
function checkBoard() {
    const gridSize = 8;

    for (let y = 0; y < gridSize; y++) {
        let line = '';
        for (let x = 0; x < gridSize; x++) {
            line += ((x + y) % 2) ? ' ' : '#';
        }
        console.log(line);
    }

}

//9. Iterate over Arrays
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function calculate() {
    var a = 0
    for (var i = 0; i < workingHours.length; i++) {
        a += (workingHours[i])
    }
    console.log(a * 25)
}


//
var result = [];
var a = 0
function totalIncome(start, end) {
    for (var i = 0; i < 250; i++) {
        var a = Math.floor(Math.random() * (end - start + 1) + start);
        if (start < a < end) {
            result.push(a)
            if (result.length === 250) {
                for (var i = 0; i < result.length; i++) {
                    a = a + result[i]
                }
            }
        }
    }
    console.log(a * 25)
}

totalIncome(6, 8)
//

// function getRandom(start, end) {
//     min = Math.ceil(start);
//     end = Math.floor(end);
//     var weeks = Math.floor(Math.random() * (end - start + 1)) + start;

//     function totalIncome(c, b) {
//         for (var i = 0; i < 250; i++) {
//             var a = Math.floor(Math.random() * (b - c + 1) + c);
//             if (c < a < b) {
//                 result.push(a)
//                 if (result.length === 250) {
//                     for (var i = 0; i < result.length; i++) {
//                         a = a + result[i]
//                     }
//                 }
//             }
//         }
//         console.log(a * 25)
//     }
//     totalIncome(6, 8)

// }


