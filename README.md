⚠️ Obsolete action - please use [nemerosa/ontrack-github-actions-cli-setup](https://github.com/nemerosa/ontrack-github-actions-cli-setup) instead.

# Ontrack Init action

<a href="https://github.com/actions/javascript-action/actions"><img alt="javascript-action status" src="https://github.com/actions/javascript-action/workflows/build/badge.svg"></a>

This action makes sure the GitHub repository is ready to access Ontrack and sets up some
outputs & environment variables for being used by other Ontrack GitHub actions.

## Usage

```yaml
uses: nemerosa/ontrack-github-action-init@v1
```

## Prerequisites

The following secrets must be set:

* `ONTRACK_URL` - URL to the Ontrack instance to target
* `ONTRACK_TOKEN` - authentication token to use

Note that only Ontrack version 4 and above is supported.

## Outputs

| Output name | Environment variable | Description |
|---|---|---|
| `repository` | `ONTRACK_GITHUB_REPOSITORY` | Contains only the name of the GitHub repository, without the user or the organization. |

## Development

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test
  ✓ test runs (95ms)
...
```

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```

## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
