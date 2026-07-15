const commentRepository = require("../repositories/commentRepository");
const userRepository = require("../repositories/userRepository");
const taskRepository = require("../repositories/taskRepository");

const CommentResponseDto = require("../DTO/commentResponseDto");

const ApiError = require("../errors/ApiError");
const HTTP_STATUS = require("../constants/httpStatusConstants");
const MESSAGES = require("../constants/messages");
const ROLES = require("../constants/roles");

const createComment = async (taskId, userId, commentDto) => {

    if (isNaN(Number(taskId))) {

        throw new ApiError(
            HTTP_STATUS.BAD_REQUEST,
            MESSAGES.TASK.INVALID_TASK_ID
        );

    }

    const task = await taskRepository.getTaskById(taskId);

    if (!task) {

        throw new ApiError(
            HTTP_STATUS.NOT_FOUND,
            MESSAGES.TASK.TASK_NOT_FOUND
        );

    }

    const user = await userRepository.getEmployeeById(userId);

    if (!user) {

        throw new ApiError(
            HTTP_STATUS.NOT_FOUND,
            MESSAGES.USER.EMPLOYEE_NOT_FOUND
        );

    }

    const comment = await commentRepository.createComment({

        comment: commentDto.comment,

        taskId: Number(taskId),

        userId

    });

    return new CommentResponseDto(comment);

};

const getCommentsByTaskId = async (taskId) => {

    if (isNaN(Number(taskId))) {

        throw new ApiError(
            HTTP_STATUS.BAD_REQUEST,
            MESSAGES.TASK.INVALID_TASK_ID
        );

    }

    const task = await taskRepository.getTaskById(taskId);

    if (!task) {

        throw new ApiError(
            HTTP_STATUS.NOT_FOUND,
            MESSAGES.TASK.TASK_NOT_FOUND
        );

    }

    const comments =
        await commentRepository.getCommentsByTaskId(taskId);

    return comments.map(comment =>
        new CommentResponseDto(comment)
    );

};

const updateComment = async (

    id,

    user,

    commentDto

) => {

    if (isNaN(Number(id))) {

        throw new ApiError(
            HTTP_STATUS.BAD_REQUEST,
            MESSAGES.COMMENT.INVALID_COMMENT_ID
        );

    }

    const comment =
        await commentRepository.getCommentById(id);

    if (!comment) {

        throw new ApiError(
            HTTP_STATUS.NOT_FOUND,
            MESSAGES.COMMENT.COMMENT_NOT_FOUND
        );

    }

    if (

        user.role !== ROLES.ADMIN &&

        comment.user.id !== user.id

    ) {

        throw new ApiError(

            HTTP_STATUS.FORBIDDEN,

            MESSAGES.COMMENT.UPDATE_NOT_ALLOWED

        );

    }

    const updatedComment =
        await commentRepository.updateComment(id, {

            comment: commentDto.comment

        });

    return new CommentResponseDto(updatedComment);

};

const deleteComment = async (

    id,

    user

) => {

    if (isNaN(Number(id))) {

        throw new ApiError(
            HTTP_STATUS.BAD_REQUEST,
            MESSAGES.COMMENT.INVALID_COMMENT_ID
        );

    }

    const comment =
        await commentRepository.getCommentById(id);

    if (!comment) {

        throw new ApiError(
            HTTP_STATUS.NOT_FOUND,
            MESSAGES.COMMENT.COMMENT_NOT_FOUND
        );

    }

    if (

        user.role !== ROLES.ADMIN &&

        comment.user.id !== user.id

    ) {

        throw new ApiError(

            HTTP_STATUS.FORBIDDEN,

            MESSAGES.COMMENT.DELETE_NOT_ALLOWED

        );

    }

    return await commentRepository.deleteComment(id);

};

module.exports = {

    createComment,

    getCommentsByTaskId,

    updateComment,

    deleteComment

};