

class Queue<T> {
    protected list: T[];

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

    join(separator: string): string {
        return this.list.join(separator)
    }
}

class PriorityQueue<T> extends Queue<T> {
    private priorityList: number[];

    constructor() {
        super()
        this.priorityList = []
    }

    add(element: T): void;
    add(element: T, priority?: number): void {
        this.list.push(element)
        this.priorityList.push(priority ?? 0)
    }

    pop(): T {
        if (this.list.length === 0) {
            return null
        }
        const index = this.priorityList.indexOf(Math.max(...this.priorityList))
        const element = this.list[index]
        this.list.splice(index, 1)
        this.priorityList.splice(index, 1)
        return element
    }
}