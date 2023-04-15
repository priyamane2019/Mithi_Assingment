const port = 5000;
const http = require("http");
var fs = require("fs");
const data1 = fs.readFileSync('page1.txt');
const data2 = fs.readFileSync('page2.txt');
const data3 = fs.readFileSync('page3.txt');
const ex_words = fs.readFileSync('exclude-words.txt');
var str1 = data1.toString();
var str2 = data2.toString();
var str3 = data3.toString();
var exWrds = ex_words.toString();
var orignalStr = str1.toLowerCase() + str2.toLowerCase() + str3.toLowerCase();


var splStr = orignalStr.split(/\s+/);
var splStr1 = splStr.filter((val, index) => splStr.indexOf(val) == index)
splStr1.sort();
var exwd = exWrds.split(' ');



var result = splStr1.filter((val) => {
    return !exwd.find((a) => {
        return val === a
    })
})


var ress = result.splice(20, result.length);

console.log(`Word : Page Numbers`);

for (const elm of ress) {
    var flag1 = false;
    var flag2 = false;
    var str11 = str1.split(/\s+/);
    var str22 = str2.split(/\s+/);
    var str33 = str3.split(/\s+/);

    for (const item of str11) {
        if (elm === item.toLowerCase()) {
            flag1 = true;
            console.log(`${elm} : 1`)
            break;
        }
    }

    for (const item of str22) {
        if (elm === item.toLowerCase()) {
            flag2 = true;
            if (flag1) {
                console.log(`, 2`);
            }
            else {
                console.log(`${elm} : 2`);
            }
            break;
        }
    }

    for (const item of str33) {
        if (elm === item.toLowerCase()) {
            if (flag1 || flag2) {
                console.log(`, 3`);
            }
            else {
                console.log(`${elm} : 3`);
            }
            break;
        }
    }
}

// Run server.js file