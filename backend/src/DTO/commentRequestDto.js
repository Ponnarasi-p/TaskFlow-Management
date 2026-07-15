class CommentRequestDto {

    constructor(body) {

        this.comment = body.comment?.trim();

    }

}

module.exports = CommentRequestDto;