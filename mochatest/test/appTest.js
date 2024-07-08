// const assert = require('chai').assert;
// const { describe, it } = require('mocha'); // Importing 'it' from mocha

import { assert } from 'chai'; // Imports the assert module from Chai, which provides assertion methods to compare values and assert conditions
import { describe, it } from 'mocha'; // Imports the describe and it functions from Mocha. These functions are used to define test suites (describe) and individual tests (it).The describe function is used to group related test cases together into a test suite. It takes two parameters: a string (usually the name of the test suite) and a function that contains one or more it blocks.The it function is used to define an individual test case or specification within a describe block. It takes two parameters: a string (usually a description of what the test is checking) and a function that contains the test logic, including assertions.
import {multiply} from '../app.js';

describe ('App', function(){
    it('should return 1', function(){
        assert.equal(multiply(1, 1), 1);
    })

    it('should return 4', function() {
        assert.equal(multiply(2, 2), 4);
    });
    it('should return 9', function() {
        assert.equal(multiply(3, 3), 9);
    });
    it('should return 16', function() {
        assert.equal(multiply(4, 4), 16);
    });
    it('should return 23*25', function() {
        assert.equal(multiply(23, 45), 23*45);
    });

    // For adding more test cases 
})





    

