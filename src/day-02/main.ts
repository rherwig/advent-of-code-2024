import { EOL } from 'node:os'
import {
    addIndex,
    all,
    aperture,
    apply,
    both,
    count,
    equals,
    includes,
    map,
    pipe,
    remove,
    split,
    trim,
} from 'ramda'
import { absoluteDifference, between, isSorted } from '~functions'
import { readFileByDay, reportSolution } from '~utils'

const input = readFileByDay('02', false)
const levelsList = pipe(
    trim,
    split(EOL),
    map(split(/\s+/)),
    map(map(parseInt)),
)(input)

const MIN_LEVEL_INCREMENT = 1
const MAX_LEVEL_INCREMENT = 3

/**
 * Splits a list into intersecting tuples.
 */
const toTuples: (xs: number[]) => [number, number][] = aperture(2)

/**
 * Returns true, if the delta between adjacent levels is at least MIN_LEVEL_INCREMENT
 * and at most MAX_LEVEL_INCREMENT.
 */
const hasValidLevelIncrements = pipe(
    toTuples,
    map(apply(absoluteDifference)),
    all(between(MIN_LEVEL_INCREMENT, MAX_LEVEL_INCREMENT + 1)),
)

/**
 * Returns true, if the list is sorted and has valid increments.
 */
const isReportSafe: (xs: number[]) => boolean = both(
    isSorted,
    hasValidLevelIncrements,
)

/**
 * Counts the number of safe reports.
 */
const task1 = pipe(map(isReportSafe), count(equals(true)))(levelsList)

const mapIndexed = addIndex<number>(map)

/**
 * Returns a boolean list of all levels inside a report, equaling true,
 * if removing the level would make the report safe.
 */
const findRemovableLevels: (xs: number[]) => boolean[] = mapIndexed(
    (_, index: number, xs: number[]) => {
        return isReportSafe(remove(index, 1, xs))
    },
)

/**
 * Finds the reports where removing one level would make it safe.
 */
const task2 = pipe(map(findRemovableLevels), count(includes(true)))(levelsList)

reportSolution(task1, task2)
