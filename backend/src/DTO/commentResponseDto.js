class CommentResponseDto {

    constructor(comment) {

        this.id = comment.id;

        this.comment = comment.comment;

        this.user = comment.user;

        this.task = comment.task;

        this.createdAt = comment.createdAt;

    }

}

module.exports = CommentResponseDto;