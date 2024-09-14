# Next.js Ticketing App

This is a ticketing application built with Next.js, MongoDB, and Tailwind CSS. The app allows users to create, manage, and track tickets.

## Features

- **Create Tickets:** Users can create new tickets with various statuses.
- **Manage Tickets:** Users can update the status of tickets.
- **Track Tickets:** Users can view a list of all tickets and filter them by status.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.
- **MongoDB:** A NoSQL database for storing ticket data.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB server

### Installation

1. **Clone the repository:**

   ```sh
    git clone https://github.com/yourusername/ticketing-app.git
    cd ticketing-app

2. **Install dependencies:**

   ```sh
    npm install

3. **Set up environment variables:**

   Create a `.env.local` file in the root of the project and add the following environment variables:

   ```env
    LOCAL_API_BASE_URL=http://localhost:3000
    PROD_API_BASE_URL=https://ticketing-app-ashy.vercel.app
    MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server:**

   ```sh
    npm run dev

5. **Open the app:**

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

  The app is deployed on Vercel. You can visit the production site here: https://ticketing-app-ashy.vercel.app

  To deploy your own version, you can follow these steps:

  1. Push your code to GitHub.
  2. Create a new project on Vercel and import your GitHub repository.
  3. Set up the environment variables in the Vercel dashboard.
  4. Deploy the project.

## Contributing

  Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

