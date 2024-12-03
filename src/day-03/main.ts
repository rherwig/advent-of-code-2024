import {
    apply,
    flatten,
    map,
    match,
    multiply,
    pipe,
    reduce,
    split,
    sum,
    test,
    trim,
} from 'rambda'
import { readFileByDay, reportSolution } from '~utils'

const NUMBER_PAIR_REGEX = /\d+,\d+/g
const MULTIPLICATION_REGEX = /mul\(\d+,\d+\)/g
const ALL_KEYWORDS_REGEX = /(do(?!n)|don't|mul\(\d+,\d+\))/g
const DONT_REGEX = /don't/g
const DO_REGEX = /do(?!n)/g

const input = readFileByDay('03', false)
const memory = pipe(trim)(input)

const extractNumbersFromStringAndMultiply = pipe(
    match(NUMBER_PAIR_REGEX),
    map(pipe(split(','), map(parseInt), apply(multiply))),
)

const task1 = pipe(
    match(MULTIPLICATION_REGEX),
    map(extractNumbersFromStringAndMultiply),
    flatten,
    sum,
)(memory)

const findEnabledInstructions = (text: string) => {
    let shouldDo = true

    return pipe(
        match(ALL_KEYWORDS_REGEX),
        reduce((result: string[], element: string) => {
            if (test(DONT_REGEX, element)) {
                shouldDo = false
                return result
            }

            if (test(DO_REGEX, element)) {
                shouldDo = true
                return result
            }

            return shouldDo ? result.concat(element) : result
        }, []),
    )(text)
}

const task2 = pipe(
    findEnabledInstructions,
    map(extractNumbersFromStringAndMultiply),
    flatten,
    sum,
)(memory)

reportSolution(task1, task2)
