import { pipe, subtract } from 'ramda'

/**
 * Calculates the absolute difference between two numbers,
 * i.e. 10 and 5 differ by 5.
 */
export const absoluteDifference = pipe(subtract, Math.abs)
