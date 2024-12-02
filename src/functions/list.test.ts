import assert from 'node:assert'
import { describe, it } from 'node:test'

import { isAscending, isDescending, isSorted } from './list.ts'

const LIST_ASCENDING = [1, 2, 3, 4, 5]
const LIST_DESCENDING = [5, 4, 3, 2, 1]
const LIST_EQUAL = [1, 1, 1, 1, 1]
const LIST_UNSORTED = [1, 3, 5, 4, 2]

describe('isAscending', () => {
    it('returns true, if list is sorted ascending', () => {
        assert.equal(isAscending(LIST_ASCENDING), true)
        assert.equal(isAscending(LIST_DESCENDING), false)
        assert.equal(isAscending(LIST_EQUAL), true)
        assert.equal(isAscending(LIST_UNSORTED), false)
    })
})

describe('isDescending', () => {
    it('returns true, if list is sorted descending', () => {
        assert.equal(isDescending(LIST_DESCENDING), true)
        assert.equal(isDescending(LIST_ASCENDING), false)
        assert.equal(isDescending(LIST_EQUAL), true)
        assert.equal(isDescending(LIST_UNSORTED), false)
    })
})

describe('isSorted', () => {
    it('returns true, if list is sorted', () => {
        assert.equal(isSorted(LIST_DESCENDING), true)
        assert.equal(isSorted(LIST_ASCENDING), true)
        assert.equal(isDescending(LIST_EQUAL), true)
        assert.equal(isDescending(LIST_UNSORTED), false)
    })
})
