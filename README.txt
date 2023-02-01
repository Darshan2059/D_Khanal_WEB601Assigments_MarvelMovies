Name: Darshan Khanal

This application will be about Marvel movies
Created a Angular webapplication

Added the ability to run the following from the terminal in m project:
npm run-script generatecomponent to generate a component
npm run-script generatepipe to generate a pipe
npm run-script generatedirective to generate a directive

Added a folder inside of your app folder called helper-files

Added a file to the helper-files folder called content-interface.ts

Inside of this new file,I defined an interface called Content with the following parameters:
id as a number
title as a string
description as a string
creator as a string
imgURL as an optional string
type as an optional string
tags as an optional array of strings

Created another file inside of the helper-files folder called content-list.ts that
contains a class named ContentList, with the following attributes and methods:
A private array of type Content
A constructor that initially sets the array to be empty
A getter function that returns your Content array
An add function that adds 1 Content item to the end of the array
A function that returns the number of items in the array
A function that takes an input of an index of the array and returns a reader-friendly html
output of a Content item's properties at that index (title, description, creator, imgURL
and type).

Generated a new component called Content-card

In my Content-card's components defintion, created an instance of ContentList
and add at 3 valid items to it using the ContentList's add function in the Contentcard's constructor.

Displayed the contents of ContentList in Content-Card component's html,
utilizing the function you defined in the ContentList class.

Added Content-Card component to the default app-component, so that it can be
displayed on the home page of your application.

Uploaded whole finished web app in github
