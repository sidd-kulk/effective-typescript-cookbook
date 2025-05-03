

class Queue<T> {
    private list: T[];

    constructor() {
        this.list = []
    }

    add(element: T): void {
        this.list.push(element)
    }

    peek(): T {
        if (this.list.length === 0) {
            return null
        }
        return this.list[0]
    }

    pop(): T {
        if (this.list.length === 0) {
            return null
        }
        return this.list.shift()
    }

    size(): number {
        return this.list.length
    }

    isEmpty(): boolean {
        return this.list.length === 0
    }

    clear(): void {
        this.list = []
    }
    toString(): string {
        return this.list.toString()
    }
    toArray(): T[] {
        return this.list
    }

    forEach(callback: (element: T, index: number) => void): void {
        this.list.forEach(callback)
    }
    map<U>(callback: (element: T, index: number) => U): U[] {
        return this.list.map(callback)
    }
    filter(callback: (element: T, index: number) => boolean): T[] {
        return this.list.filter(callback)
    }
    reduce<U>(callback: (accumulator: U, element: T, index: number) => U, initialValue: U): U {
        return this.list.reduce(callback, initialValue)
    }
    find(callback: (element: T, index: number) => boolean): T {
        return this.list.find(callback)
    }
    findIndex(callback: (element: T, index: number) => boolean): number {
        return this.list.findIndex(callback)
    }
    some(callback: (element: T, index: number) => boolean): boolean {
        return this.list.some(callback)
    }
    every(callback: (element: T, index: number) => boolean): boolean {
        return this.list.every(callback)
    }
    includes(element: T): boolean {
        return this.list.includes(element)
    }
    indexOf(element: T): number {
        return this.list.indexOf(element)
    }
    lastIndexOf(element: T): number {
        return this.list.lastIndexOf(element)
    }
    slice(start: number, end: number): T[] {
        return this.list.slice(start, end)
    }
    splice(start: number, deleteCount: number, ...items: T[]): T[] {
        return this.list.splice(start, deleteCount, ...items)
    }
    join(separator: string): string {
        return this.list.join(separator)
    }
    reverse(): T[] {
        return this.list.reverse()
    }
    sort(compareFn: (a: T, b: T) => number): T[] {
        // return a new array
        return this.list.slice().sort(compareFn)

    }
}