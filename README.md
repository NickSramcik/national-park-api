# National Park API

This web applitcation features a web api that stores national park data that can then be searched and explored by the user. A seperate admin page can be used to add new national park data or update old data. 

**Link to project:** https://national-park-api.netlify.app/

![Website preview](https://i.imgur.com/as4TcqX.png) -->

## How It's Made:

**Tech used:** HTML, EJS, CSS, JavaScript, NodeJS, Mongodb

This is a fullstack web app running on NodeJS and Mongodb. Park data is stored in individual objects inside of a database, which can then be retrieved via the server's own web API. The front-end of the application uses EJS to dynamically render park data that the user retrieves. 

## Optimizations

Organization of this project's files is a mess, which makes the project more difficult to update than it needs to be. I want to refactor the application with an MVC arcitecture in mind, which would allow me to build upon it much easier in the future. I plan to add features such as authentification so that users can login and post comments and personal stories for the National Parks they've visited or plan to see in the future. There's also a major bug that basically breaks the basic function of the site, so consider this project a work in progress. 

## Lessons Learned:

This was one of my first attempts at a multi-page app, and I learned the hard way that making more complicated applications without a planned architecture system for the backend can lead to a lot of headaches! 

