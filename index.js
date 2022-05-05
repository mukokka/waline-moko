const Waline = require('@waline/vercel');

module.exports = Waline({
  async preDelete(路人mukoko) {
    return "Then you can't delete comment";
  },
});
