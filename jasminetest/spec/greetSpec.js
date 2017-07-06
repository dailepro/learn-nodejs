'user strick';

var greet = require('../src/greet');

describe('greet', function() {
    it('should greet the give name', function(){
        expect(greet('Joe')).toEqual('Hello Joe!');
    });

    it('should greet no-one special if no name is give', function(){
        expect(greet()).toEqual('Hello World!');
    });
});
