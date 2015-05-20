`literal-joiner` is used for sample join literal json object as array.

### example ###

```
  describe('only string elements', function(){
    it('return an joint string no separater', function(){
      var obj = {'a':'b','c':'d'};
      lj(obj).should.eql('abcd');
    });
    it('return an joint string with separater', function(){
      var obj = {'a':'b','c':'d'};
      lj(obj, ',').should.eql('a,b,c,d');
    });
  });
  describe('complex primitive type only elements', function(){
    it('return an joint string no separater', function(){
      var obj = {'a': 1,'b':2 };
      lj(obj).should.eql('a1b2');
    });
    it('return an joint string with separater', function(){
      var obj = {'a': 1,'b':2 };
      lj(obj, ',').should.eql('a,1,b,2');
    });
  });
  describe('complex type elements', function(){
    it('return an joint string no separater', function(){
      var obj = {'a': 1,'b':2, 'c':{ 'd': 3, 'e':'f'},'g':'h' };
      lj(obj).should.eql('a1b2cd3efgh');
    });
    it('return an joint string with separater', function(){
      var obj = {'a': 1,'b':2, 'c':{ 'd': 3, 'e':'f'},'g':'h' };
      lj(obj, ',').should.eql('a,1,b,2,c,d,3,e,f,g,h');
    });
  });
```
