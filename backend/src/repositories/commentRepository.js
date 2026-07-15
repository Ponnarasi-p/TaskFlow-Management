const commentDal = require("../DAL/commentDal");

const createComment = async (commentData) => {

    return await commentDal.createComment(commentData);

};

const getCommentsByTaskId = async (taskId) => {

    return await commentDal.getCommentsByTaskId(taskId);

};

const getCommentById = async (id) => {

    return await commentDal.getCommentById(id);

};

const updateComment = async (id, commentData) => {

    return await commentDal.updateComment(
        id,
        commentData
    );

};

const deleteComment = async (id) => {

    return await commentDal.deleteComment(id);

};

module.exports = {

    createComment,

    getCommentsByTaskId,

    getCommentById,

    updateComment,

    deleteComment

};