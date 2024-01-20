// const core = require('@actions/core');
// const github = require('@actions/github');
// const octokit = github.getOctokit(process.env.GITHUB_TOKEN || '');

// octokit.rest.git.createTree({
//   owner: github.context.repo.owner,
//   repo: github.context.repo.repo,
//   tree: jazzy,
// });

const { execSync } = require('child_process');

try {
  const baseBranch = process.env.BASE_BRANCH || 'rolling';
  const newBranch = process.env.NEW_BRANCH || 'jazzy';

  // Checkout the base branch
  execSync(`git checkout -b ${newBranch} ${baseBranch}`);

  // Push the new branch to the repository
  execSync(`git push origin ${newBranch}`);

  console.log(`Branch ${newBranch} created and pushed successfully.`);
} catch (error) {
  console.error('Error creating and pushing branch:', error.message);
  process.exit(1);
}
