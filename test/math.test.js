const { describe, it } = require('mocha')
const { expect } = require('chai')

const { add, multi, devide, subt } = require('../src/math')


describe('Math', () => {
	describe('add', () => {
		it('should return correct value', () => {
			const result = add(1, 2)
			expect(result).to.equal(1 + 2)
		})
	})

	describe('multi', () => {
		it('should return correct value', () => {
			const result = multi(1, 2)
			expect(result).to.equal(2)
		})
	})

	describe('subt', () => {
		it('should return correct value', () => {
			const result = subt(1, 2)
			expect(result).to.equal(-1)
		})
	})

	describe('devide', () => {
		it('should return correct value', () => {
			const result = devide(1, 2)
			expect(result).to.equal(0.25)
		})
	})
})