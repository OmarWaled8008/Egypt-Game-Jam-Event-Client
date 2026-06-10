# Egypt Game Jam Event Check-In Client 
**Backend Repository:** [Egypt-Game-Jam-Event-Backend](https://github.com/OmarWaled8008/Egypt-Game-Jam-Event-Backend)

A modern React + Vite web application for managing event check-ins with QR code scanning capabilities. This is the frontend client for the Egypt Game Jam Event management system.

## Overview

This application provides an intuitive interface for event staff to:

- Check in attendees using QR code scanning
- View real-time dashboard statistics
- Manage attendee lists
- Authenticate as authorized staff members

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Next-generation frontend build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **React QR Scanner** - QR code scanning functionality
- **ESLint** - Code quality and linting

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/OmarWaled8008/Egypt-Game-Jam-Event-Client-main.git
cd Egypt-Game-Jam-Event-Client-main
```

2. Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following environment variables:

```env
VITE_API_URL=http://localhost:3000/api
```

Update the `VITE_API_URL` to match your backend server URL.

## Running the Application

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm lint
```

## Project Structure

```
src/
├── components/
│   ├── Checkin1.jsx          # First check-in form
│   ├── Checkin2.jsx          # Second check-in form
│   ├── Layout.jsx            # Main layout wrapper
│   ├── Navbar.jsx            # Navigation bar
│   └── Protectedroute.jsx    # Route protection middleware
├── contexts/
│   ├── apiProvider.jsx       # API service provider
│   └── contexts.js           # React context definitions
├── pages/
│   ├── Attendees.jsx         # Attendees list page
│   ├── Dashboard.jsx         # Dashboard/home page
│   ├── Login.jsx             # Login page
│   └── Qrscanner.jsx         # QR code scanner page
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Features

- **QR Code Scanning** - Scan attendee QR codes for quick check-in
- **Dashboard** - Real-time event statistics and overview
- **Attendee Management** - View and manage event attendees
- **Authentication** - Secure login system for staff members
- **Responsive Design** - Works on desktop and mobile devices

## Backend Server

This client application works in conjunction with the backend server. Make sure to have the backend running:

**Backend Repository:** [Egypt-Game-Jam-Event-Backend](https://github.com/OmarWaled8008/Egypt-Game-Jam-Event-Backend)

Please refer to the backend repository for setup instructions and API documentation.

## API Integration

The application communicates with the backend API through the `apiProvider` context. All API calls are centralized in `src/contexts/apiProvider.jsx` for easy maintenance and debugging.

## Development Notes

- The React Compiler is enabled for optimized performance
- Hot Module Replacement (HMR) is configured for fast development experience
- Protected routes ensure only authenticated users can access certain pages

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run linting: `npm lint`
4. Commit your changes
5. Push to your fork and submit a pull request

## License

This project is part of the Egypt Game Jam event management system.

## Support

For issues, questions, or suggestions, please open an issue in this repository or contact the development team.
