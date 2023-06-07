const {
  getAll,
  addMessage,
} = require('../controllers/message');

// const { checkAuth } = require('../middlewares')
// eslint-disable-next-line func-names
module.exports = function (router) {
  router.get('/', getAll);
  router.post('/', addMessage);
};
