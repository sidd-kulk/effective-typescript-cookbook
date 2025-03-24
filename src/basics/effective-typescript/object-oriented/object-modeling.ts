
interface Task {
    name: string
    startDate: Date
    endDate: Date
    description: string
}

interface TaskList {
    name: string
    tasks: Task[]
}
