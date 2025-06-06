# [Shadcn Dashboard Project](https://shadcn-dashboard-project.vercel.app/)

A modern, interactive dashboard built with Next.js, TypeScript, and Shadcn/ui components. This project features a comprehensive set of UI components, charts, data tables, and a responsive design system.

## 🚀 Features

- **Modern UI Components**: Built with Shadcn/ui and Radix UI primitives
- **Interactive Charts**: Multiple chart types using Recharts
- **Data Management**: Advanced data tables with sorting, filtering, and pagination
- **User Management**: Complete user CRUD operations with form validation
- **Payment System**: Payment processing and management interface
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme switching with next-themes
- **Type Safety**: Full TypeScript support
- **Form Handling**: React Hook Form with Zod validation

## 📦 Tech Stack

### Core Framework
- **Next.js 15.3.1** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety

### UI & Styling
- **Shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Data & Forms
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@tanstack/react-table** - Table management
- **Recharts** - Chart library
- **date-fns** - Date manipulation

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── payments/          # Payment management pages
│   └── users/             # User management pages
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── charts/           # Chart components
│       ├── AppAreaChart.tsx
│       ├── AppBarChart.tsx
│       ├── AppLineChart.tsx
│       └── AppPieChart.tsx
├── hooks/                # Custom React hooks
│   └── use-mobile.ts     # Mobile detection hook
└── lib/                  # Utility functions

public/                   # Static assets
├── favicon.ico
└── ...

Configuration Files:
├── components.json       # Shadcn/ui configuration
├── eslint.config.mjs    # ESLint configuration
├── package.json         # Dependencies and scripts
└── ...
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shadcn-dashboard-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Components Overview

### Charts
- **AppAreaChart.tsx** - Area chart for trend visualization
- **AppBarChart.tsx** - Bar chart for categorical data
- **AppLineChart.tsx** - Line chart for time-series data
- **AppPieChart.tsx** - Pie chart for proportional data

### UI Components
- **AppSidebar.tsx** - Navigation sidebar
- **CardList.tsx** - Card-based data display
- **EditUser.tsx** - User editing interface
- **Navbar.tsx** - Top navigation bar
- **TablePagination.tsx** - Table pagination controls
- **TodoList.tsx** - Task management component

### Core Features
- **User Management**: Create, read, update, and delete users
- **Payment Processing**: Handle payment transactions and history
- **Data Visualization**: Multiple chart types for analytics
- **Responsive Tables**: Advanced data tables with sorting and filtering

## 🎯 Key Features Explained

### Theme System
The project includes a comprehensive theme system supporting both light and dark modes, implemented with `next-themes` and Tailwind CSS variables.

### Form Validation
All forms use React Hook Form with Zod schema validation for type-safe form handling and robust error management.

### Data Tables
Advanced table functionality powered by `@tanstack/react-table` with features like:
- Sorting and filtering
- Pagination
- Column visibility controls
- Row selection

### Charts Integration
Multiple chart types integrated with Recharts for comprehensive data visualization:
- Real-time data updates
- Interactive tooltips
- Responsive design
- Custom styling

## 🔧 Configuration

### Shadcn/ui Setup
The project is configured with Shadcn/ui components. The `components.json` file contains the configuration for component generation and styling.

### Tailwind Configuration
Tailwind CSS is configured with custom design tokens and component styles to match the Shadcn/ui design system.

### TypeScript Configuration
Full TypeScript support with strict type checking enabled for better development experience and code quality.

## 📱 Responsive Design

The dashboard is built with a mobile-first approach:
- **Mobile**: Optimized for small screens with collapsible navigation
- **Tablet**: Enhanced layout with expanded sidebar
- **Desktop**: Full-featured interface with multi-column layouts

## 🚦 Getting Started Guide

1. **Explore the Dashboard**: Start by navigating through different sections
2. **User Management**: Visit `/users` to manage user data
3. **Payment System**: Check `/payments` for transaction management
4. **Customize Components**: Modify components in the `components/` directory
5. **Add New Features**: Extend functionality by adding new pages in the `app/` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🔮 Future Enhancements

- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Export functionality for data tables
- [ ] Integration with external APIs
- [ ] User role management
- [ ] Advanced filtering and search
- [ ] Performance optimizations

---

Built with ❤️ using Next.js, Shadcn/ui, and modern web technologies.