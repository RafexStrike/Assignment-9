# Eventora - Event Management Platform

![Eventora Logo](https://i.ibb.co/placeholder-for-logo/eventora-logo.png)

## 🎯 Purpose

Eventora is a modern event management platform designed to connect event organizers with their community. The platform facilitates the creation, discovery, and management of local events, fostering community engagement and memorable experiences.

## ✨ Key Features

- **Event Discovery**: Browse and search through various local events
- **Event Organization**: Create and manage your own events with detailed customization options
- **Interactive UI**: Modern, responsive design with smooth animations and transitions
- **User Authentication**: Secure Firebase authentication system
- **Event Sponsorship**: Various sponsorship options for event organizers
- **Newsletter Integration**: Stay updated with the latest events and news
- **Responsive Design**: Fully responsive across all devices
- **Dynamic Page Titles**: SEO-friendly dynamic page titles
- **Error Handling**: Custom 404 page and error notifications

## 🛠️ Technologies Used

### Core Technologies
- React
- Vite
- Tailwind CSS
- DaisyUI
- Firebase

### Package Dependencies
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.5",
    "aos": "^3.0.0-beta.6",
    "firebase": "^11.6.1",
    "motion": "^12.10.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-router": "^7.5.3",
    "swiper": "^11.2.6",
    "tailwindcss": "^4.1.5"
  }
}
```

## 🎨 Theme Colors

- Primary: `#00736B` (Deep Teal)
- Accent: `#FF9FA0` (Soft Coral Pink)
- Background: `#F3EDDC` (Warm Beige)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd eventora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Features Breakdown

### User Features
- User authentication (sign up, sign in, sign out)
- Profile management
- Event browsing and registration
- Newsletter subscription

### Organizer Features
- Event creation and management
- Custom event formatting
- Sponsorship options
- Attendee management

### Technical Features
- Responsive SVG logo
- Interactive UI components
- Form validation
- Toast notifications
- Smooth page transitions
- Image optimization
- SEO-friendly structure

## 🔧 Development Tools

### Main Development Dependencies
```json
{
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "daisyui": "^5.0.35",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.1"
  }
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](issues-link).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👥 Contact

For any queries or support, please contact [your-email@example.com]
