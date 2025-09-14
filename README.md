# Google Keep Clone

## Overview
This is a simplified version of Google Keep built with **React** and **Vite**.  
It allows users to **create, edit, archive, and delete notes** in a responsive layout.

## Features
- Create new notes
- Edit notes using a modal
- Archive and unarchive notes
- Delete notes
- Responsive sidebar navigation

## Tech Stack
- **React** (functional components, `useState`, props)
- **Vite** (fast build tool)
- **CSS** (for styling)

## Folder Structure
google-keep-clone/
│
├─ public/ # Static files
│
├─ src/
│ ├─ assets/ # Images like logos
│ ├─ components/ # Reusable React components
│ │ ├─ Header.jsx
│ │ ├─ Sidebar.jsx
│ │ ├─ NoteCreator.jsx
│ │ └─ NotesGrid.jsx
│ ├─ App.jsx
│ └─ index.css # Main CSS file
│
├─ package.json
├─ vite.config.js
└─ README.md