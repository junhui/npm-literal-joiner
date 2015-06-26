`literal-joiner` is used for sample join literal json object as array.

### installation ###

```js
npm install npm-literal-joiner

var lj = require('npm-literal-joiner');
// lj(object, separator, maxDepth)

var yourObj = {'a':'b','c':'d'};

// lj(yourObj) = 'abcd'
// lj(yourObj, ',') = 'a,b,c,d'
var obj = {
    'a': 1,
    'b': 2,
    'c': {
        'd': 3,
        'e': 'f'
    },
    'g': 'h'
};

// lj(obj, '', 1) = 'a1b2c{"d":3,"e":"f"}gh'

```

### example ###

```js
var lj = require('npm-literal-joiner');

describe('literal object', function() {
    describe('only string elements', function() {
        it('return an joint string no separater', function() {
            var obj = {
                'a': 'b',
                'c': 'd'
            };
            lj(obj).should.eql('abcd');
        });
        it('return an joint string with separater', function() {
            var obj = {
                'a': 'b',
                'c': 'd'
            };
            lj(obj, ',').should.eql('a,b,c,d');
        });
    });
    describe('complex primitive type only elements', function() {
        it('return an joint string no separater', function() {
            var obj = {
                'a': 1,
                'b': 2
            };
            lj(obj).should.eql('a1b2');
        });
        it('return an joint string with separater', function() {
            var obj = {
                'a': 1,
                'b': 2
            };
            lj(obj, ',').should.eql('a,1,b,2');
        });
    });
    describe('complex type elements', function() {
        it('return an joint string no separater', function() {
            var obj = {
                'a': 1,
                'b': 2,
                'c': {
                    'd': 3,
                    'e': 'f'
                },
                'g': 'h'
            };
            lj(obj).should.eql('a1b2cd3efgh');
            lj(obj, '', 1).should.eql('a1b2c{"d":3,"e":"f"}gh');
        });
        it('return an joint string no separater2', function() {
            var obj = {
                'a': 1,
                'b': 2,
                'c': {
                    'd': 3,
                    'e': {
                        'f': 4
                    }
                },
                'g': 'h'
            };
            lj(obj).should.eql('a1b2cd3ef4gh');
            lj(obj, '', 1).should.eql('a1b2c{"d":3,"e":{"f":4}}gh');
            lj(obj, '', 2).should.eql('a1b2cd3e{"f":4}gh');
        });
        it('return an joint string with separater', function() {
            var obj = {
                'a': 1,
                'b': 2,
                'c': {
                    'd': 3,
                    'e': 'f'
                },
                'g': 'h'
            };
            lj(obj, ',').should.eql('a,1,b,2,c,d,3,e,f,g,h');
        });
    });
});
```
