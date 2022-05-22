var express = require('express');
var router = express.Router();
const blogService = require('../Services/BlogService');
/* GET home page. */
router.get('/', blogService.getBlog);
router.post('/',  blogService.addBlog);
router.put('/',blogService.updateBlogAvis);
router.get('/:id', blogService.getById);
module.exports = router;
