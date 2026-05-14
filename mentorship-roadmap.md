# Fullstack Developer Mentorship Roadmap

## Expanded Mentorship Kit

This roadmap now has a user-friendly local website in the `mentor-portal/` folder.

Open this file in your browser to teach from the dashboard:

- [Mentor Portal](mentor-portal/index.html)

The original roadmap below is the high-level curriculum. The local website turns it into a day-by-day teaching dashboard with videos, research tasks, copyable code samples, homework, tests, progress tracking, and mentor notes.

## Purpose

This roadmap is designed for mentoring an absolute beginner who is not yet tech-savvy and preparing them to become job-ready for a fullstack development team.

The goal is not to make them know everything. The goal is to help them become useful, confident, careful with code, and able to contribute to real team tasks with guidance.

## Teaching Philosophy

A beginner needs three things:

1. Clear mental models
2. Repetition
3. Small visible wins

Avoid teaching tools as isolated topics. Teach each tool as the solution to a practical problem.

Examples:

- We need users to sign in, so we learn authentication.
- We need to save information, so we learn databases.
- We need other people to use our app, so we learn hosting and deployment.
- We need to work safely as a team, so we learn Git and GitHub.

---

# Phase 1: Computer, Internet, And Web Foundations

**Duration:** 1-2 weeks  
**Goal:** Help the mentee understand what the web is before writing serious code.

## Concepts

### Website

**Analogy:** A website is like a restaurant.

- The frontend is the dining area: what customers see and interact with.
- The backend is the kitchen: where work happens behind the scenes.
- The database is the pantry or filing cabinet: where information is stored.
- The server is the staff that receives requests and sends back responses.

### Browser

**Analogy:** A browser is like a customer walking into a restaurant and asking for a menu.

Examples:

- Chrome
- Safari
- Firefox
- Edge

The browser asks for a webpage, receives files, and displays them.

### Internet Request

**Analogy:** Typing a website address is like sending a letter to a business and asking for something back.

The browser says:

> Please give me the homepage.

The server replies:

> Here are the files you need.

## Practical Skills

By the end of this phase, the mentee should understand:

- What a browser is
- What a website is
- What frontend and backend mean
- What files and folders are
- How to open a terminal
- How to use VS Code
- How to navigate basic project files

## Mini Project

Create a simple personal profile page using:

- HTML
- CSS
- A small amount of JavaScript

The page should include:

- Name
- Photo
- About section
- Hobbies
- Contact button

---

# Phase 2: HTML, CSS, And JavaScript Basics

**Duration:** 3-4 weeks  
**Goal:** Build confidence with the raw materials of the web.

## HTML

**Analogy:** HTML is the skeleton of a webpage.

It defines what exists:

- Headings
- Paragraphs
- Buttons
- Images
- Forms
- Links

## CSS

**Analogy:** CSS is the clothing and interior design.

It controls how things look:

- Colors
- Spacing
- Layout
- Fonts
- Responsiveness

## JavaScript

**Analogy:** JavaScript is the electricity and behavior.

It makes things respond:

- Click a button
- Show a message
- Submit a form
- Open a menu
- Update the page

## Skills

HTML:

- Tags
- Forms
- Buttons
- Links
- Images
- Semantic structure

CSS:

- Selectors
- Box model
- Flexbox
- Grid basics
- Responsive design
- Mobile-first thinking

JavaScript:

- Variables
- Functions
- Arrays
- Objects
- Conditions
- Loops
- Events
- DOM manipulation

## Mini Projects

1. Profile card
2. Responsive landing page
3. To-do list
4. Simple calculator
5. Form with validation

## Readiness Check

The mentee should be able to explain:

- HTML creates structure.
- CSS styles the structure.
- JavaScript makes it interactive.

---

# Phase 3: Git And GitHub Foundations

**Duration:** 1-2 weeks  
**Goal:** Teach professional safety and collaboration early.

## Git

**Analogy:** Git is like a video game save system for code.

You can save progress, go back if something breaks, and compare what changed.

Important commands:

```bash
git init
git status
git add .
git commit -m "message"
git log
```

## GitHub

**Analogy:** GitHub is like Google Drive for code, but built for teams.

It stores code online and lets multiple developers work together.

## Branches

**Analogy:** A branch is like trying a recipe variation without ruining the original meal.

The main code stays safe while you experiment.

## Pull Request

**Analogy:** A pull request is like saying:

> I made changes. Please review them before we add them to the official version.

## Skills

- Create a repository
- Clone a repository
- Commit changes
- Push to GitHub
- Pull latest changes
- Create branches
- Open pull requests
- Resolve simple merge conflicts
- Write useful commit messages

## Mini Project

Take one previous project and put it on GitHub.

Professional workflow:

1. Create issue
2. Create branch
3. Make changes
4. Commit
5. Push
6. Open pull request
7. Review together
8. Merge

---

# Phase 4: React Foundations

**Duration:** 4-5 weeks  
**Goal:** Move from static pages to reusable interactive applications.

## React

**Analogy:** React is like building with LEGO blocks.

Instead of creating one giant webpage, you create small reusable pieces called components.

A button, navbar, card, form, or dashboard panel can each be a component.

## Key Concepts

### Components

**Analogy:** Components are reusable building blocks.

Examples:

- `Button`
- `Navbar`
- `UserCard`
- `LoginForm`

### Props

**Analogy:** Props are instructions passed into a component.

Like ordering a sandwich:

> Make this sandwich with cheese, no onions, and extra sauce.

### State

**Analogy:** State is the app's memory.

If a menu is open, a user is logged in, or a form has typed text, that is state.

### Events

**Analogy:** Events are user actions.

Examples:

- Clicking
- Typing
- Submitting
- Selecting

## Skills

- Creating React apps
- JSX
- Components
- Props
- State
- Event handling
- Lists and keys
- Forms
- Conditional rendering
- Basic hooks:
  - `useState`
  - `useEffect`

## Mini Projects

1. Counter app
2. Product list
3. Todo app with filters
4. Weather UI using a public API
5. Basic dashboard mockup

## Readiness Check

The mentee should be able to build a small React app with:

- Multiple components
- State
- Forms
- API data
- Conditional UI

---

# Phase 5: From React To Next.js App Router

**Duration:** 4-6 weeks  
**Goal:** Teach production-style frontend development.

## Why Move From React To Next.js?

**Analogy:** React gives you the parts to build a house.

Next.js gives you the house structure too:

- Rooms
- Doors
- Address system
- Delivery entrance
- Storage areas
- Rules for where things go

React helps build UI. Next.js helps build a full web application.

## Core Next.js Concepts

### File-Based Routing

**Analogy:** In Next.js, folders are like rooms in a building.

If you create:

```txt
app/about/page.tsx
```

Next.js creates:

```txt
/about
```

The folder becomes the website address.

### App Router

The App Router is Next.js's modern way of organizing:

- Pages
- Layouts
- Loading states
- Error states
- Server-rendered content

Teach:

- `app/` folder
- `page.tsx`
- `layout.tsx`
- Nested routes
- Loading UI
- Error UI
- Dynamic routes

### Server Components

**Analogy:** Some work is better done in the kitchen before the food reaches the customer.

Server Components run on the server. They can fetch data before the page reaches the browser.

### Client Components

**Analogy:** Some work must happen at the table with the customer.

Client Components handle browser interactions:

- Clicking
- Typing
- Opening menus
- Form state

Client Components are marked with:

```tsx
"use client";
```

### Route Handlers

**Analogy:** Route handlers are service windows.

The frontend can go to a specific window and ask for data or send information.

## Skills

- Creating a Next.js app
- Understanding the `app/` directory
- Pages and layouts
- Navigation with `Link`
- Dynamic routes
- Server Components vs Client Components
- Fetching data
- Loading and error states
- Environment variables
- Route handlers
- Basic SEO metadata
- Deploying Next.js

## Mini Projects

1. Blog with multiple pages
2. Product catalog with dynamic product pages
3. Dashboard layout
4. Contact form
5. Simple authenticated app

---

# Phase 6: Databases And Authentication With Firebase Or Supabase

**Duration:** 4-6 weeks  
**Goal:** Teach how real apps remember users and data.

Choose the platform your team actually uses. If your team uses neither, Supabase is often easier for beginners because its database is closer to traditional SQL concepts.

## Database

**Analogy:** A database is a very organized filing cabinet.

Instead of keeping information in random papers, the app stores it in labeled drawers and folders.

Examples of data:

- Users
- Tasks
- Products
- Orders
- Messages
- Profiles

## Authentication

**Analogy:** Authentication is the security desk at a building.

It asks:

> Who are you?

Then it checks if you are allowed inside.

Examples:

- Email and password login
- Google login
- Magic link login
- Password reset

## Authorization

**Analogy:** Authentication gets you into the building. Authorization decides which rooms you can enter.

Example:

- Normal user can view their own profile.
- Admin can view all users.
- Manager can edit team data.

## Option A: Supabase

### What Supabase Provides

- PostgreSQL database
- Authentication
- File storage
- API access
- Row Level Security

### Supabase Analogy

Supabase is like renting an office that already includes:

- Filing cabinets
- Security guards
- Storage room
- Reception desk
- Access rules

### Skills

- Create a Supabase project
- Create tables
- Insert data
- Read data
- Update data
- Delete data
- Add authentication
- Protect user data with Row Level Security
- Use environment variables in Next.js
- Connect Supabase to a Next.js app

### Beginner-Friendly Tables

Example project: Task Manager

Tables:

- `profiles`
- `tasks`

Each task has:

- `id`
- `title`
- `completed`
- `user_id`
- `created_at`

## Option B: Firebase

### What Firebase Provides

- Authentication
- Firestore database
- Hosting
- Storage
- Serverless functions

### Firebase Analogy

Firebase is like an app toolbox from Google.

It gives you ready-made parts so you do not build everything from scratch.

### Skills

- Create a Firebase project
- Enable authentication
- Use Firestore
- Add documents
- Read documents
- Update documents
- Delete documents
- Secure data with rules
- Connect Firebase to Next.js

## Mini Projects

1. Login and signup app
2. User profile page
3. Personal task manager
4. Notes app
5. Admin-lite dashboard

## Readiness Check

The mentee should understand:

- Why apps need databases
- Why users need authentication
- Difference between login and permissions
- How to connect frontend to stored data
- How to protect user-specific data

---

# Phase 7: APIs And Fullstack Thinking

**Duration:** 3-4 weeks  
**Goal:** Help the mentee understand how frontend and backend communicate.

## API

**Analogy:** An API is like a waiter in a restaurant.

The customer does not go into the kitchen. They tell the waiter what they want. The waiter takes the request to the kitchen and brings back the result.

Frontend:

> Give me this user's tasks.

API:

> Here are the tasks.

## Request And Response

**Analogy:** A request is asking a question. A response is the answer.

Example:

```txt
Request: Get all products
Response: Here is the product list
```

## HTTP Methods

Explain simply:

- `GET`: fetch information
- `POST`: create something new
- `PUT` / `PATCH`: update something
- `DELETE`: remove something

## Skills

- Fetching from APIs
- Handling loading states
- Handling errors
- Creating route handlers in Next.js
- Sending form data
- Validating input
- Protecting routes
- Understanding status codes

## Mini Project

Build a small fullstack app called Team Task Tracker.

Features:

- Sign up
- Log in
- Create task
- Edit task
- Mark complete
- Delete task
- View only your own tasks

---

# Phase 8: DNS, Domains, Hosting, And Deployment

**Duration:** 2-3 weeks  
**Goal:** Teach how an app becomes public on the internet.

## Hosting

**Analogy:** Hosting is renting land or a building where your website lives.

Your code needs a place to run so other people can visit it.

Examples:

- Vercel
- Netlify
- Firebase Hosting
- Render
- Railway

## Domain Name

**Analogy:** A domain name is the street address of your website.

Example:

```txt
example.com
```

Instead of telling people a hard-to-remember server location, you give them a friendly address.

## DNS

**Analogy:** DNS is the internet's phonebook.

When someone types:

```txt
myapp.com
```

DNS looks up where that website actually lives and sends the visitor there.

## Vercel And Netlify

**Analogy:** Vercel and Netlify are like property managers for websites.

They take your code, build it, host it, and give you a public link.

## Deployment Pipeline

**Analogy:** A deployment pipeline is like a conveyor belt.

You push code to GitHub, and the system automatically:

1. Picks up the code
2. Installs dependencies
3. Builds the app
4. Checks for errors
5. Publishes it online

## Skills

- Deploy to Vercel
- Deploy to Netlify
- Connect GitHub repository
- Understand preview deployments
- Set environment variables
- Add a custom domain
- Understand DNS records:
  - `A`
  - `CNAME`
  - `TXT`
- Debug failed deployments
- Read build logs

## Mini Project

Deploy the Team Task Tracker.

Requirements:

- GitHub repository
- Vercel or Netlify deployment
- Environment variables configured
- Working login
- Working database
- Public URL
- Optional custom domain

---

# Phase 9: Professional Team Workflow

**Duration:** 3-4 weeks  
**Goal:** Prepare the mentee to work like a junior developer on your team.

## How Real Teams Work

**Analogy:** A software team is like a kitchen during dinner service.

Everyone has stations. People communicate clearly. Nobody changes the menu secretly. Every dish is checked before it goes out.

## Issues

An issue is a written task.

Good issue:

```txt
Add a login form with email and password fields.
```

Poor issue:

```txt
Fix stuff.
```

## Branches

Use one branch per task.

Examples:

```bash
feature/login-form
fix/navbar-mobile-layout
```

## Pull Requests

A pull request should explain:

- What changed
- Why it changed
- How to test it
- Screenshots if UI changed

## Code Review

**Analogy:** Code review is like proofreading an important email before sending it.

Teach them that review is not personal criticism. It is how teams protect quality.

## Environment Variables

**Analogy:** Environment variables are private keys kept outside the public code.

Examples:

```txt
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
```

Teach:

- Never commit secrets
- Use `.env.local`
- Add `.env.example`
- Configure variables in Vercel or Netlify

## Basic CI/CD

**Analogy:** CI/CD is an automatic quality checker and delivery system.

When code is pushed, it can automatically:

- Run tests
- Check formatting
- Build the app
- Deploy a preview

## Skills

- Working from tickets
- Creating branches
- Opening pull requests
- Writing PR descriptions
- Reviewing code
- Handling feedback
- Pulling latest changes
- Resolving conflicts
- Using `.env.local`
- Reading deployment logs

## Practice Routine

Every task should follow this workflow:

1. Read the issue
2. Ask clarifying questions
3. Create a branch
4. Make changes
5. Test locally
6. Commit
7. Push
8. Open PR
9. Respond to review
10. Merge
11. Confirm deployment

---

# Phase 10: Testing, Debugging, And Code Quality

**Duration:** 3-4 weeks  
**Goal:** Teach the mentee how to find and prevent mistakes.

## Debugging

**Analogy:** Debugging is detective work.

Something happened. Your job is to gather clues.

Clues include:

- Error messages
- Console logs
- Network requests
- Broken UI
- Failed build logs

## Testing

**Analogy:** Tests are checklists.

Before a plane takes off, pilots check important things. Tests do the same for code.

## Skills

- Reading error messages
- Using browser dev tools
- Console logging responsibly
- Checking network requests
- Understanding stack traces
- Writing basic unit tests
- Testing components
- Manual QA checklist
- Accessibility basics

## Tools

Depending on your stack:

- Vitest
- Jest
- React Testing Library
- Playwright
- ESLint
- Prettier
- TypeScript

## Mini Project

Add tests and quality checks to the Task Tracker:

- Test helper functions
- Test form validation
- Test protected pages manually
- Run lint
- Run build
- Fix errors

---

# Phase 11: TypeScript Basics

**Duration:** 2-3 weeks  
**Goal:** Help the mentee write safer code.

## TypeScript

**Analogy:** TypeScript is like labels on boxes.

If a box says "plates," you should not put shoes inside it.

JavaScript lets many mistakes happen silently. TypeScript warns you earlier.

## Concepts

- `string`
- `number`
- `boolean`
- Arrays
- Objects
- Optional values
- Function parameter types
- Return types
- Interfaces and types
- Typing React props
- Typing API responses

## Example

```ts
type User = {
  id: string;
  name: string;
  email: string;
};
```

## Readiness Check

The mentee should be able to:

- Type component props
- Understand simple TypeScript errors
- Avoid using `any` by default
- Type data coming from Supabase or Firebase

---

# Phase 12: Capstone Project

**Duration:** 4-6 weeks  
**Goal:** Build a team-relevant production-style app.

## Recommended Capstone

Build a simplified internal team tool.

Example: Mentor Team Task Board

Features:

- Landing or login page
- User signup and login
- Dashboard
- Create tasks
- Assign tasks
- Mark tasks complete
- Comment on tasks
- Filter tasks
- User profile
- Admin-only page
- Database integration
- Deployed public app
- GitHub repo
- Pull request history

## Required Stack

- Next.js App Router
- React
- TypeScript
- Supabase or Firebase
- GitHub
- Vercel or Netlify
- Environment variables
- Basic tests
- README

## Professional Requirements

The project should include:

- Clear folder structure
- Reusable components
- Protected routes
- Database schema
- Auth flow
- Error states
- Loading states
- Empty states
- Responsive design
- Deployment
- README setup instructions

---

# Suggested Timeline

## 6-Month Version

| Month | Focus |
| --- | --- |
| 1 | Web basics, HTML, CSS, JavaScript |
| 2 | JavaScript practice, Git, GitHub, React basics |
| 3 | React projects, forms, API fetching |
| 4 | Next.js App Router, routing, layouts, server/client components |
| 5 | Supabase/Firebase, auth, database, deployment |
| 6 | Team workflow, testing, capstone project |

## 3-Month Intensive Version

| Week | Focus |
| --- | --- |
| 1 | Web basics, HTML, CSS |
| 2 | JavaScript basics |
| 3 | JavaScript projects |
| 4 | Git, GitHub, React intro |
| 5 | React components, state, forms |
| 6 | APIs and React project |
| 7 | Next.js App Router |
| 8 | Next.js data fetching and routing |
| 9 | Supabase/Firebase auth and database |
| 10 | Deployment, DNS, hosting |
| 11 | Testing, debugging, professional workflow |
| 12 | Capstone and final review |

---

# Weekly Mentorship Format

Use the same rhythm each week.

## 1. Concept Session

Explain the main idea using an analogy first.

Example:

> Today we are learning authentication. Think of it like a security desk.

## 2. Live Demo

Build a tiny version while explaining your thinking.

## 3. Guided Practice

Let the mentee build with your help.

## 4. Solo Task

Give them a small assignment to complete independently.

## 5. Review

Review:

- What worked
- What confused them
- What needs repetition
- Code quality
- Git habits

---

# Beginner-Friendly Evaluation Rubric

## Technical Basics

The mentee can:

- Build responsive pages
- Use JavaScript confidently
- Create React components
- Manage state and forms
- Use Next.js routing
- Connect to a database
- Implement login and logout
- Deploy an app

## Workflow

The mentee can:

- Use Git branches
- Commit clearly
- Push to GitHub
- Open pull requests
- Respond to review
- Read deployment logs
- Use environment variables safely

## Problem Solving

The mentee can:

- Read error messages
- Search documentation
- Ask clear questions
- Break a task into steps
- Debug without panicking

## Team Readiness

The mentee can:

- Pick up a small ticket
- Ask for clarification
- Work in an existing codebase
- Avoid committing secrets
- Communicate progress
- Accept code review professionally

---

# Final Job-Ready Milestone

The mentee is ready for supervised junior work when they can complete this task:

> Add a protected dashboard page to a Next.js app where logged-in users can create, view, update, and delete their own tasks, then open a pull request and deploy it to a preview environment.

This proves they understand:

- Frontend UI
- React state
- Next.js App Router
- Authentication
- Database operations
- Protected routes
- GitHub workflow
- Deployment
- Environment variables
- Basic debugging

At this point, they can begin contributing real value to the team with mentorship.
