import { readFileByDay, reportSolution } from '~utils'
import {
    converge,
    count,
    equals,
    head,
    last,
    map,
    pipe,
    sort,
    split,
    subtract,
    sum,
    transpose,
    trim,
    zipWith,
} from 'ramda'
import { EOL } from 'node:os'
import { absoluteDifference } from '~functions'

const input = readFileByDay('01', false)

const lists = pipe(
    trim,
    split(EOL),
    map(split(/\s+/)),
    transpose,
    map(map(parseInt)),
)(input)

const task1 = pipe(
    map(sort(subtract)),
    converge(zipWith(absoluteDifference), [head, last]),
    sum,
)(lists)

const findOccurrencesAndMultiply = (list: number[][]): number[] => {
    const [sourceList, targetList] = list

    return map((sourceNumber) => {
        return count(equals(sourceNumber), targetList) * sourceNumber
    }, sourceList)
}

const task2 = pipe(findOccurrencesAndMultiply, sum)(lists)

reportSolution(task1, task2)
