'use strict';

const collection = require('../src/models/lip/collection');
describe('collection ', ()=> {
    it('constructor()', ()=> {
        let item = 'Hello Customer';
        let customer = new collection(item);
        expect(customer.data).toEqual(item);
        
    }) 
});