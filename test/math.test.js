const {describe, it} =require('mocha')
const {expect} = require('chai')

const {add, multi, devide, subt} = require('../src/math')


describe('Math', () => {
    describe('add', () => {
        it('should return correct value', () => {
					const result = add(1, 2)
					expect(result).to.equal(1 + 2)
        })
    })
})