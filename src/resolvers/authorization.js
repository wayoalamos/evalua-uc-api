const { combineResolvers, skip } = require('graphql-resolvers');

const { roles } = require('../consts');


const isAuthenticated = (parent, args, { me }) => (me ? skip : new Error('Not authenticated as user.'));

const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) => (role === roles.ADMIN
    ? skip
    : new Error('Not authorized as admin.')),
);


module.exports = { isAuthenticated, isAdmin };
