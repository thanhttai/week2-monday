//2: Area of a circle
function areaOfCircle() {
    console.log('area of a circle');
    const pi = (Math.PI).toFixed(2);
    console.log(pi);
    var radius;
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            radius = 5;
            console.log(radius);
        };
    };
    const area = pi * radius ** 2;
    radius = 10;
    console.log('The area of a circle given the radius' + ' ' + radius + '(m) is' + ' ' + area + '(m2)');
    console.log(`The area of a circle given the radius ${radius}(m) is ${area}(m2)`);
    ;
}

// 3: Operators & Comparison
//Part 1 : Operators expressions
function operator() {
    10 + 24 === 34;
    "10" + "24" === "1024";
    "Hello" + " " + 2021 === "Hello 2021";
    1 + 2 * 3 === 7;
    (1 + 3) ** 2 === 16;
    1 / 0 === 0;
    6 % 2 === 0;
    5.5 % 2 === 1.5;
    Number("123") === 123;
    typeof (1 + "") === undefined;
};
// Part 2 : Comparison expressions
function Comparison() {
    5 == "5"; //true
    //because == equal to 
    5 === "5";
    // bc === equal value and equal type, type of 5 is a number and "5" is a string

    8 != 8.0; // false

    8 !== 8.0; // false

    "true" === true; //false

    4 <= 4.0;  //true

    7 >= 7; //true

};
//Part 3 : Logical expressions
function Logical() {
    true && true; //true
    true && false; // false
    true || true; //true
    false || true; //true
    !true; // false
    !false; // true
    false && (true || true); //false
    false && true || true; //true

};

//4. Conditionals
//Requirement
function number() {
    var num;
    if (num <= 0) {
        if (num == 0) {
            console.log('number is a zero');
        } else {
            console.log('number is a negative');
        }
    } else {
        console.log('number is a positive');
    };

};

// Instruction: C1
function C1() {
    var a = 1;
    var b = 55;
    var c = 44;
    if (a < b || a < c) {
        console.log('a nhỏ nhất');
        if (b < c) {
            console.log('c lớn nhất');
        } else {
            console.log('b lớn nhất');
        }
    } else if (b < a || b < c) {
        console.log('b nhỏ nhất')
        if (a < c) {
            console.log('c lớn nhất');
        } else {
            console.log('a lớn nhất');
        }
    } else if (c < a || c < b) {
        console.log('c nhỏ nhất');
        if (a < b) {
            console.log('b lớn nhất');
        } else {
            console.log('a lớn nhất');
        }
    }

};
C1()
// C2
function C2() {
    var a = 1;
    var b = 44;
    var c = 55;

    console.log(Math.min(a, b, c));
    console.log(Math.max(a, b, c));
};





// Loops
// Part 1 : List of number in order asc/desc
function count() {
    if (a < b) {
        for (var i = a; i <= b; i++) {
            console.log(i)
        }
    } else if (a > b) {
        for (var i = a; i >= b; i--) {
            console.log(i)
        }
    }
}


// Part 2 : Sum all from start to end
function sum() {
    var sum = 0;
    var x = 3;
    var y = 5;
    for (var i = x; i <= y; i++) {
        sum = sum + i;
        console.log(sum)
    };

}


function loopPart3() {
    var number = 1234;
    var number2 = number;
    var sum = 0;
    for (sum = 0; number2 != 0; number2 = Math.floor(number2 / 10)) {
        sum += number2 % 10;
    }
    console.log(`Sum of digits of ${number} is ${sum}`);
}

//6. Functions
(() => {
    console.log("Wow, it worked!");
})();

(() => {
    console.log("One piece");
})();

function tai(name) {
    console.log(`Print ${name} as my name`);
}





function condition(a, b, c) {
    if (a > b && b > c) {
        console.log(`${c} is the smallest number, and ${a} is the biggest number between c = ${c}, b = ${b}, and a = ${a}`);
    } else if (a > c && c > b) {
        console.log(`${b} is the smallest number, and ${a} is the biggest number between b = ${b}, c = ${c}, and a = ${a}`);
    } else if (b > c && c > a) {
        console.log(`${a} is the smallest number, and ${b} is the biggest number between a = ${a}, c = ${c}, and b = ${b}`);
    } else if (b > a && a > c) {
        console.log(`${c} is the smallest number, and ${b} is the biggest number between c= ${c}, a = ${a}, and b = ${b}`);
    } else if (c > a && a > b) {
        console.log(`${b} is the smallest number, and ${c} is the biggest number between b = ${b}, a = ${a}, and c = ${c}`);
    } else if (c > b && b > a) {
        console.log(`${a} is the smallest number, and ${c} is the biggest number between a = ${a}, b = ${b}, and c = ${c}`);
    } else {
        console.log('There is something wrong with the logic. Check again');
    }
}

function seriesOfNumber(a, b) {
    for (var i = a; i >= b; i--) {
        console.log(i);
    }
    for (var j = a; j <= b; j++) {
        console.log(j);
    }
}
seriesOfNumber(8, 5);
//Problem 6 : ROCKET
var array = [
    [1, 2],
    [3, 4],
    [5, 6]
];


for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        console.log(array[i][j])
    }
}
// Problem 7: ROCKET
function getLeapYears(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 4 === 0 || i % 400 === 0 && i % 100 !== 0) {
            console.log(i)
        }
    }
}
getLeapYears(1899, 2001)
//Swapping values
function swappingValues() {
    var a = 111;
    var b = 999;
    var temp = 0;
    temp = a;
    a = b;
    b = temp;
    console.log(`Originally a = ${b}, b = ${a}. Now after swapping, a = ${a}, b = ${b}`);
}

//Magic-8-Ball 
function play() {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
play()