import chalk from 'chalk'

const PREFIX = chalk.bold.blue('[AOC]')
const NOT_SOLVED = chalk.gray('Not solved, yet.')

export function log(message: string, ...args: unknown[]) {
    return console.log(PREFIX, `${message}`, ...args)
}

export function reportSolution(task1?: unknown, task2?: unknown) {
    log(chalk.bold.blue('Solution'))
    log('Task 1:', task1 ?? NOT_SOLVED)
    log('Task 2:', task2 ?? NOT_SOLVED)
    log(chalk.blue('--------'))
}
