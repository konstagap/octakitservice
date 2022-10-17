const { Octokit } = require('octokit');

class GitHub {
  constructor(token) {
    this.octokit = new Octokit({ auth: token });
  }

  async getIssueById({ owner, repo, issue_number }) {
    const resp = await this.octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
      owner,
      repo,
      issue_number,
    });

    console.log('--Whole resp------------------------------');
    console.dir({ resp: resp.data }, { depth: null });
    console.log('------------------------------------------');

    const { id, title, body } = resp.data;

    return { id, title, body };
  }
}

module.exports = GitHub;
