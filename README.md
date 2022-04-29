<p align="center">
  <a href="https://vacay-notes.netlify.app/">
    <img src="src/assets/images/logo.png" alt="Vacay Notes logo">
  </a>
</p>
<h4 align="center"><i>Take Note With Purpose</i></h4>
<p align="center"><a href="https://vacay-notes.netlify.app/">Be a part of Vacay Notes App »</a></p>

## Introduction
Vacay Notes is a note taking web application. Vacay Notes is publicly hosted on Netlify at https://vacay-notes.netlify.app/.

## Demo
https://user-images.githubusercontent.com/56336326/165702619-cd2f87fb-321e-45cf-9bce-21793ef73a7e.mp4

## Features
- Landing page 
- Notes listing page
- Labels listing page
- Profile page with notes data
- Add a new note
- Edit Note
- Create Labels
- Change Card Color
- Add Labels to notes
- Filter & Sort by date, priority, labels
- Pin/Unpin notes
- Trash & Archive
    - Archive/Unarchive notes
    - Delete/Restore/Permanent-delete notes
- Authentication
    - Sign up
    - Login
    - Logout
    - Persisting login
- Mobile Responsive
## Tech stack
- ReactJS
- React Router v6
- useContext + useReducer for state management
- Vanilla CSS & Vacay UI library
- Firebase for backend

## Installation
- Clone repository and change directory.
```bash
git clone https://github.com/anik31/vacay-notes.git
cd vacay-notes
```
- Switch to `dev` branch.
```bash
git checkout dev
```
- Create a firebase project & register your app, then copy the `firebaseConfig` object inside the SDK & replace with the `firebaseConfig` object in the `config/firebase-config.js`.
```javascript
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};
```
- Install dependencies and start server.
```bash
npm install
npm start
```
## Socials
* Twitter - [_anik_31](https://twitter.com/_anik_31)
* Github - [anik31](https://www.linkedin.com/in/anik31/)