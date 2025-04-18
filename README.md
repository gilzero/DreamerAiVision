# DreamerAiVision

A modern web application showcasing an AI vision product with a beautiful UI and secure contact form functionality.

![Dreamer AI Vision Logo](/public/logo.png)

## 🚀 Features

- **Modern UI**: Sleek, responsive design with smooth animations
- **Contact Form**: Secure form with validation and rate limiting
- **Database Persistence**: SQLite integration with Drizzle ORM
- **Security**: CSRF protection and rate limiting
- **Logging**: Comprehensive error logging system

## 📋 Tech Stack

### Frontend
- React with TypeScript
- Framer Motion for animations
- React Hook Form with Zod validation
- TailwindCSS for styling
- Shadcn UI components

### Backend
- Express.js with TypeScript
- SQLite with Drizzle ORM
- CSRF protection with csurf
- Rate limiting with express-rate-limit
- Structured logging system

## 🛠️ Project Structure

```
/Users/apple/gilzero.dev/DreamerAiVision/
├── .eslintrc.json           # ESLint configuration
├── .git/                    # Git repository
├── .gitignore               # Git ignore rules
├── .replit                  # Replit configuration
├── README.md                # Project documentation
├── client/                  # Frontend code
│   ├── index.html           # Main HTML entry point
│   ├── public/              # Client-specific public assets
│   │   └── logo.png         # Application logo
│   └── src/                 # Source code
│       ├── App.tsx          # Main application component
│       ├── components/      # UI components
│       │   ├── design-system/   # Design system documentation
│       │   │   └── design-guide.tsx
│       │   ├── error-boundary.tsx  # Error handling component
│       │   ├── error-test.tsx      # Component for testing errors
│       │   ├── forms/              # Form components
│       │   │   └── contact-form.tsx  # Contact form implementation
│       │   ├── layout/             # Layout components
│       │   │   ├── footer.tsx      # Footer component
│       │   │   ├── header.tsx      # Header/navigation component
│       │   │   └── mobile-menu.tsx # Mobile navigation menu
│       │   ├── sections/           # Page sections
│       │   │   ├── connect-section.tsx  # Contact section
│       │   │   ├── create-section.tsx   # Creation features section
│       │   │   ├── hero-section.tsx     # Hero/landing section
│       │   │   ├── how-section.tsx      # How it works section
│       │   │   ├── imagine-section.tsx  # Features showcase section
│       │   │   ├── who-section.tsx      # About/team section
│       │   │   └── why-section.tsx      # Benefits section
│       │   └── ui/                 # UI component library (50+ components)
│       │       ├── accordion.tsx   # Accordion component
│       │       ├── alert-dialog.tsx # Alert dialog component
│       │       ├── alert.tsx       # Alert component
│       │       ├── apple-button.tsx # Custom Apple-styled button
│       │       ├── apple-card.tsx  # Custom Apple-styled card
│       │       ├── apple-input.tsx # Custom Apple-styled input
│       │       ├── apple-textarea.tsx # Custom Apple-styled textarea
│       │       ├── button.tsx      # Button component
│       │       ├── card.tsx        # Card component
│       │       ├── dialog.tsx      # Dialog/modal component
│       │       ├── dropdown-menu.tsx # Dropdown menu component
│       │       ├── form.tsx        # Form component
│       │       ├── input.tsx       # Input component
│       │       ├── toast.tsx       # Toast notification
│       │       ├── toaster.tsx     # Toast notification manager
│       │       └── ... (35+ more UI components)
│       ├── context/               # React context providers
│       │   └── theme-provider.tsx # Theme context provider
│       ├── hooks/                 # Custom React hooks
│       │   ├── use-mobile.ts      # Hook for responsive design
│       │   ├── use-scroll-spy.ts  # Hook for scroll position tracking
│       │   ├── use-theme.ts       # Hook for theme management
│       │   ├── use-toast.ts       # Hook for toast notifications
│       │   └── use-window-size.ts # Hook for window dimensions
│       ├── index.css              # Global CSS styles
│       ├── lib/                   # Utility functions
│       │   ├── csrf.ts            # CSRF token handling
│       │   ├── queryClient.ts     # API request handling
│       │   ├── types.ts           # TypeScript type definitions
│       │   └── utils.ts           # General utility functions
│       ├── main.tsx               # React application entry point
│       ├── pages/                 # Page components
│       │   └── home-page.tsx      # Home page component
│       └── styles/                # Style definitions
│           ├── animations.ts      # Animation definitions
│           └── typography.ts      # Typography styles
├── dist/                    # Build output directory
├── drizzle.config.ts        # Drizzle ORM configuration
├── generated-icon.png       # Generated app icon
├── logs/                    # Log files directory
│   ├── access.log           # API access logs
│   └── error.log            # Error logs
├── node_modules/            # Node.js dependencies
├── package-lock.json        # NPM lock file
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── public/                  # Public static assets
├── server/                  # Backend code
│   ├── db.ts                # Database connection and initialization
│   ├── index.ts             # Main server entry point
│   ├── logger.ts            # Logging utility
│   ├── routes.ts            # API route definitions
│   ├── storage.ts           # Data access layer
│   └── vite.ts              # Server-side Vite integration
├── shared/                  # Shared code between frontend and backend
│   └── schema.ts            # Shared schema definitions
├── sqlite.db                # SQLite database file
├── tailwind.config.ts       # TailwindCSS configuration
├── theme.json               # Theme configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build tool configuration
```

### Key Architectural Components

#### Frontend Architecture
1. **Component Organization**:
   - **UI Components**: Reusable, atomic UI elements (buttons, inputs, etc.)
   - **Layout Components**: Structural elements (header, footer, etc.)
   - **Section Components**: Content sections for the landing page
   - **Form Components**: Interactive forms including contact form

2. **State Management**:
   - React hooks and context for state management
   - Custom hooks for reusable functionality

3. **Styling Approach**:
   - TailwindCSS for utility-based styling
   - Custom Apple-inspired UI components

#### Backend Architecture
1. **Express Server**: Main API server with middleware configuration
2. **Database Layer**:
   - SQLite database with Drizzle ORM
   - Repository pattern via `SQLiteStorage` class

3. **Security Features**:
   - CSRF protection middleware
   - Rate limiting for API endpoints
   - Input validation with Zod

4. **Logging System**:
   - Structured logging with different log levels
   - File-based logging for errors and access

#### Shared Architecture
1. **Schema Definitions**: Shared types between frontend and backend
2. **Type Safety**: Strong TypeScript typing throughout the application

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd DreamerAiVision
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## 🔒 Security Features

### CSRF Protection

The application implements Cross-Site Request Forgery (CSRF) protection:
- Server-side middleware using `csurf`
- Client-side token fetching and inclusion in requests
- Protected routes explicitly defined

### Rate Limiting

To prevent abuse, the contact form API is rate-limited:
- 5 requests per 15 minutes per IP address
- Appropriate error messages for rate-limited requests

### Input Validation

All user inputs are validated:
- Server-side validation using Zod schemas
- Client-side validation with React Hook Form + Zod

## 📊 Database

The application uses SQLite with Drizzle ORM for data persistence:

```bash
# Run database migrations
npm run db:push
# or
yarn db:push
```

## 🔍 Logging

The application includes a comprehensive logging system:
- Different log levels (INFO, WARN, ERROR, DEBUG)
- Separate log files for errors and access logs
- Detailed HTTP request logging

## 🚢 Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

update_20250418_233825_UTC+0800_elephant_star apple

update_20250419_002112_UTC+0800_dog

update_20250419_005059_UTC+0800_elephant
