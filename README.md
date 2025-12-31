# Functional Component

A React-based application featuring multiple AI agent interfaces including Demo Discovery, Navbot Agent, and Slack Agent screens. Built with Vite, React 19, and Tailwind CSS.

## 🚀 Features

- **Demo Discovery AI Agent** - Desktop screen for product demonstration
- **Navbot Agent** - Chatbot interface with custom goals, document upload, DNS verification, and widget management
- **Slack Agent** - RAG (Retrieval-Augmented Generation) Slack bot with document management
- **Authentication** - Login and SignUp components with social authentication options
- **Document Management** - Upload, view, and manage documents with table views
- **UI Components** - Reusable component library with Button component

## 🛠️ Tech Stack

- **React** 19.2.0
- **Vite** 7.2.4
- **React Router DOM** 7.10.1
- **Tailwind CSS** 4.1.17
- **Lucide React** - Icon library
- **ESLint** - Code linting
- **Commitlint** - Commit message linting
- **Husky** - Git hooks

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd functional_component
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/            # UI component library (Button, etc.)
│   ├── tables/        # Table components
│   ├── Login.jsx      # Login component
│   ├── SignUp.jsx     # SignUp component
│   ├── Navbar.jsx     # Navigation bar
│   └── Footer.jsx     # Footer component
├── screens/           # Screen components
│   ├── DemoDiscoveryScreens/    # Product demo screens
│   ├── NavbotAgentScreens/      # Navbot agent screens
│   └── SlackAgentScreens/       # Slack agent screens
├── assets/            # Static assets (icons, images)
├── lib/               # Utility functions
├── App.jsx            # Main app component
└── main.jsx           # Application entry point
```

## 🔧 Development Setup

### Code Quality

The project uses ESLint for code linting and Commitlint for commit message validation.

- **ESLint**: Configured in `eslint.config.js`
- **Commitlint**: Configured in `commitlint.config.js` with conventional commit format
- **Husky**: Git hooks are set up for pre-commit linting

### Pre-commit Hooks

Husky is configured to run lint-staged on pre-commit, which will:
- Run ESLint with auto-fix on staged `.js` and `.jsx` files

## 📝 Component Library

The project includes a reusable UI component library in `src/components/ui/`:

- **Button** - Customizable button component with multiple variants and sizes

## 🚀 Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.


## 🤝 Contributing

1. Follow the conventional commit format (enforced by Commitlint)
2. Ensure code passes ESLint checks
3. Run `npm run lint:fix` before committing

---

For more information about specific components or screens, refer to the component files in the `src/` directory.
