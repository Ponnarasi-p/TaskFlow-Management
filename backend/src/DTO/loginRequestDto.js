class LoginRequestDto {

    constructor(body) {

        this.email = body.email?.trim();

        this.password = body.password;

    }

}

module.exports = LoginRequestDto;