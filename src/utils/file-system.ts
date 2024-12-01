import { join } from 'node:path'
import { readFileSync } from 'node:fs'

export function readFileByDay(day: string, useExample: boolean = false) {
    const fileName = useExample ? 'example' : 'input'
    const filePath = join(
        import.meta.dirname,
        '..',
        `day-${day}`,
        'resources',
        `${fileName}.txt`,
    )

    return readFileSync(filePath, 'utf-8')
}
