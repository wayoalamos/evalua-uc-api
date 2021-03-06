const projectResolvers = require('./project');
const userResolvers = require('./user');
const feedbackResolvers = require('./feedback');
const campusResolvers = require('./campus');
const profesorResolvers = require('./profesor');
const courseResolvers = require('./course');
const lessonResolvers = require('./lesson');
const commentResolvers = require('./comment');
const likeResolvers = require('./like');
const evaluationResolvers = require('./evaluation');
const charasteristicResolvers = require('./charasteristic');

module.exports = [
  userResolvers,
  projectResolvers,
  feedbackResolvers,
  campusResolvers,
  profesorResolvers,
  courseResolvers,
  lessonResolvers,
  commentResolvers,
  likeResolvers,
  evaluationResolvers,
  charasteristicResolvers,
];
