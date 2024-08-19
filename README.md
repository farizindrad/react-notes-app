# Notes App

## Overview

A simple note-taking application built with React, Tailwind CSS, and Vite. This app allows users to add, view, and delete notes. Each note includes a title, body, and creation timestamp. It also handles input validation to ensure the title does not exceed 50 characters and displays a message when there are no notes available.

## Features

- **Add Note**: Users can add a new note with a title and body. Each new note is saved with a unique ID, creation timestamp, and archive status.
- **Delete Note**: Users can remove notes from the list.
- **Input Validation**: Validates title input to ensure the length does not exceed 50 characters.
- **Design**: Utilizes Tailwind CSS for basic styling. The design is currently simple and may not be fully responsive across all screen sizes.
- **Empty State Message**: Displays a message when no notes are available in the list.
- **Archive Note**: Implementing a feature to archive notes.
- **Props Validation**: Using PropTypes to ensure props received by the component are validated correctly.

## Ongoing Features

- **Props Validation**: Using typescript for props validation
- **Search Note**: Adding a search functionality to allow users to find specific notes by keywords in the title.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: CSS framework for styling.
- **Vite**: Build tool that provides a fast development environment and optimized build process.
- **JavaScript**: Programming language used for application logic.

## Installation

To get started with the project, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/farizindrad/react-notes-app.git
   ```
2. Navigate to project directory:
   ```
   cd react-notes-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm run dev
   ```
