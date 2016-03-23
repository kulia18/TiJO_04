describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('Max array function', function(){
        it('should return false when array contains not a numer', function () {
            expect(app.maxArray([1,'asd',3,2,1,1])).toEqual(false);
        });
        it('should return max number contain in array', function () {
            expect(app.maxArray([1,'asd',3,2,1,1])).toEqual(false);
        });
        it('should return false when array is empty', function () {
            expect(app.maxArray([])).toEqual(false);
        });
    });
    
    describe('Square Odd function', function(){
        it('should return false if array contains not a numer', function () {
            expect(app.squareOdd([1,'asd',3,2,1,1])).toEqual(false);
        });
        it('should return max number contain in array', function () {
            expect(app.squareOdd([1,'asd',3,2,1,1])).toEqual(false);
        });
        it('should return just strings', function(){
            expect(app.squareOdd(['a','b','c'])).toEqual(['a','b','c']);
        });
    });
});
