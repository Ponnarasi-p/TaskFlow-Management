class TaskResponseDto {

    constructor(task) {

        this.id = task.id;

        this.title = task.title;

        this.description = task.description;

        this.status = task.status;

        this.priority = task.priority;

        this.dueDate = task.dueDate;

        this.assignedTo = task.assignedTo;

        this.project = task.project;

    }

}

module.exports = TaskResponseDto;