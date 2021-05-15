---
id: build-docusarurs-website
title: Build Docusarurs Website
description: This helpful guide to build your own github page with docusaurus.
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

<div className="content-banner">
  <p>
    Welcome to the very start of your Docusaurus journey! If you're looking for environment setup instructions, they've moved to <a href="https://docusaurus.io">Docusaurus</a> their own section. Continue reading for an introduction to the documentation, api, showcase, and more!
  </p>
  <img className="content-banner-img" src="/docs/assets/Docusaurus/docusaurus.svg" alt=" " />
</div>

This helpful guide for building your own github page with docusaurus.Many different kinds of people use Docusaurus: from advanced developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.

## Prerequisites

To work with docusaurus, you will need to have an domain name like www.gitcoins.io and github account.

> please use [GoDaddy](https://sg.godaddy.com/) to apply an IO domain -)

> While we do our best to assume no prior knowledge of JS, React, or H5, these are valuable topics of study for the aspiring website developer.

## Fork an website

To build a website ASAP, First to fork an website which powered by docusaurus. The React Native website is selected and chosen. So fork from [facebook/react-native-website](https://github.com/facebook/react-native-website) and rename repository as [www.gitcoins.io](https://github.com/vulnsystem/www.gitcoins.io).

## Clone the repository

```
git clone https://github.com/vulnsystem/www.gitcoins.io
cd www.gitcoins.io
yarn install
cd website
yarn run build
yarn start
```

open the link of website http://localhost:3000/ .

## Adapte docus configuration

To adapte the key properties in the docusaurus.config.js in website dir.

```
module.exports = {
  organizationName: 'vulnsystem',
  projectName: 'www.gitcoins.io',
  url: 'https://www.gitcoins.io',
  baseUrl: '/'
}
```

| Property Name    | Description                                                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | The GitHub user or organization that owns the repository. If you are the owner, it is your GitHub username. In the case of Docusaurus, it is "facebook" which is the GitHub organization that owns Docusaurus. |
| projectName      | The name of the GitHub repository. For example, the repository name for Docusaurus is "docusaurus", so the project name is "docusaurus".                                                                       |
| url              | URL for your GitHub Page's user/organization page. This is commonly https://_username_.github.io.                                                                                                              |
| baseUrl          | Base URL for your project. For projects hosted on GitHub pages, it follows the format "/projectName/". For https://github.com/facebook/docusaurus, baseUrl is /docusaurus/.                                    |

## Adapte CNAME configuration

To adapt the CNAME file in the website/static directory.

```
www.gitcoins.io
```

## Check the adaption

```
cd website
yarn run build
yarn start
```

## Deploy

```
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

The files in website/build will check into the gh-pages branche.

## Custom domain

Navigate to your DNS provider and create a CNAME record that points your subdomain to the default domain for your site. For example, if you want to use the subdomain www.gitcoins.io for your organization site, create a CNAME record that points www.gitcoins.io to vulnsystem.github.io.
Create www CNAME record in the domain service management.
record hostname: www
record type: CNAME
record value: vulnsystem.github.io

## Github page configure

repository -> settings -> pages -> Custom domain
To add the www.vulnsystem.com in the custom domain section.

> [To Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

> [You can customize the domain name of your GitHub Pages site.n](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

Now that you know how this guide works, it's time to get to know the foundation of Docusaurus: [Native Components](intro-react-native-components.md).
