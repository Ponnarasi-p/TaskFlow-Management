class ProjectRequestDto {

    constructor(body) {

        this.name = body.name?.trim();

        this.description = body.description?.trim();

    }

}

module.exports = ProjectRequestDto;