const { describe, it } = require('mocha')
const { expect } = require('chai')

const {add, multi, devide, subt, compare} = require('../src/math')
const {fibonacci} = require('../src/fibo')


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
			expect(result).to.equal(0.5)
		})
	})

	describe('compare', () => {
		it('should return correct value', () => {
			const result = compare(1, 2)
			expect(result).to.equal(3)
		})

		it('should return correct value', () => {
			const result = compare(1, 1)
			expect(result).to.equal(2)
		})
	})
})