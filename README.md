# Travel Gems 


## What is travel Gems?
Travel Gem is an app designed for travellers to share the hidden gems they discover during their journeys. Users can seamlessly add these hidden gems to the map and bookmark locations shared by fellow users. To foster a vibrant community, users can engage in lively discussions by leaving comments on the locations shared by others, thereby enhancing user interaction and encouraging active participation in unveiling the hidden treasures they come across.



## Features of Travel Gems

Travel Gems offers a variety of features that enhance the travel experience for users by allowing them to discover, share, and interact with hidden travel locations. Here's what the app offers:

### Explore Page - Map and List Views
- **Interactive Map**: View hidden travel gems on an interactive map.
- **List View**: Browse travel gems in a list format.
- **Filters**: Apply filters to customize the exploration of travel gems.

### Gem Details and Reviews
- **Individual Gem Pages**: Each travel gem has its own detailed page.
- **Reviews**: View user-submitted reviews and insights about each location.

### Accessibility for Non-Logged-In Users
- Non-logged-in users can access the Explore page and individual gem details, as well as the Login page.

### Enhanced Features for Logged-In Users
- **Post Reviews**: Share your experiences by writing reviews on different locations.
- **Like and Delete Reviews**: Engage with the community by liking others' reviews and manage your own by deleting them.
- **Post a Location**: Contribute to the community by posting new locations using a map pin or by typing in a location.
- **Save Locations**: Bookmark locations you wish to visit and access them easily through the Saved page.
- **Manage Saved Locations**: Unsave locations as your preferences change.
- **User Profile**: View and edit your user profile, including personal details.
- **View Your Contributions**: See the locations you've posted and track your contributions to the community.

Travel Gems is designed to be a dynamic and user-friendly platform for travelers to share and discover unique and lesser-known locations around the world. Whether you're planning your next adventure or just exploring from the comfort of your home, Travel Gems brings the world's hidden treasures to your fingertips.




## Contributors
Travel Gems is a group project built as a part of the Northcoders bootcamp. The contributors and associated Github accounts are: 

- **Spencer Clarke-Griffiths**: SpencerCGriffiths
- **Dominique Anekore**: ultacc  /  DominiqueCoding
- **Hala Hassan**: hala-jash
- **Josh Holt**: theRohirrim
- **May Hoang**: mxy-1 
- **Winnie Kwok**: 404-pending

## Technology Stack

- **Next.js**: A React framework with server-side rendering, used as the core framework.
- **MongoDB Atlas**: Cloud NoSQL database service for storing application data.
- **NextAuth**: Authentication system for handling logins and security.
- **Google Maps API**: Integrated for mapping functionality in the application.
- **Vercel**: Platform used for deployment of the web application.

Additional Libraries and Tools:

- **React & React DOM**: JavaScript library for building user interfaces.
- **Express**: Web application framework for Node.js, used for server-side logic.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **FontAwesome**: Icons library used for adding icons to the UI.
- **React Icons**: Provides additional icons for the React applications.
- **React Loading Skeleton**: Used for creating placeholder loading effects.
- **React Select**: Library for creating flexible and themeable select input controls.
- **Use Places Autocomplete**: Library for implementing Google Places Autocomplete in React.
- **Bcryptjs**: Library for hashing and comparing passwords in Node.js.
- **Dotenv**: Module to load environment variables from a `.env` file.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **DaisyUI**: Tailwind CSS component library.
- **ESLint**: Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **PostCSS**: Tool for transforming CSS with JavaScript.
- **Autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

This stack encompasses a comprehensive set of tools and libraries that contribute to the functionality, appearance, security, and overall performance of the Travel Gems application.



## Where can i access travel Gems?

- Hosted Online Version:

https://travel-gems-project-deployment.vercel.app/explore

- Forked Repo for hosting: 

https://github.com/SpencerCGriffiths/travel-gems-project-deployment.git

- Original Group Repo: 

https://github.com/theRohirrim/travel-gems-project.git




## Minimum Technology Requirements

To successfully run the Travel Gems project, ensure that your system meets the following requirements:

### Software and Tools

- **Node.js**: Version 12.22.0 or later is required, as the project uses Next.js 14.0.4.
- **npm or Yarn**: A package manager to install dependencies. Use a version compatible with your Node.js installation.
- **Git**: Recommended for version control and cloning the repository (if applicable).
- **Web Browser**: A modern browser like Chrome, Firefox, Safari, or Edge.
- **IDE/Code Editor**: An environment for editing the code, such as Visual Studio Code, Sublime Text, or Atom.

### Operating System

- The project is OS-agnostic and can be run on Windows, macOS, or Linux.

### Internet Connection

- Required for downloading dependencies, accessing MongoDB Atlas, and using the Google Maps API.





# Local Setup Instructions

In order to locally run, edit and ammend this project please clone this repo. To run this project locally, you need to set up environment variables. Follow these steps:

### 1. Create a `.env` File

- Create a new file named `.env` in the root directory of the project.

### 2. Add Environment Variables

- Copy the file structure below into your `.env` file:

REACT_APP_GOOGLE_MAPS_API_KEY=
GOOGLE_API_KEY=
NEXT_PUBLIC_GOOGLE_API_KEY=

AUTH_SECRET=
AUTH_URL=

GITHUB_ID=
GITHUB_SECRET=

MONGODB_URI_DEV=
MONGODB_URI=

API_ROUTE=

### 3. Fill in the Values

- Obtain and fill in the values for each environment variable. For example, you need to get your own Google Maps API key, GitHub credentials, and MongoDB URI.

### 4. Obtaining Keys and URIs

- For Google Maps API key, visit [Google Cloud Console](https://console.cloud.google.com/).
- For GitHub credentials, create an OAuth app in your [GitHub Settings](https://github.com/settings/developers).
- For MongoDB URI, set up a cluster in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### 5. Security Note

- **Do not** commit your `.env` file to the repository. Keep your keys and secrets confidential.

### 6. Running the Project

- Install dependencies:

npm install - or - yarn

- Run the project locally:

npm run dev - or - yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



