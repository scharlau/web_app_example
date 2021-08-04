# A Web App Example
A simple web app example highlighting tools and components

## Background 
This is a demo app to see how you might use a variety of development tools to build a modern web application.

## Getting Started
You should have a suitable editor such as [Visual Studio Code](https://code.visualstudio.com), which is useful given its' integrated terminal.
You should also install [Node Package Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) which you install via Node Version Manager [nvm](https://github.com/nvm-sh/nvm), which aslo lets you install other tools and libraries to make your work easier. 

Update nvm by rerunning the install command, and use 'npm update -g' to update to the newest version and also update/remove other associated libraries.

## Building the Site
With these in place (or updated as needed, we can move onto putting the folders and files in place. The site will be a quiz site where visitors can see which type of place they like to visit most when they need to recharge their energy to stay healthy. 

You can use the [Mozilla Color Picker Tool](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool) to determine your colours for the site. Find your colours and then note their RGB, HSL and HEXA values somewhere suitable so that you know them later for use in your CSS files.

Find a font that you want to use at [Google Fonts](https://fonts.google.com). Save the code that you eventually get to, so that you can add the fonts to your site. For example, these are the 'family settings' for Open Sans:

    link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    CSS rules to specify families
    font-family: 'Open Sans', sans-serif;

This has an Apache licence, so it's free to use. https://fonts.google.com/specimen/Open+Sans#license 

## Starting the HTML and 
After we start to write the index.html file we should start to put some testing tools into place so that we're sure our html is valid and accessible. We can add [html-lint](https://www.npmjs.com/package/html-lint) with the command 

        npm install html-lint -g

We can then use it with the command:

        html-lint <url> <filename>

