# CRA Template for COMP6080

A custom [Create React App](https://create-react-app.dev/) template designed for COMP6080 course.

## ✨ Features

- Pre-configured TypeScript support
- Integrated testing suite (Jest + React Testing Library)
- React Router v6 for routing
- Code quality tools:
  - Prettier - Code formatting
  - ESLint - Code linting
  - Husky - Git hooks management
  - lint-staged - Staged files checking

## 🚀 Quick Start

Create a new project with:

```sh
npx create-react-app my-app --template comp6080-typescript
```

## 📦 Available Scripts

```sh
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 🔧 Project Structure

```
my-app/
  ├── public/          # Static assets
  ├── src/             # Source code
  │   ├── components/  # React components
  │   ├── pages/       # Page components
  │   ├── App.tsx      # Application entry
  │   └── index.tsx    # Render entry
  ├── package.json     # Project configuration
  └── tsconfig.json    # TypeScript configuration
```

## 📝 License

MIT © [Snowden Fu](https://github.com/snowden-fu)