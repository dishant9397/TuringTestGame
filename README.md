![GitHub release (latest by date)](https://img.shields.io/github/v/release/dishant9397/TuringTestGame?display_name=tag) ![GitHub repo size](https://img.shields.io/github/repo-size/dishant9397/TuringTestGame)
![GitHub contributors](https://img.shields.io/github/contributors/dishant9397/TuringTestGame) ![GitHub issues](https://img.shields.io/github/issues-raw/dishant9397/TuringTestGame) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/dishant9397/TuringTestGame) ![Netlify](https://img.shields.io/netlify/6f8bc681-652d-4fbc-9be9-513a8bd9ca80)     

<br />
<div align="center">
    <img src="https://raw.githubusercontent.com/The-Brainiacs-FSE/TuringTestGame/master/src/components/game-intro/resources/logo.svg" alt="Logo" height="300">
  <h1 align="center">Turing Test Game</h1>
  <p align="center">
    <a href="https://github.com/The-Brainiacs-FSE/TuringTestGame/issues">Report Bug</a>
    ·
    <a href="https://github.com/The-Brainiacs-FSE/TuringTestGame/issues">Request a Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<summary>Table of Contents</summary>
<ol>
<li><a href="#about">About</a></li>
<li><a href="#project-description">Project Description</a></li>
<li><a href="#project-roadmap">Project Roadmap</a></li>
<li><a href="#user-flowchart">User Flowchart</a></li>
<li>
  <a href="#how-to-upload-custom-font-style">How to upload custom font style?</a>
</li>
<li>
  <a href="#how-to-run">How to run?</a>
  <ul>
    <li><a href="#locally">Locally</a></li>
    <li><a href="#on-a-container">On a container</a></li>
  </ul>
</li>
<li><a href="#deployment-links">Deployment Links</a></li>    
<li><a href="#future-work">Future Work</a></li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#documents">Documents</a></li>
</ol>

## About 
This is the Turing Test Game Repository by the team **"The Brainiacs"** that will allow users to play games while guessing the correct translation.

## Project Description

The project is an interactive Turing test game for player and game admin. The target players of the game are visitors in outreach events. A set of sentences, including one in the original language and several translations of different quality, is shown to the player. The player is challenged to identify the human translation from the set. All the Machine Traslation is from the National Research Council of Canada’s (NRC) Multilingual Text Processing team.

## Project Roadmap

* Jira project to track and document user stories/features and sprints [link](https://siyangzhang.atlassian.net/jira/software/projects/TTG/boards/2).
* Bi-weekly team meeting with Daniel on every Tuesday, 4pm
* Bi-weekly team meeting with Jackie on every Monday, 11:30am, also keeping updated with Slack.

## User Flowchart

* You can check the user flowchart here: https://www.canva.com/design/DAFTFqsQKds/8sIHugDhbJEfhaqG2wr51Q/view?utm_content=DAFTFqsQKds&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## How to upload custom font style
* Select the font that you want to have from [Google font style](https://fonts.google.com/noto/fonts)
* Update the `<style>` import inside `index.js` file

## How to run

### Locally:
* Clone the repository to local by running the command:
```
git clone https://github.com/The-Brainiacs-FSE/TuringTestGame.git
```
* Within command line console, run install command to install necessary packages and solve depencency issue
```
npm install --legacy-peer-deps
```
* Run test command to check the test suits
```
npm test
```
* Run run below command to start the app in the development mode
```
npm start
```
**Note:** Redirect to [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make the changes.

### On a container:
*  Visit [Install Docker](https://docs.docker.com/desktop/) and install docker if you haven't already.
* Build application with following command
```
docker build -t turingtestgame .
```
* Start docker image within container with following command (mapped to port 3000 by default):
```
docker run -p 3000:3000 -it turingtestgame
```
**Note:** Redirect to [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will not automatically reload when you make the changes because the application is deployed within docker and you might have to run above commands again to see the changes in effect. For further details on docker image, could refer to this guide [here](https://code.visualstudio.com/docs/containers/quickstart-node).

## Deployment Links

* Production: https://turing-test-game.netlify.app/
* Staging: https://turing-test-game-stg.netlify.app/

**Note:** Whenever a PR is raised the deploy link will appear in the PR directly and through that you can view the changes specific to that PR.

## Future Work

* Add Monitoring to the website 
* Deploy on a real server/cloud like AWS/Azure/GCP
* Improve documentation so that the new person joining the team can quickly take up.
* Need to solve the peer dependency issues while installing the packages.

## Contributors

* [Siyang Zhang](https://github.com/AlexYoungZ)
* [Dishant Patel](https://github.com/dishant9397)
* [Yiran Xu](https://github.com/EranXu)

## Documents

*  [Project Requirements](docs/Project%20Requirements.docx)
*  [Presentation](docs/Presentation.pptx)
