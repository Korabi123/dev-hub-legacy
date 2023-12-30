<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
  <img src="./public/logo-black-1200x1200.png" alt="DevHub Logo">
  <h1 align="center">DevHub</h1>
  <p align="center">
    The Ultimate Dev Connection
    <br />
    <br />
  </p>
</div>

## 🛠️ Powered by NextJS

**[Project In Development]**

## 💡 Table Of Contents

- [🔥 Features](#features)
- [🛠️ Technologies Used](#technologies-used)
- [🪄 Getting Started](#localy-running-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)


## 🔥 Features

- Profile customization; Want to tell the world something about you? Add a bio. Want to become somebody new? Change username fullname and more.
- Create & Edit posts; Create posts with cover images and edit them at any time. You can only edit a post that you posted.

## 🛠️ Technologies Used
- **Next.js 13:** A cutting-edge React framework that enables server-side rendering, routing, and more.
- **Tailwind CSS:** A highly customizable CSS framework that speeds up UI development.
- **Prisma:** A modern database toolkit that simplifies database access with type-safe queries.
- **MongoDB:** A NoSQL database for scalable and flexible data storage.
- **TypeScript:** A statically-typed superset of JavaScript that enhances code quality and maintainability.
- **Clerk:** A modern authentication service that requires almost no setup.

## 🪄 Localy Running The Project

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Korabi123/dev-hub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dev-hub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Configure the env file with the following values:
   ```js
     # This was inserted by `prisma init`:
     # Environment variables declared in this file are automatically made available to Prisma.
     # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
    
     # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
     # See the documentation for all the connection string options: https://pris.ly/d/connection-strings
    
     DATABASE_URL=""
    
    
     # Clerk Auth
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/feed
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/feed
      
     # Next Cloudinary
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
   ```  

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the app.

3. Register a new account or log in if you already have one.
