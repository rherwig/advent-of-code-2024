import { comparator, converge, equals, identity, or, sort } from 'ramda'

export const ascending = comparator((a: number, b: number) => a < b)
export const descending = comparator((a: number, b: number) => b < a)

export const isAscending = converge(equals, [identity, sort(ascending)])
export const isDescending = converge(equals, [identity, sort(descending)])

export const isSorted = converge(or, [isAscending, isDescending])
