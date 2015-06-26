var lj = require('../libs/');

var yourObj = {
    'a': 'b',
    'c': 'd'
};

var output = lj(yourObj, '\n');

console.log(output);
var obj = {
    'a': 1,
    'b': 2,
    'c': {
        'd': 3,
        'e': 'f'
    },
    'g': 'h'
};

console.log("start to complex");
console.log(lj(obj, '', 1));
console.log('a1b2c{"d":3,"e":"f"}gh');
console.log(lj(obj));
