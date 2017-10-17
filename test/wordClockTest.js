var assert = require('assert');
const clock = require('../wordClock.js');

describe('Minutes Words', function () {
    it('Should a multiple of 5 to one of the defined phrases', function () {
        assert.equal(clock.minutesWords[0], clock.minutesToWords(0));
        assert.equal(clock.minutesWords[1], clock.minutesToWords(5));
        assert.equal(clock.minutesWords[11], clock.minutesToWords(55));
    });
});

describe('Rounding hours', function () {
    it('Should return the hour if minutes are 30 or less and hour++ if minutes are 31 or more', function () {
        assert.equal(clock.roundHours(new Date(1969, 9, 19, 1, 29)), 1, 'Minutes are 29, hour is 1, should return 1');
        assert.equal(clock.roundHours(new Date(1969, 9, 19, 13, 29)), 1, 'Minutes are 29, hour is 13, should return 1');
        assert.equal(clock.roundHours(new Date(1969, 9, 19, 0, 29)), 0, 'Minutes are 29, hour is 0, should return 0');
        assert.equal(clock.roundHours(new Date(1969, 9, 19, 23, 31)), 0, 'Minutes are 31, hour is 23, should return 0');
    });
});

describe('Rounding minutes', function () {
    it('Should return the number rounded to the nearest 5', function () {
        assert.equal(clock.roundMinutes(58), 0, '58 should round to 0.');
        assert.equal(clock.roundMinutes(57), 55, '57 should round to 55.');
        assert.equal(clock.roundMinutes(56), 55, '56 should round to 55.');
        assert.equal(clock.roundMinutes(55), 55, '55 should round to 55.');
        assert.equal(clock.roundMinutes(54), 55, '54 should round to 55.');
        assert.equal(clock.roundMinutes(53), 55, '53 should round to 55.');
        assert.equal(clock.roundMinutes(52), 50, '52 should round to 50.');
        assert.equal(clock.roundMinutes(0), 0, '0 should round to 0.');
        assert.equal(clock.roundMinutes(1), 0, '1 should round to 0.');
        assert.equal(clock.roundMinutes(2), 0, '2 should round to 0.');
        assert.equal(clock.roundMinutes(3), 5, '3 should round to 5.');
        assert.equal(clock.roundMinutes(7), 5, '7 should round to 5.');
    });
});