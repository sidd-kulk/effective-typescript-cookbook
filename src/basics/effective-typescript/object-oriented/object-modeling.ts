
class Task {
    constructor(
        public name: string,
        public startDate: Date,
        public endDate: Date,
        public description: string,
        public done: boolean = false
    ) {}

    public isOverdue(): boolean {
        return this.endDate < new Date();
    }

    public isDueWithin(withinDate: Date): boolean {
        if(!withinDate || withinDate.getDate() < new Date().getDate() || withinDate.getDate() < this.endDate.getDate()) {
            return false
        }
        return this.endDate.getDate() - withinDate.getDate() <= 2; 
    }

    public markDone(): void {
        this.done = true;
    }
}

class TaskList {
    constructor(
        public name: string,
        public tasks: Task[] = []
    ) {}

    public addTask(task: Task): void {
        this.tasks.push(task);
    }

    public removeTask(task: Task): void {
        this.tasks = this.tasks.filter(t => t !== task);
    }

    public getDoneTasks(): Task[] {
        return this.tasks.filter(t => t.done);
    }
}

