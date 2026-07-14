class ProjectResponseDto {

    constructor(project) {

        this.id = project.id;

        this.name = project.name;

        this.description = project.description;

    }

}

module.exports = ProjectResponseDto;