# FRUIT OR VEGETABLE

#### Video Demo:  https://youtu.be/eG7eLQZAODQ

#### Description: a simple website that allows the user to make an account and log-in and play a game. The game is to guess whether the photo is a fruit or vegetable. I used React, redux, express, sequelize, and postgres to build the app.

#### The main component is the home component where the game is actually rendered. I used react hooks to maintain a local state and a application state. The local state keeps track of what the current image is (vegetable or fruit) and the result that will be displayed on the page. I check if the value name of the input matches the same text thats within the image url

#### The redux store keeps track of the user that is currently signed in. This state is accessable throughout the entire application using useSelector. The thunks in this redux store gets the user (me) and authenticates the user to make sure they are valid (authenticate). The token (JWT) is stored in window.localStorage. This stoken is removed when a user signs out.

#### The images are stored in the public folder and are linked to it by using express.static. This allows any image in this folder to be found if the browser makes a request for it without it needing to be explicitly linked

#### On the backend the auth/index file allows a user to log in and sign up. It also uses JWT (json web tokens) to allow the user to have a persistent state in the browser. The app currently only operates locally but if it were deployed, this would also allow the user to log into multiple browsers and resume their saved state.

#### The user is setup with in the User database model build in sequlize/postgres. The user has a username and password associated with it. The user also has class and prototype methods associated with it. The class methods (authenticate and findbytoken) checks if the user has a valid token and then finds that user in the database if correct. The prototype methods (correctPassword and generateToken) check if the user logging in is using the correct password since the passwords are hashed and if so assignes them a token. The users password is automatically hashing when a user is created or updated using sequlize hooks

#### There is also a seed file that will create two users that can be used to login to test the platform.

#### The routes are setup using react routes, to login, signup, and home.

#### There is one api route that will fetch all users. This was put here for admin access for this platform and is a future goal to impliment. I would like to add a admin dash board so the admin can update the user as needed. I would also like to add points to the user and have a leaderboard. Also would like to update the css on the page as it is basic in its current state.


