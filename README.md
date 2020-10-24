# QWERY QUIZ

## Tool Stack

1. MongoDB
2. Express.js
3. React.js
4. Node.js

## Project Setup

Open your terminal and run the following commands to get your copy of the projct running on your local or remote environment

### `git clone https://github.com/igmrrf/qwerty_quiz`

Gets a copy of the codebase to your development environment

### `yarn install`

Installs Dependencies and Dev-dependencies required to run the project successfully

After which you can run either of the available scripts that fit your purpose

## Dependencies

    SERVER DEPENDENCIES

    "dependencies":{
        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "express-async-errors": "^3.1.1",
        "mongoose": "^5.10.9",
        "winston": "^3.3.3"
    }

    CLIENT DEPENDENCIES

    "dependencies": {
       "axios": "^0.20.0",
        "react": "^16.14.0",
        "react-dom": "^16.14.0",
        "react-leaderboard": "^0.0.3",
        "react-router-dom": "^5.2.0",
        "react-scripts": "3.4.3",
        "react-simple-keyboard": "^2.5.9",
        "use-sound": "^1.0.2"
    },

## Dev Dependencies

    "devDependencies": {
        "concurrently": "^5.3.0"
    }

## Available Scripts

In the project directory, you can run:

        "scripts": {
            "client": "cd client && yarn start",
            "server": "nodemon index.js",
            "build": "cd client && yarn run build",
            "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\"",
            "start": "node index.js",
            "start:dev": "nodemon index.js",
            "install": "yarn install && cd client && yarn install",
            "heroku-postbuild": "cd client && yarn install && yarn install --only=dev --no-shrinkwrap && yarn run build"
        },

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.<br />
Edit the files as you see fit, if you end up with something you cannot resolve and wish to go back to the original code. Run
`git restore`.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

You can deploy your project to heroku or use a CI/CD service through Github or any VCS hub.

### SERVER DOCUMENTATION
Visit [Postman Documentation](https://www.postmain.com/docs/qwerty-quiz/docs/34jo2i4o2i4j2oi4j)