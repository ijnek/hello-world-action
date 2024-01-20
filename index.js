const core = require('@actions/core');
const github = require('@actions/github');
const octokit = github.getOctokit(process.env.GITHUB_TOKEN || '');

octokit.rest.git.createTree({
  owner: github.context.repo.owner,
  repo: github.context.repo.repo,
  tree: jazzy,
});

