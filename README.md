# Burger

## Table of Contents 

1. [Overview](#overview)
2. [Installation](#installation)
3. [Initializing](#initializing)
	- [Local Server](#local-server)
	- [Heroku](#heroku)
4. [How It Works](#how-it-works)

<a name="overview"></a>
## Overview

Burger is a burger logger with a MVC architecture. It utilizes MySQL to keep track of each burger's information and other technologies such as Node, Express, Handlebars, and ORM to handle routing and generate the page.

<a name="installation"></a>
## Installation

### Step 1: Git Clone

Clone Burger to your local git repo like the following:

```
git clone https://github.com/caseykwok/Burger.git
```

The Burger project and its files should now be in your project folder.

### Step 2: Install Dependencies

Install all modules listed as dependencies in `package.json` like the following:

```
npm install
```

The dependencies should now be in the local `node_modules` folder.

<a name="initializing"></a>
## Initializing

There are two ways to run this application. The user can either run the application on their local server or access the application deployed to Heroku.

<a name="local-server"></a>
### Local Server

1. Ensure the two steps in [Installation](#installation) are completed.

2. Run the Node application called `server.js` to initialize the user's local server like the following:

	```
	node server.js
	```

3. Open the browser and connect to [port 3000 of the local host](http://localhost:3000/) to reach the homepage.

<a name="heroku"></a>
### Heroku

1. Open the browser and go to the [deployed Heroku application](https://powerful-savannah-67098.herokuapp.com/) to reach the homepage.

	- **Note:** It is unnecessary to complete the two steps in [Installation](#installation).

<a name="how-it-works"></a>
## How It Works

1. The homepage will display a list of all hamburgers that have been eaten and allow the user to do one of the following:

	- `Order` a hamburger 
	- `Devour` any hamburger listed under *Your Order*

2. If the user chooses to `Order` a hamburger, the application will add the hamburger to *Your Order*.

3. If the user chooses to `Devour` a hamburger, the application will move the hamburger from *Your Order* to *Eaten*.

![Burger](public/assets/images/burger.gif)
