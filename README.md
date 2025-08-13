# Next.js Chat Application

This is a two-page web application demonstrating a simple chat interface with smooth UI transitions and state preservation using Next.js, React, and Framer Motion.

## Project Overview

- **Home Page:** Features a main content area with a prominent chat input box at the bottom and chat history displayed directly above it. The chat elements blend seamlessly with the page background.
- **Secondary Page:** Displays a wider main content area, with the chatbox transformed into a smaller, persistent, dockable component on the right side of the screen. This chatbox can be minimized into an icon.
- **Minimized Chat:** The chatbox from the Secondary Page can be minimized into a small icon in the bottom-right corner.

## Features

- Seamless and smooth animations/morphing of the chat component between pages and states.
- Preservation of chat state (e.g., typed input, message history) across page navigations.
- Responsive design for chat input elements on the home page, ensuring all options fit in a single row.
- Custom background with cloud imagery.

## Technical Stack

- **Framework:** Next.js
- **Styling:** CSS Modules
- **Animation:** Framer Motion
- **State Management:** React Context API

## Getting Started

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd nextjs-chat-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    The development server will run on `http://localhost:8080`.
    ```bash
    npm run dev
    ```

    Open `http://localhost:8080` in your browser to see the application.

## Project Structure

- `components/`: Reusable React components (e.g., `Layout.js`, `chatInterface.js`).
- `contexts/`: React Context API for global state management (`chatContext.js`).
- `pages/`: Next.js pages (`index.js` for home, `secondary.js`).
- `public/`: Static assets like images.
- `styles/`: CSS Modules for component-specific styling (`.module.css` files) and global styles (`globals.css`).

## Customization

- **Chat Messages:** Initial chat messages can be modified in `contexts/chatContext.js`.
- **Styling:** Adjust styles in the `.module.css` files within the `styles/` directory.
- **Animations:** Modify animation `variants` in `components/chatInterface.js`.
