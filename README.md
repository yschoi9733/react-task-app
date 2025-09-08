# React Task App

A Trello-like task management application built with React and TypeScript. This application allows users to create and manage tasks across multiple boards and lists, with drag-and-drop functionality for easy organization.

## ✨ Features

- **Multiple Boards**: Create and manage separate boards for different projects.
- **Custom Lists**: Add, edit, and delete lists within each board.
- **Task Management**: Create, edit, and delete tasks within lists.
- **Drag & Drop**: Easily reorder tasks within and between lists using `react-beautiful-dnd`.
- **Activity Log**: Tracks all major actions (creation, deletion, moves) for transparency.
- **State Persistence**: User data is saved and synced with Firebase.
- **Responsive Design**: The UI is built to be usable across different screen sizes.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux Toolkit
- **Styling**: Vanilla-extract
- **Drag & Drop**: `react-beautiful-dnd`
- **Backend & Database**: Firebase (Authentication and Firestore)
- **Icons**: `react-icons`
- **Unique ID Generation**: `uuid`

## 📂 Folder Structure

The project follows a feature-oriented structure to keep the codebase organized and maintainable.

```
/src
├── assets/         # Static assets like images and SVGs
├── components/     # Reusable React components
│   ├── ActionButton/ # Generic button for adding lists/tasks
│   ├── BoardList/    # Sidebar for managing boards
│   ├── EditModal/    # Modal for editing items
│   ├── List/         # Component for a single list (column)
│   └── Task/         # Component for a single task item
├── hooks/          # Custom React hooks (e.g., useAuth, redux hooks)
├── store/          # Redux Toolkit state management
│   ├── reducer/      # Root reducer
│   └── slices/       # State slices for boards, user, etc.
├── types/          # TypeScript type definitions
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── firebase.ts     # Firebase configuration and initialization
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed.
- A Firebase project set up with Authentication and Firestore enabled.

### Installation & Setup

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Firebase:** You will need to set up your own Firebase project and connect it. The configuration details are managed in `src/firebase.ts`.

### Available Scripts

In the project directory, you can run:

#### `npm run dev`
Runs the app in development mode.

#### `npm run build`
Builds the app for production.

#### `npm run lint`
Lints the codebase for errors.
