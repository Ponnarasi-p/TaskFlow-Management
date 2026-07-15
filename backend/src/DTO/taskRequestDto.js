class TaskRequestDto {

    constructor(body) {

        this.title = body.title?.trim();

        this.description = body.description?.trim();

        this.status = body.status || "TODO";

        this.priority = body.priority || "MEDIUM";

        this.dueDate = body.dueDate;

        this.assignedToId = Number(body.assignedToId);

        this.projectId = Number(body.projectId);

    }

}

module.exports = TaskRequestDto;