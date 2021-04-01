# National Days Scraper

A simple webserver built using Node.js and Express.js that scrapes https://nationaldaycalendar.com/ and sends it to Slack.

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Prerequisites

- Node.js
- Basic Slack Administration

## Installation

`git clone`
`cd national-days-slack`
`npm install`
`node app.js` --> will run the server on `localhost:3000` and accepts POST requests.

## Usage

- Create a Slack App (you can call it whatever you'd like)
- Add a Slash Command
- Call the Command whatever you'd like
- Use `https://national-days.herokuapp.com/` for the Request URL
- Complete App configuration

The web server is designed to run on Salesforce's Heroku platform using a free dyno. The first few times you run your Slash Command, it may time out. Usually by the second or third attempt the Dyno has spun up and should work.

## Support

This software is provided as-is with no expectations set around support.

## Contributing

You are welcome to fork this repo and create pull requests, but no promises on if they will get approved :)