# MindMate

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://mindmate-afwc.vercel.app/)

MindMate is a comprehensive mental health support application designed to provide users with tools and resources for managing their mental well-being. The application combines various features including mood tracking, journaling, anonymous sharing, and AI-powered therapy conversations.

## Features

### Mood Tracking

- Track daily mood patterns
- Visualize mood trends over time
- Add notes to mood entries

### Journaling

- Create and maintain personal journal entries
- Read and reflect on past entries
- Update and manage journal content
- Private and secure journaling experience

### Anonymous Sharing

- Share thoughts and experiences anonymously
- Connect with others through shared experiences
- Safe space for community support

### AI Therapist

- Interactive conversations with AI-powered therapist
- Get immediate support and guidance
- 24/7 availability for mental health discussions

### Mental Health Quiz

- Self-assessment tools
- Educational content
- Progress tracking

### User Profiles

- Personalized user experiences
- Profile customization
- Progress tracking and history

## Tech Stack

### Frontend Technologies

- React.js
- Tailwind CSS
- Material-UI & Chakra UI Components
- Chart.js for visualizations
- Axios for API communication

### Backend Services

- Node.js
- Express.js
- MongoDB (Database)
- JWT Authentication
- Passport.js for auth strategies

## Getting Started

### System Requirements

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/Adiwanwade/Mindmate.git
cd Mental_Health_App
```

1. Install Backend Dependencies

```bash
cd backend
npm install
```

1. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

1. Start the Backend Server

```bash
cd ../backend
npm start
```

1. Start the Frontend Application

```bash
cd ../frontend
npm start
```

The application will be available at `http://localhost:3000`

### Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Project Structure

```plaintext
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── server.js      # Entry point
├── frontend/
│   ├── public/        # Static files
│   └── src/
│       ├── components/ # React components
│       ├── pages/     # Page components
│       └── App.js     # Main app component
```

## Contributing

1. Fork the repository
1. Create your feature branch (`git checkout -b feature/AmazingFeature`)
1. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Thanks to all contributors who have helped shape MindMate
- Special thanks to the mental health professionals who provided guidance
- Gratitude to the open-source community for various tools and libraries used in this project