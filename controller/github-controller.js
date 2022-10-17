const ApiError = require('../models/exception');
const GitHub = require('../models/github');
const ImageService = require('../service/image-service');

class GitHubController {
  // http://localhost:3000/api/github/hpcc-systems/Tombolo/issue/505
  async getIssue(req, res, next) {
    try {
      const { owner, repo, issue_number } = req.params;

      const gh = new GitHub(req.token);

      const data = await gh.getIssueById({ owner, repo, issue_number });

      res.status(200).json(data);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async getImage(req, res, next) {
    //localhost:3000/api/v1/github/btholt/complete-intro-to-react-v7/issue/6/image
    http: try {
      const { owner, repo, issue_number } = req.params;

      const gh = new GitHub(req.token);

      const { body } = await gh.getIssueById({ owner, repo, issue_number });

      const { error, result } = ImageService.isImgExists(body);
      // maybe we don`t need user to see it, but it would be good for developers
      if (error) console.error(error);

      res.status(200).json({ containsImage: result });
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  postComment(req, res, next) {
    // https://docs.github.com/en/rest/issues/comments#create-an-issue-comment
    // post any comment on any issue
    res.status(200).json({ status: 'OK' });
  }

  identifyImage(req, res, next) {
    // https://docs.github.com/en/rest/issues/comments#create-an-issue-comment
    // check if issue has images, if not throw error, if yes, write comment
    res.status(200).json({ status: 'OK' });
  }
}

module.exports = new GitHubController();
