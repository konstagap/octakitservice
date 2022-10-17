const express = require('express');
const router = express.Router();
const ghController = require('../../controller/github-controller');

router.get('/github/:owner/:repo/issue/:issue_number', ghController.getIssue);
router.get('/github/:owner/:repo/issue/:issue_number/image', ghController.getImage);
router.post('/github/:owner/:repo/issue/:issue_number/comment', ghController.postComment);
router.post('/github/:owner/:repo/issue/:issue_number/identify', ghController.identifyImage);

module.exports = router;
