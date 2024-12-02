import { and, curry, gte, lt, pipe, subtract } from 'ramda'

/**
 * Calculates the absolute difference between two numbers,
 * i.e. 10 and 5 differ by 5.
 */
export const absoluteDifference = pipe(subtract, Math.abs)

/**
 * Returns true, if n is greater than or equal to min and less than max.
 */
export const between = curry((min: number, max: number, n: number) =>
    and(lt(n, max), gte(n, min)),
)
