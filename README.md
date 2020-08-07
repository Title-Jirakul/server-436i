# educonnections

![clientTasks](/docs/assets/home.png)

[educonnections](https://educonnections.ca) is a social media platform that matches you with other students at your university based on common artists, classes, likes, and songs from services like Facebook, Spotify, and UBC SSC.

___


## Our Mission

**Problem:** Canadian universities today accept students from hundreds of countries around the world. New students often have trouble meeting people, and the majority of students don't until they arrive on campus the first day. 

**Our Platform**: educonnections helps students meet online by matching with each other based on common Facebook likes, Spotify artists and songs, and UBC classes.

___

## Members

| Member          | CS ID   | Email |
|:-|:-|:-|
| Allan Ting      | u2z9a   | allantingca@live.ca       |
| Eduardo Garza   | r1v0b   | eduardo@garza.ca          |
| Ismail Mourad   | e5w2b   | iswmourad@hotmail.com     |
| Title Jirakul   | i5i8    | watsapol555@hotmail.com   |

___

## Contributions

#### Allan Ting

- Implemented backend functionality for Spotify integration, Matching algorithm, /course `GET` and `POST` endpoints, `/account GET` endpoints, 
- Implemented frontend session verification to verify a user 
- Implemented frontend `/profile/:id` view, Course Upload page, Integration page
- Database schema planning and implementation

#### Eduardo Garza

- Implemented auth system (login, signup)
- Implemented Spotify data endpoint and authorization
- Implemented matching algorithm
- Setup Heroku automatic deployment

#### Ismail Mourad

- Implelemented front-end authentication
- Impleneted user profile functionality on the front-end
- Implemented /profile/:id endpoint
- Implemented authentication mock UI Components

#### Title Jirakul

- Implemented Facebook log in button on the front-end, allowing user to log in to their Facebook account and creating the access token for information retrieval
- Implemented a Facebook GET API which uses the generated access token to call various Facebook APIs to retrive user's information such as their displayed name, hometown, email, and Facebook likes
- Implemented the mock UI components of the matches and courses page

___

## Version Control

- Client Repository: [github.com436I-client](https://github.com/eduardocgarza/436I-client)
- Server Repository: [github.com436I-server](https://github.com/eduardocgarza/436I-server)

___

## Platform Features

- Account Creation
- Integration of third-party accounts, including Facebook and Spotify
- UBC SSC calendar integration
- Customized matches based on the **educonnections matching algorithm**
- View courses and classmates, view matches, view profiles

___

## Data Collection

educonnections stores user data from the following services and providers:

### Facebook

- Name, image URL, date of birth, cities visited, and cities lived in
- Pages liked, and groups joined

### Spotify

- Display name, email, number of followers, image URL, country
- A user's top artists
- A user's top songs (tracks)

### UBC

- A user's list of courses, with department, section, and time

### + Data Opt-in Benefits

The app is a facilitator for people to match with each other based on common interests. With the built-in APIs of various services, we hope to make connecting with people “one click away”
Users will be able to click links that will take them to the applications they have integrated and initialize conversations on there.

### - Data Opt-out & Deletion

Our platform will allow users to delete their data at any point. Once your data is deleted in the client, it will also be deleted in our servers and databases. No existing copy with remain. Be aware that by deleting data, you may lose matches that you had before.

___

## Project Requirements

### Client Tasks

Our team managed the client-related tasks through Github. Click [here](https://github.com/eduardocgarza/client-436i/projects/1) to see the **Client Project Board** (below).

![clientTasks](/docs/assets/clientTasks.png)

### Server Tasks

Our team managed the server-related tasks through Github. Click [here](https://github.com/eduardocgarza/server-436i/projects/1) to see the **Server Project Board** (below).

![serverTasks](/docs/assets/serverTasks.png)

### View Project Requirements

Please click [here](https://github.com/eduardocgarza/server-436i/blob/master/docs/PROJECT_REQUIREMENTS.md) to see a full list of our project requirements (minimal, standard, stretch).

___

## Tech Used 

#### Javascript / Typescript

We used **Typescript** and **React-Typescript** for this project. The development experience was much smoother as it allowed us to strongly type and enforce the structure of data moving inside and outside our server. Integration of the front-end and back-end was simpler as we knew what to expect between the client and server. The downside is the extra work needed by our team in planning and coding. This came in the form of considering what data we needed to move around; as well, it required us to build these Objects/Interfaces to enforce these structures.

#### React / React-hooks

For the front end, we used React. We modularized many components and re-used them by passing in different props. This is seen in our Course and Matches pages, as they both use the same StudentItem component. This allowed us to have less duplication than we would expect if we were to simply use html pages and separate css files. We also use styled components to handle our styling, this also allowed us to re-use styling for components to unify the look of our app. For routing, we use Switches from react-router. We built an AuthorizedSwitch and an UnauthorizedSwitch to show different views depending on whether or not a user is logged in. All of the above UI components were dependent on state, which we used React hooks and Contexts to pass down props from parent to child components. We updated the UI accordingly when the Context was updated. 

#### MongoDB

Early on in our project, we had a goal of building a matching algorithm based on hobbies. Along the way, we learned that our database schema would play a large role in the success of this algorithm. The end result of our schema essentially writes any incoming data twice. Once in the Account collection and once in the Hobby collection. For example, consider that user X likes Despacito. Our schema would store that X likes Despacito in X's account document, at the same time, the Despacito spotify_track document would store that the song is liked by X. 
The flexibility of NoSQL allowed us to build the database to our liking, which as described in the example above, involved some data duplication. This referencing allowed us to match users with similar users appropriately. A typical SQL database might have more difficulty in achieving this due to the traditional constraints that a SQL database imposes like Key constraints, etc.

#### Heroku

We used Heroku to deploy our app, storing our environment variables using their functionality. This was helpful as there was minimal code configuration when deploying to production. We also utilized their mongoDB add-on instead of using mongoDB Atlas; it didn't matter much which one we chose and since we had already setup the add-on since the beginning we never switched over. Heroku is simple to use for deployments with the Procfile setup that they provide, as well we used their automatic CD deployment functionality and hooked that up to our master branch.

#### Node / Express

We used node to build our server. On top of that we used Express to build out our back-end. We created a custom Logger and ErrorHandler middleware. This allowed us to have cleaner code when handling errors as we would simply pass an error to the next() method and it would be taken in and logged by our custom ErrorHandling middleware. As well, Express allowed us to put in our own Auth middleware which verifies all production endpoint API requests for valid JWT tokens before allowing the API request to be resolved. 

___

## Above and Beyond

### 1. 3rd Party Integrations

Beyond the tech stack we have learned in the course, we have integrated 2 social media APIs, from Facebook and Spotify, to get user's information such as Facebook likes, hometown, Spotify's top tracks and top artists as data to facilitate the matching algorithm that we have implemented from scratch. The social media integration was a challenge of its own, as it required us to set up developer account, whitelist our application, as well as implement the API call to retrieve user's access token for fetching their information. By working with external APIs, we had to design the schema of our database in such a way that it can maintain user's information and privacy, while maintaining the functionality of allowing us to efficiently query the data to populate the matches. In addition, we have also implemented a UBC parser from scratch. The parser is able to parse UBC calendar containing student's courses which user can download from UBC SSC in the .ics format. Rather than letting users populating their courses manually by inputting them in a text format, our application allows them to upload the UBC calendar to their accounts, adding the complexity to the scope of our project beyond what was taught in class.

### 2. Matching Algorithm

We also made a matching algorithm that matches users based on their likes and hobbies. Instead of looping through every single user that is in our database, we match them in "buckets", searching for matches only in the topics a given user already likes (tracks, artists, facebook likes). This significantly reduces the work needed to be done to generate matches. In order to facilitate this, we were required to put some thought into planning our database schema. Specifically, we have an almost circular referencing in the database in that a user has an array of artists, tracks and facebook likes that they have indicated and those same artist, track and facebook like documents point to the accounts which like that specific document. With the way we have set up our database, we are able to easily parse out the information we need about a user and his/her matches into a hashmap which we pass back to the front end.

![clientTasks](/docs/assets/matching.png)

[View Matching Algorith Explanation](https://docs.google.com/presentation/d/1jdqyWPZpc0YKmlLlOl8Ln2c_FrBSN7YFQF3rKD5yGSE/edit?usp=sharing)

___

## Next Steps 

#### 1. Priority - UI/UX

- Test the current user experience with general users to determine what needs to highlighted in the workflow and determine if we should build something to help new users step through our application
- Improve the User Experience for courses. Currently, once you upload a calendar file, you can no longer upload a new calendar. This would mean that when a new semester comes, the user would not be able to upload their new schedule
- Improve the experience after finding a match. Currently users have no actionable step in our app past the matching stage. The current expected workaround for users is to navigate to a match's profile and email them. This is probably not intuitive to a user

#### 2. Priority - More Functionalities

- Allow users to opt out and deauthorize integrated apps, currently we keep track of who likes what songs, artists, likes, etc. Using this same information, we should be able to determine what data needs to be removed from our database when a user wants to deauthorize an integration.
- More Integrations
	- Create new integrations (Reddit, Instagram, Snapchat)
		- Reddit 
			- Get a user's followed subreddits
			- Get a user's most posted subreddits
			- Other basic data that we can pull from Redit
		- Instagram
			- Get a user's followed profiles
			- Get a user's following profiles
			- Get a user's most recent posts so that we can show their instagram feed
			- Get a user's most liked posts, most commented posts
			- Get a user's post location tags
		- Snapchat
			- Get basic user data like snapscore, most snapped contacts, streaks
- Basic social features
	- Implement a chat feature that allows users to chat with one another within our application
	- Add "Community Pages" where users can discuss their hobbies about that page's specific topic
		**eg.** Pages for every artist in our database where people can find a list of all other users that like some artist and can discuss with one another through some sort of post feed

#### 3. Priority - Development Experience

- Implement a test suite to allow for automated unit testing and integration testing. 
  - This should eventually allow for a Continuous Integration pipeline to complement our Continuous Deployment set-up. This would help ease the workload as our current testing process is manual

___

## API Documentation

Our application is built in three layers:

1. Client application (React)
2. Server application (Node)
3. Database application (Mongo)

The server is designed as a REST API with endpoints that return data back to the client application. The REST API base URL is `https://api.educonnections.ca/`.

![api](/docs/assets/apiDocumentation.png)

### View API Documentation

Click [here](https://github.com/eduardocgarza/server-436i/blob/master/docs/API.md) to see the full documented **educonnections API**.

___

## Prototypes

We have a Figma project set up. We used this to build our vision of what we wanted the front end app to look like. 

Click [here](https://www.figma.com/file/oiIWgoWzIHamqnbqVc6KMo/Friendly?node-id=0%3A1) for a read-only view of our prototype.

**We envisioned four main modules to the front end of the application.**

1. A place for users to upload their course information and view classmates
2. A place for users to see all of their matches and find out common information/hobbies
3. A place for users to decide which integrations to provide (Spotify, Facebook, Instagram, etc.) and to deauthorize permissions when they want
4. A place for users to view each other's profiles as well as their own

___

