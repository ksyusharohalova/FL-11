const two = 2, three = 3, fife =5, eight = 8, tho = 1000, six = 60, tw_fo = 24;

//0
function getNumbers(len) {
    let mas = [];
    for (let i =0; i<len.length;i++) {
        let elem = parseInt(len[i]);
        if (!isNaN(elem)) {
            mas.push(elem);
        }
    }
    return mas;
}
console.log(getNumbers(`n1um3ber95`));
//1
function findTypes() {
    let counter = {};
    for (let i =0; i<arguments.length;i++) {
        let keyData = typeof arguments[i];
        if (counter[keyData]) {
            counter[keyData] ++;
        } else {
            counter[keyData] = 1;
        }
    }
    return counter;
}
console.log(findTypes(null, fife, `hello` ));
//2
function executeForEach(array1, secondFunction) {
    for (let i = 0; i < array1.length; i++) {
        secondFunction(array1[i]);
    }
}
console.log(executeForEach([1,two,three], function(element) {
    console.log(element)
}));
//3
function mapArray(array1, secondFunction) {
    let array2 =[];
    executeForEach(array1, function (element) {
        array2.push(secondFunction(element))
    });
    return array2;
}
console.log(mapArray([two, fife, eight], function(element) {
    return element + three
}));
//4
function filterArray(array1) {
    let array2 =[];
    executeForEach(array1, function (element) {
        if (element > three) {
            array2.push(element);
        }
    });
    return array2;
}
console.log(filterArray([two, fife, eight]));
//5
function showFormattedDate(date) {
    let monthNames = [`Jan`,`Feb`,`Mar`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Now`,`Dec`];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return `Date: `+ day + ` ` + monthNames[monthIndex] + ` ` + year;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
//6
function canConvertToDate (date1) {
    let date2 = Date.parse(date1);
    return !!date2;
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
//7
const _MS_PER_DAY = tho * six * six * tw_fo;
function daysBetween(firstDate, secondDate) {
    const utc1 = Date.UTC(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
    const utc2 = Date.UTC(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
// test it
const firstDate = new Date('2016-03-18T00:00:00'),
    secondDate = new Date('2016-04-19T00:00:00'),
    difference = daysBetween(firstDate, secondDate);
console.log(difference);
//8
let persons = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': two,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': three,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
function getAmountOfAdultPeople(persons) {
   let personAdult =[];
   const year =365;
   for (let i =0; i<persons.length; i++ ) {
       let over18 = Math.floor(daysBetween(new Date(persons[i].birthday), new Date())/year);
       personAdult.push(over18);
   }
}
console.log(getAmountOfAdultPeople('27/06/1989'));
//9
function keys(keyCount) {
    let arrayOfKeys = [];
    for (let key in keyCount){
        if (keyCount.hasOwnProperty(key)){
            arrayOfKeys.push(key);
        }
    }
    return arrayOfKeys;
}
console.log(keys({keyOne: 1, keyTwo: two, keyThree: three}));
//10
function values(valueCount) {
    let arrayOfValue = [];
    for (let key in valueCount){
        if (valueCount.hasOwnProperty(key)){
            arrayOfValue.push(valueCount[key]);
        }
    }
    return arrayOfValue;
}
console.log(values({keyOne: 1, keyTwo: two, keyThree: three}));