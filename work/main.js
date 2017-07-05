function pow (x,n) {
    var j = x;

    for (var i = 1; i < n; i++) {
        j *= x;
    }

    return j;
}

console.log ( pow(2, 5) );


function trueFalse (a,b) {
    return a === b;
}

console.log ( trueFalse (4,4) );


function cycleWhile () {
    var i = 0;

    while (i < 50) {
        i++;
        console.log (i);
    }
}

cycleWhile ();


function cycleFor () {
    var i;

    for (i = 1; i <= 50; i++) {
        console.log (i);
    }
}

cycleFor ();


function countries () {
    var obj = {
        'Оттава': 'Канада',
        'Киев': 'Украина'
    };

    for (key in obj) {
        console.log ( key + ' - это ' + obj[key] + '.' );
    }
}

countries ();


function cycle () {
    var arr = [2, 5, 9, 15, 0, 4];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 3 && arr[i] < 10) {
            console.log (  arr[i] );
        }
    }
}

cycle ();


function task12 (a) {
    var arr = ['я', 'учу', 'javascript', '!'];

    var str = arr.join(a);

    return str;
}

console.log ( task12 ('+') );
console.log ( task12 (' ') );


function task13 () {
    var num = [1, 2, 3];
    var letters = ['a', 'b', 'c'];

    var newArr = num.concat(letters);

    return newArr;
}

console.log ( task13 () );


function task14 () {
    var arr = ['a', 'b', 'c'];

    arr.push(1, 2, 3);

    return arr;
}

console.log ( task14 () );



function findElement (arr, elem) {
    if (arr.indexOf) {
        return arr.indexOf(elem);
    } else {
        return 'Not found';
    }
}

var num = [1, 3 ,5 ,9, 25, 37, 48, 101];

console.log ( findElement (num, 4) );

