// const assert = require('chai').assert;
// const { describe, it } = require('mocha'); // Importing 'it' from mocha
import { assert } from 'chai';
import { describe, it } from 'mocha';
import {multiply} from '../app.js';

describe ('App', function(){
    it('should return 1', function(){
        assert.equal(multiply(1, 1), 1);
    })

    it('should return 0 when multiplying with 0', function() {
        assert.equal(multiply(5, 0), 0);
    });

    // Add more test cases as needed
})





    

