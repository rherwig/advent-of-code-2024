import assert from 'node:assert'
import { describe, it } from 'node:test'

import { absoluteDifference, between } from './math.ts'

describe('absoluteDifference', () => {
    it('calculates the difference correctly', () => {
        assert.equal(absoluteDifference(10, 5), 5)
        assert.equal(absoluteDifference(5, 10), 5)
        assert.equal(absoluteDifference(10, 10), 0)
    })
})

describe('between', () => {
    it('returns, if value is between boundaries', () => {
        assert.equal(between(0, 5, 0), true)
        assert.equal(between(0, 5, 3), true)
        assert.equal(between(0, 5, 5), false)
        assert.equal(between(0, 5, 6), false)
        assert.equal(between(0, 5, -1), false)
    })
})
