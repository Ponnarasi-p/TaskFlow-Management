class UserRequestDto {

    constructor(body) {

        this.name = body.name?.trim();

        this.email = body.email?.trim().toLowerCase();

        this.password = body.password;

        this.role = body.role || "EMPLOYEE";

    }

}

module.exports = UserRequestDto;