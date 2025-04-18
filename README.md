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
DreamerAiVision/
├── client/                       # Frontend React application
│   ├── src/
│   │   ├── components/           # UI components
│   │   │   ├── forms/            # Form components
│   │   │   │   └── contact-form.tsx  # Contact form with validation
│   │   │   ├── layout/           # Layout components
│   │   │   │   ├── footer.tsx    # Site footer
│   │   │   │   ├── header.tsx    # Site header
│   │   │   │   └── navbar.tsx    # Navigation bar
│   │   │   ├── sections/         # Page sections
│   │   │   │   ├── connect-section.tsx  # Contact section
│   │   │   │   ├── create-section.tsx   # Creation features section
│   │   │   │   ├── hero-section.tsx     # Hero banner section
│   │   │   │   ├── how-section.tsx      # How it works section
│   │   │   │   ├── imagine-section.tsx  # Vision section
│   │   │   │   ├── who-section.tsx      # About team section
│   │   │   │   └── why-section.tsx      # Benefits section
│   │   │   └── ui/               # UI components (Shadcn)
│   │   │       ├── button.tsx    # Button component
│   │   │       ├── card.tsx      # Card component
│   │   │       ├── form.tsx      # Form components
│   │   │       ├── input.tsx     # Input component
│   │   │       ├── textarea.tsx  # Textarea component
│   │   │       └── ... (40+ UI components)
│   │   ├── context/              # React context providers
│   │   ├── hooks/                # Custom React hooks
│   │   │   ├── use-intersection-observer.ts  # Intersection observer hook
│   │   │   ├── use-toast.ts      # Toast notification hook
│   │   │   └── ...
│   │   ├── lib/                  # Utility functions
│   │   │   ├── csrf.ts           # CSRF token utilities
│   │   │   ├── queryClient.ts    # API request utilities
│   │   │   ├── types.ts          # TypeScript type definitions
│   │   │   └── utils.ts          # General utility functions
│   │   ├── pages/                # Page components
│   │   ├── App.tsx               # Main application component
│   │   ├── index.css             # Global CSS
│   │   └── main.tsx              # Application entry point
├── server/                       # Backend Express application
│   ├── db.ts                     # Database configuration
│   ├── index.ts                  # Server entry point
│   ├── logger.ts                 # Logging system
│   ├── routes.ts                 # API routes
│   ├── storage.ts                # Data storage layer
│   └── vite.ts                   # Vite configuration
├── shared/                       # Shared code between client and server
│   └── schema.ts                 # Database schema and types
├── logs/                         # Application logs
│   ├── access.log                # Access logs
│   └── error.log                 # Error logs
├── public/                       # Static assets
│   └── logo.png                  # Application logo
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore file
├── drizzle.config.ts            # Drizzle ORM configuration
├── package.json                 # Project dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── sqlite.db                    # SQLite database file
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite bundler configuration
```

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
