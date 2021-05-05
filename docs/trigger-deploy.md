---
id: trigger-deployment-actions
title: Triggering deployment with GitHub Actions
description: This helpful guide to use github command.
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

<div className="content-banner">
  <p>
    Welcome to the very start of your Github Action journey! If you're looking for environment setup instruction.
  </p>
  <img className="content-banner-img" src="/docs/assets/docusaurus.svg" alt=" " />
</div>

## Triggering deployment with GitHub Actions {#triggering-deployment-with-github-actions}

[GitHub Actions](https://help.github.com/en/actions) allow you to automate, customize, and execute your software development workflows right in your repository.

This workflow assumes your documentation resided in `documentation` branch of your repository and your [publishing source](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) is configured for `gh-pages` branch.

1. Generate a new [SSH key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
1. By default, your public key should have been created in `~/.ssh/id_rsa.pub` or use the name you've provided in the previous step to add your key to [GitHub deploy keys](https://developer.github.com/v3/guides/managing-deploy-keys/).
1. Copy key to clipboard with `xclip -sel clip < ~/.ssh/id_rsa.pub` and paste it as a [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) in your repository. Copy file content if the command line doesn't work for you. Check the box for `Allow write access` before saving your deployment key.
1. You'll need your private key as a [GitHub secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) to allow Docusaurus to run the deployment for you.
1. Copy your private key with `xclip -sel clip < ~/.ssh/id_rsa` and paste a GitHub secret with name `GH_PAGES_DEPLOY`. Copy file content if the command line doesn't work for you. Save your secret.
1. Create you [documentation workflow file](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#creating-a-workflow-file) in `.github/workflows/`. In this example it's `documentation.yml`.

```yaml title="documentation.yml"
name: documentation

on:
  pull_request:
    branches: [documentation]
  push:
    branches: [documentation]

jobs:
  checks:
    if: github.event_name != 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "12.x"
      - name: Test Build
        run: |
          if [ -e yarn.lock ]; then
          yarn install --frozen-lockfile
          elif [ -e package-lock.json ]; then
          npm ci
          else
          npm i
          fi
          cd website/
          yarn build
  gh-release:
    if: github.event_name != 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "12.x"
      - uses: webfactory/ssh-agent@v0.5.0
        with:
          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}
      - name: Release to GitHub Pages
        env:
          USE_SSH: true
          GIT_USER: git
        run: |
          git config --global user.email "gongzhe@live.com"
          git config --global user.name "thebestornothing"
          if [ -e yarn.lock ]; then
          yarn install --frozen-lockfile
          elif [ -e package-lock.json ]; then
          npm ci
          else
          npm i
          fi
          cd website/
          GIT_USER=thebestornothing yarn deploy
```

1. Now when a new pull request arrives towards your repository in branch `documentation` it will automatically ensure that Docusaurus build is successful.
1. When pull request is merged to `documentation` branch or someone pushes to `documentation` branch directly it will be built and deployed to `gh-pages` branch.
1. After this step, your updated documentation will be available on the GitHub pages.

>Notice: The gh-release job will be triggerred when you commit the change directly to the `documentation` branch.
---

Now that you know how this guide works, it's time to get to know the foundation of Docusaurus: [Native Components](intro-react-native-components.md).
