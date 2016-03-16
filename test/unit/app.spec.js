describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5);
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
    describe('Descending function', function () {
        it('should return descended number', function () {
            expect(app.getDescendingNumbers(10,0)).toEqual("10 9 8 7 6 5 4 3 2 1 0");
        });
        it('should return false when numberTo is string', function () {
            expect(app.getDescendingNumbers(10,'string')).toEqual(false);
        });
        it('should return false when numberTo is higher than numberFrom', function () {
            expect(app.getDescendingNumbers(10,12)).toEqual(false);
        });
        it('should return false when numberTo is equal to numberFrom', function () {
            expect(app.getDescendingNumbers(10,10)).toEqual(false);
        });
        it('should return false when numberFrom is string', function () {
            expect(app.getDescendingNumbers('string',12)).toEqual(false);
        });

    });

    describe('areaOfTrapezoid function', function(){ it('should return the result', function(){
        expect(app.areaOfTrapezoid(2,4,4)).toEqual(12) });
        it('should return false when a is less than 0', function(){
            expect(app.areaOfTrapezoid(-1,2,3)).toEqual(false) });
        it('should return false when b is less than 0', function(){
            expect(app.areaOfTrapezoid(1,-2,3)).toEqual(false) });
        it('should return false when c is less than 0', function(){
            expect(app.areaOfTrapezoid(1,2,-3)).toEqual(false) });
        it('should return false when a is not a number', function(){
            expect(app.areaOfTrapezoid('String',2,3)).toEqual(false) });
        it('should return false when b is not a number', function(){
            expect(app.areaOfTrapezoid(1,'String',3)).toEqual(false) });
        it('should return false when c is not a number', function(){
            expect(app.areaOfTrapezoid(1,2,'String')).toEqual(false) });
    });
});


