import {
    apply,
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
    zip,
} from 'ramda'
import { readFileByDay, reportSolution } from '~utils'
import { EOL } from 'node:os'

const lists = pipe(
    trim,
    split(EOL),
    map(split(/\s+/)),
    transpose,
    map(map(parseInt)),
)(readFileByDay('01', true))

const task1 = pipe(
    map(sort((a: number, b: number) => a - b)),
    converge(zip, [head, last]),
    map(pipe(apply(subtract), Math.abs)),
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
