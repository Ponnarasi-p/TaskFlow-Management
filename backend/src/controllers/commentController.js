const commentService = require("../services/commentService");

const CommentRequestDto = require("../DTO/commentRequestDto");

const responseHandler = require("../utils/responseHandler");

const HTTP_STATUS = require("../constants/httpStatusConstants");

const MESSAGES = require("../constants/messages");

const asyncHandler = require("../utils/asyncHandler");

const createComment = asyncHandler(async (req, res) => {

    const commentDto =
        new CommentRequestDto(req.body);

    const result =
        await commentService.createComment(

            req.params.taskId,

            req.user.id,

            commentDto

        );

    return responseHandler.success(

        res,

        MESSAGES.COMMENT.COMMENT_CREATED,

        result,

        HTTP_STATUS.CREATED

    );

});

const getCommentsByTaskId = asyncHandler(async (req, res) => {

    const result =
        await commentService.getCommentsByTaskId(

            req.params.taskId

        );

    return responseHandler.success(

        res,

        MESSAGES.COMMENT.COMMENTS_FETCHED,

        result

    );

});

const updateComment = asyncHandler(async (req, res) => {

    const commentDto =
        new CommentRequestDto(req.body);

    const result =
       await commentService.updateComment(

    req.params.id,

    req.user,

    commentDto

);

    return responseHandler.success(

        res,

        MESSAGES.COMMENT.COMMENT_UPDATED,

        result

    );

});

const deleteComment = asyncHandler(async (req, res) => {

    const result =
        await commentService.deleteComment(

    req.params.id,

    req.user

);

    return responseHandler.success(

        res,

        MESSAGES.COMMENT.COMMENT_DELETED,

        result

    );

});

module.exports = {

    createComment,

    getCommentsByTaskId,

    updateComment,

    deleteComment

};