---
title: "Build a blog with Hugo the easy way"
date: 2023-09-28
draft: false
summary: This is a placeholder blogpost, for now...
---

# Setting Up a Personal Blog with Hugo and Tailwind CSS: The Easy Way

# PLACEHOLDER

# PLACEHOLDER

# PLACEHOLDER

# PLACEHOLDER

This guide will walk you through setting up a blog with Hugo without relying on pre-made themes, giving you more control and flexibility over the design and functionality of your site. We will use Tailwind for the styling, since it's the fastest (and in 2023 the trendiest) way to get styled content on a page.

Step 1: Install Hugo
brew install hugo

For other installation methods, refer to the official Hugo documentation.

Step 2: Create a New Hugo Site
Navigate to the directory where you want to create your new Hugo site and run:

hugo new site myblog

Navigate to your new site directory:

cd myblog

Step 3: Set Up Tailwind CSS
Initialize a new Node.js project in your Hugo site directory:

npm init -y

Install the necessary packages for Tailwind CSS:

npm install tailwindcss postcss autoprefixer postcss-cli

Create a configuration file for PostCSS:

npx tailwindcss init -p

Configure Tailwind CSS in postcss.config.js:

module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
}
}

Create a CSS file for Tailwind CSS in the assets/css directory of your Hugo site:

```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Step 4: Create Layouts and Templates
4.1: Base Layout
Create a base layout in layouts/\_default/baseof.html with the basic HTML structure:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ .Title }}</title>
    {{ $styles := resources.Get "css/tailwind.css" | resources.PostCSS }}
    <link rel="stylesheet" href="{{ $styles.Permalink }}">
</head>
<body>
    {{ block "main" . }}{{ end }}
</body>
</html>
4.2: List and Single Layouts
Create list and single layouts to handle the rendering of your list of posts and individual posts, respectively:

layouts/\_default/list.html for your blog listing.
layouts/\_default/single.html for individual blog posts.
Step 5: Create Content
Create markdown files in the content directory, such as content/posts/my-first-post.md:

title: "My First Post"
date: 2023-09-29
This is my first blog post created with Hugo and styled with Tailwind CSS!

Step 6: Start Your Hugo Server
hugo server

Now, visit http://localhost:1313 to see your new Hugo site styled with Tailwind CSS!

Conclusion
Creating your own layouts and templates using Hugo and Tailwind CSS is a great way to build a modern, stylish blog or website with total control over design and functionality. Whether you’re a beginner or a more experienced developer, this combination of tools offers extensive customization to suit your needs. Happy coding!

```

```
