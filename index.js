const core = require('@actions/core');
const github = require('@actions/github');
const octokit = github.getOctokit(process.env.GITHUB_TOKEN || '');

try {
  await octokit.rest.git.createTree({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    tree: jazzy,
  });

} catch (err) {
  core.warning(`Failed to automatically add repo tag, manually tag with:   'git tag ${tag} ${github.context.sha}'`);
  core.debug(`${err}`);
  return false;
}
