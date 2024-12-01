import assert from 'node:assert'
import { describe, it } from 'node:test'

import { absoluteDifference } from './math.ts'

describe('absoluteDifference', () => {
    it('calculates the difference correctly', () => {
        assert.equal(absoluteDifference(10, 5), 5)
        assert.equal(absoluteDifference(5, 10), 5)
        assert.equal(absoluteDifference(10, 10), 0)
    })
})
