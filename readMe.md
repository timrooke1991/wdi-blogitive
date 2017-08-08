![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## Blogitive

<figure>
	<a href="https://aqueous-lake-61312.herokuapp.com/"><img src="http://i.imgur.com/WqaZP2M.jpg"></a>
	<figcaption><a href="https://aqueous-lake-61312.herokuapp.com/" title="Blogitive, a blogging platform coupled with IBM Watson's Sentiment Analysis API">Blogitive, a blogging platform coupled with IBM Watson's Sentiment Analysis API</a>.</figcaption>
</figure>

### [](https://github.com/timrooke1991/wdi-ldn-project-1#setup)Installation & Setup

#### Run Locally

- Download or clone the [Github repo](https://github.com/timrooke1991/project-0)
- Run `npm install` or `yarn` in the terminal to download required dependencies
- Run `gulp` in the terminal to compile the source code and open in browser

#### View Online

- [View on Heroku](https://aqueous-lake-61312.herokuapp.com/)
- [View on Github](https://github.com/timrooke1991/wdi-ldn-project-1)

<figure>
	<a href="https://aqueous-lake-61312.herokuapp.com/">
    <img src="http://i.imgur.com/mgpXaWD.jpg">
  </a>
	<figcaption>
    <a href="https://aqueous-lake-61312.herokuapp.com/" title="Users can post on the site using Markdown syntax to format their context">
      Users can post on the site using Markdown syntax to format their context. The app uses the FileReader API to display a preview of the uploaded image, and custom JavaScript to format the tags as they are entered.
    </a>.
  </figcaption>
</figure>

### [](https://github.com/timrooke1991/wdi-ldn-project-1#description)Description

This project was to build a Full Stake application, I chose to build a blogging platform coupled with IBM Watson's sentiment analysis API. This shows how negative or positive a post is. It also analyses comments on blog posts, and specific concepts mentioned within the blog post text. The site has login functionality as well as oAuth login functionality for Facebook, Instagram and Github.

### [](https://github.com/timrooke1991/wdi-ldn-project-1#ibm-watson-api)IBM Watson API

For this project, I used the IBM Watson Sentiment Analysis API. The API is used in Blogitive to scan text - both articles and comments - to determine overall positivity or negativity. However, the API also returns specific topics and concepts relevant to the article or comment. Topics or concepts may not be referenced in the text, but are deduced using the Artificial Intelligence.

<figure>
	<a href="https://aqueous-lake-61312.herokuapp.com/"><img src="http://i.imgur.com/kdVJJHr.png"></a>
	<figcaption><a href="https://aqueous-lake-61312.herokuapp.com/" title="These are example topics and concepts returned by the IBM Watson API for an article related to cricket">These are example topics and concepts returned by the IBM Watson API for an article related to cricket</a>.</figcaption>
</figure>

### [](https://github.com/timrooke1991/wdi-ldn-project-1#technologies-used)Technologies used

The list of the software and languages used in the project, for example:

- HTML5
- SASS
- JavaScript ES6
- jQuery 3.10
- IBM Watson Sentiment Analysis API
- Gulp
- node.js
- Express
- Mongo
- Yarn
- NPM
- Git
- Github

### [](https://github.com/timrooke1991/wdi-ldn-project-1#challenges-faced)Challenges faced

The biggest challenge of the application was working with the API payload. This came in a large object, so I had to plan what data I wanted to use and store this in the database. Once done, this allows me to access the data in a more manageable way, which made including this in my application easier.

### [](https://github.com/timrooke1991/wdi-ldn-project-1#rounding-it-off)Rounding it off

Improvements that I would like to make to the project in the future would be:

- Refinement to styling and layouts
- Add global user concepts. For example, across all the posts created by the user display the most commonly discussed topics.
- Allow users to select topics they were interested in and by default show them articles relating to these categories.
