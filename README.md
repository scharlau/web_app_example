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
After we start to write the index.html file we should start to put some testing tools into place so that we're sure our html is valid and accessible. We can add [linthtml](https://github.com/linthtml/linthtml) with the command 

        npm install @linthtml/linthtml --save-dev

The --save-dev option tells npm that we only want this included for our development side of the work, and should not be included in production. Now we need to add a configuration file, which we generate with the command: 

        npx linthtml --init

Pick the format, you prefer, and then add the file to your git repo. Now we can run the linter with the command:

        npx linthtml 'index.html'

After we run this, we can see that the file is ok with no errors. There is also a version of this that integrates into VS Code so that you can see errors as you make them when coding up your html files. You'll find it in the 'extensions' menu on the far-left of the application. 

## Issues with Images
While we can easily add an image with image tag, we also need to consider the image display size, and the alternative text that is used if images are turned off, or used with a screen reader. We can either edit the photo to the size we want, and/or add dimensions to the img tag. If we open the index.html file without any dimension values in the img tag, we can see the problem.

If we change the img take to be like this, and then reload the page, then it resizes the images for display based on the width so that the height is relative.

        <img src="assets/images/kelpies.jpg" width="300" alt="cultural scene">

However, this is still using the full image in the background, so if the filesize mattered, then we'd want to resize the images to be 300 pixels wide (or whatever we decided to use). We could use [Gimp](https://www.gimp.org) which is similar to Photoshop, but free as an open source application, so works across different platforms. It will work fine for resizing, and creating images to use for applications.

## Loading pages with a web server
While we can load the pages in the browser straight from the folder, as the application grows, it would be better to have them served from a small web server so that we can experience their flow and connections as our web page visitors will later. We can instll [http-server](https://www.npmjs.com/package/http-server) as a small and lightweight web server to use for testing our pages. 

We can use this command to run the server from the root of our directory and therefore server up the pages using our file and folder structure. Use this command in the terminal:

        npx http-server 

This will start the server in the current directory and then tell you its URL as 127.0.0.1:8080 which is also known as localhost:8080 which means you'll see the index page there due to the convention that web servers always look for 'index' by default in a folder.