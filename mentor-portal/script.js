const weeks = [
  {
    number: 1,
    title: "Web Foundations",
    focus: "Internet basics, tools, files, HTML, and CSS.",
    outcome: "The learner can explain what a website is and build a simple profile page.",
    days: [
      {
        day: 1,
        title: "What The Web Is",
        objective: "Build a simple mental model of browsers, servers, frontend, backend, and databases.",
        talk: [
          "Ask what they think happens when they type a website address.",
          "Explain frontend, backend, database, browser, and server using the restaurant analogy.",
          "Show three websites and ask what parts are visible frontend and what might be backend."
        ],
        analogy: "A website is like a restaurant. The frontend is the dining area, the backend is the kitchen, the database is the pantry, and the server is the staff that responds to requests.",
        watch: [
          ["Frontend Web Development Bootcamp intro", "https://www.youtube.com/watch?v=zJSY8tbf_ys"],
          ["MDN Learn Web Development", "https://developer.mozilla.org/en-US/docs/Learn"]
        ],
        research: "Search what a browser, server, and database are. Write one sentence for each in your own words.",
        demo: "Open a website, use browser dev tools, and show that the page is made of HTML, CSS, and JavaScript.",
        practice: "Draw a simple request-response diagram for visiting a website.",
        homework: [
          "Write a 5-bullet explanation of what happens when someone visits a website.",
          "Find one website and list what you think is frontend, backend, and database.",
          "Create a folder named first-website."
        ],
        checkpoint: [
          "What does the browser do?",
          "What is the difference between frontend and backend?",
          "Where does a website store information?"
        ]
      },
      {
        day: 2,
        title: "Files, Folders, VS Code, And Terminal",
        objective: "Get comfortable opening projects, creating files, and navigating the terminal.",
        talk: [
          "Explain that code lives in files and files live in folders.",
          "Show VS Code as the workbench and terminal as the command window.",
          "Demonstrate opening a folder, creating files, and saving changes."
        ],
        analogy: "A project folder is like a school binder. Each file is a page with a specific job.",
        watch: [
          ["VS Code beginner overview", "https://www.youtube.com/results?search_query=VS+Code+beginner+tutorial"],
          ["Command line basics", "https://www.youtube.com/results?search_query=command+line+basics+for+beginners"]
        ],
        research: "Look up the meaning of file extension, folder path, and terminal command.",
        demo: "Create index.html, styles.css, and script.js in a project folder.",
        practice: "Use the terminal to list files and move into the project folder.",
        homework: [
          "Create a project folder with three files: index.html, styles.css, script.js.",
          "Write what each file is responsible for.",
          "Practice opening the folder in VS Code twice without help."
        ],
        checkpoint: [
          "What is a file extension?",
          "Why do we keep project files in one folder?",
          "What does the terminal help us do?"
        ]
      },
      {
        day: 3,
        title: "HTML Structure",
        objective: "Use HTML to create meaningful page structure.",
        talk: [
          "Explain HTML as the skeleton of a page.",
          "Show headings, paragraphs, links, images, lists, and buttons.",
          "Explain why semantic tags help people and browsers understand the page."
        ],
        analogy: "HTML is like the frame of a house. It decides where the rooms, doors, and windows are.",
        watch: [
          ["Learn HTML - Full Tutorial for Beginners", "https://www.youtube.com/watch?v=kUMe1FH4CHE"],
          ["MDN HTML Reference", "https://developer.mozilla.org/en-US/docs/Web/HTML"]
        ],
        research: "Research the difference between h1, p, a, img, ul, li, header, main, and footer.",
        demo: "Build a basic personal profile page with header, main content, and footer.",
        practice: "Add a hobbies list, a link, and an image placeholder.",
        homework: [
          "Finish the profile page structure.",
          "Use at least one heading, paragraph, list, link, image, and button.",
          "Write a short explanation of what semantic HTML means."
        ],
        checkpoint: [
          "What problem does HTML solve?",
          "Why should every page have only one main h1?",
          "What is a semantic tag?"
        ]
      },
      {
        day: 4,
        title: "CSS Basics",
        objective: "Style a page with color, spacing, font size, borders, and layout basics.",
        talk: [
          "Explain CSS as the visual design layer.",
          "Show selectors, declarations, classes, and the box model.",
          "Explain why spacing is as important as color."
        ],
        analogy: "CSS is like clothing and interior design. The HTML body exists already, but CSS decides how it looks and feels.",
        watch: [
          ["CSS Full Course", "https://www.youtube.com/watch?v=ieTHC78giGQ"],
          ["MDN CSS Basics", "https://developer.mozilla.org/en-US/docs/Learn/CSS"]
        ],
        research: "Research margin, padding, border, class, id, and selector.",
        demo: "Style the profile page with fonts, colors, spacing, and a centered layout.",
        practice: "Create two different card styles and apply them to different sections.",
        homework: [
          "Style the profile page so it looks clean on desktop and mobile.",
          "Use at least three classes.",
          "Write down the difference between margin and padding."
        ],
        checkpoint: [
          "What does a CSS selector do?",
          "What is the box model?",
          "When would you use a class?"
        ]
      },
      {
        day: 5,
        title: "Profile Page Review",
        objective: "Complete and review the first mini project.",
        talk: [
          "Review HTML structure and CSS styling together.",
          "Teach them to check their work in the browser after every small change.",
          "Introduce simple self-review: structure, spacing, readability, and mobile view."
        ],
        analogy: "Reviewing a webpage is like checking a room before guests arrive: is everything in the right place, clean, and easy to use?",
        watch: [
          ["Frontend Web Development Bootcamp review", "https://www.youtube.com/watch?v=zJSY8tbf_ys"]
        ],
        research: "Find two personal portfolio pages and write what makes them easy or hard to read.",
        demo: "Use dev tools to inspect the profile page and test mobile width.",
        practice: "Improve spacing, fix one visual issue, and make one section easier to read.",
        homework: [
          "Submit the finished profile page.",
          "Write a short README explaining what you built.",
          "Prepare to explain every HTML tag and CSS class you used."
        ],
        checkpoint: [
          "Can you explain your page structure?",
          "Can you change a color and spacing value on purpose?",
          "Can you test the page on a narrow screen?"
        ]
      }
    ]
  },
  {
    number: 2,
    title: "HTML And CSS Deepening",
    focus: "Forms, layout, responsive design, and accessibility.",
    outcome: "The learner can build a responsive landing page with a form.",
    days: [
      {
        day: 6,
        title: "Forms And Inputs",
        objective: "Create forms with labels, inputs, buttons, and basic required fields.",
        talk: [
          "Explain forms as the way users hand information to a website.",
          "Show labels, input types, textarea, select, and buttons.",
          "Explain why labels matter for accessibility and clarity."
        ],
        analogy: "A form is like a paper application. Each input is a blank field the user fills in.",
        watch: [
          ["HTML forms on MDN", "https://developer.mozilla.org/en-US/docs/Learn/Forms"],
          ["Learn HTML - forms section", "https://www.youtube.com/watch?v=kUMe1FH4CHE"]
        ],
        research: "Research input types: text, email, password, number, checkbox, radio, and submit.",
        demo: "Build a contact form with name, email, message, and submit button.",
        practice: "Add a select field and required validation.",
        homework: [
          "Create a contact form section for the profile page.",
          "Use labels for every input.",
          "Write why a password input hides typed characters."
        ],
        checkpoint: [
          "Why should every input have a label?",
          "What does the required attribute do?",
          "What is the difference between input and textarea?"
        ]
      },
      {
        day: 7,
        title: "Flexbox Layout",
        objective: "Use Flexbox to align and distribute page content.",
        talk: [
          "Explain one-dimensional layout: row or column.",
          "Show display flex, gap, justify-content, align-items, and flex-wrap.",
          "Demonstrate common layouts: navbar, card row, centered item."
        ],
        analogy: "Flexbox is like arranging chairs in a row or column and deciding how much space sits between them.",
        watch: [
          ["CSS Flexbox tutorial search", "https://www.youtube.com/results?search_query=CSS+Flexbox+beginner+tutorial"],
          ["MDN Flexbox", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"]
        ],
        research: "Research justify-content, align-items, gap, flex-direction, and flex-wrap.",
        demo: "Build a navbar and a row of three feature cards.",
        practice: "Make the cards wrap on small screens.",
        homework: [
          "Add a responsive navigation bar to the page.",
          "Create a three-card section using Flexbox.",
          "Explain what happens when flex-wrap is turned on."
        ],
        checkpoint: [
          "When is Flexbox useful?",
          "What is the main axis?",
          "How do you add space between flex items?"
        ]
      },
      {
        day: 8,
        title: "Grid And Responsive Design",
        objective: "Use CSS Grid and media queries for responsive layouts.",
        talk: [
          "Explain two-dimensional layout: rows and columns.",
          "Show grid-template-columns, gap, minmax, and media queries.",
          "Explain mobile-first thinking."
        ],
        analogy: "CSS Grid is like arranging items on graph paper. You can control both rows and columns.",
        watch: [
          ["CSS Grid tutorial search", "https://www.youtube.com/results?search_query=CSS+Grid+beginner+tutorial"],
          ["MDN CSS Grid", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"]
        ],
        research: "Research grid-template-columns, repeat, minmax, and media query.",
        demo: "Build a responsive gallery using Grid.",
        practice: "Turn a 3-column desktop layout into a 1-column mobile layout.",
        homework: [
          "Create a responsive services section using Grid.",
          "Add one media query.",
          "Test it at desktop and mobile sizes."
        ],
        checkpoint: [
          "When is Grid better than Flexbox?",
          "What does a media query do?",
          "What does mobile-first mean?"
        ]
      },
      {
        day: 9,
        title: "Accessibility And Readability",
        objective: "Make pages easier to read and use for more people.",
        talk: [
          "Explain that accessibility means more people can use the product.",
          "Discuss readable text, color contrast, labels, alt text, and keyboard navigation.",
          "Show how poor contrast and missing labels hurt users."
        ],
        analogy: "Accessibility is like adding ramps, signs, and clear lighting to a building.",
        watch: [
          ["Web accessibility beginner search", "https://www.youtube.com/results?search_query=web+accessibility+for+beginners"],
          ["MDN Accessibility", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility"]
        ],
        research: "Research alt text, color contrast, keyboard focus, and aria-label.",
        demo: "Improve a page by adding alt text, labels, and better contrast.",
        practice: "Navigate the page using only the keyboard.",
        homework: [
          "Audit the landing page for accessibility issues.",
          "Fix missing labels or alt text.",
          "Write three accessibility rules you will remember."
        ],
        checkpoint: [
          "Why does alt text matter?",
          "Why is color contrast important?",
          "Can the page be used with a keyboard?"
        ]
      },
      {
        day: 10,
        title: "Landing Page Build",
        objective: "Build and review a complete responsive landing page.",
        talk: [
          "Review structure, layout, forms, and accessibility.",
          "Explain how to break a page into sections before coding.",
          "Introduce a simple acceptance checklist."
        ],
        analogy: "Building a page is like planning a shop display: first decide the sections, then arrange them clearly.",
        watch: [
          ["Frontend Web Development Bootcamp CSS sections", "https://www.youtube.com/watch?v=zJSY8tbf_ys"]
        ],
        research: "Find one well-designed landing page and describe its sections.",
        demo: "Sketch a page plan before coding.",
        practice: "Build hero, features, form, and footer sections.",
        homework: [
          "Finish the responsive landing page.",
          "Include a form, three feature cards, and a footer.",
          "Prepare to explain how your layout changes on mobile."
        ],
        checkpoint: [
          "Can you plan sections before coding?",
          "Can you explain your responsive layout?",
          "Did you test keyboard and mobile behavior?"
        ]
      }
    ]
  },
  {
    number: 3,
    title: "JavaScript Basics",
    focus: "Variables, functions, conditions, arrays, objects, and loops.",
    outcome: "The learner can write small JavaScript programs and explain the logic.",
    days: [
      {
        day: 11,
        title: "JavaScript Purpose And Variables",
        objective: "Understand what JavaScript does and store values in variables.",
        talk: [
          "Explain JavaScript as behavior and decision-making.",
          "Show strings, numbers, booleans, let, const, and console.log.",
          "Explain why names should be descriptive."
        ],
        analogy: "JavaScript is the electricity in the building. It makes buttons, forms, and pages respond.",
        watch: [
          ["Learn JavaScript - Full Course for Beginners", "https://www.youtube.com/watch?v=PkZNo7MFNFg"],
          ["JavaScript Tutorial for Beginners", "https://www.youtube.com/watch?v=W6NZfCO5SIk"]
        ],
        research: "Research string, number, boolean, variable, let, and const.",
        demo: "Use console.log to print a user's name, age, and account status.",
        practice: "Create variables for a product name, price, and availability.",
        homework: [
          "Write 10 variables using string, number, and boolean values.",
          "Print a short sentence using those variables.",
          "Explain the difference between let and const."
        ],
        checkpoint: [
          "What problem does a variable solve?",
          "What is a string?",
          "When should you use const?"
        ]
      },
      {
        day: 12,
        title: "Functions And Conditions",
        objective: "Write reusable instructions and make simple decisions.",
        talk: [
          "Explain functions as named instructions.",
          "Show parameters, return values, if, else, and comparison operators.",
          "Connect conditions to real product rules."
        ],
        analogy: "A function is like a recipe. You give it ingredients, it follows steps, and it gives you a result.",
        watch: [
          ["JavaScript functions search", "https://www.youtube.com/results?search_query=javascript+functions+for+beginners"],
          ["MDN JavaScript basics", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"]
        ],
        research: "Research function, parameter, return, if, else, and comparison operator.",
        demo: "Create a function that checks if someone is old enough to register.",
        practice: "Create a function that calculates a discounted price.",
        homework: [
          "Write three functions: greetUser, calculateTotal, and canLogin.",
          "Use if/else in at least one function.",
          "Write examples showing the result of each function."
        ],
        checkpoint: [
          "What is a parameter?",
          "What does return mean?",
          "When do we use if/else?"
        ]
      },
      {
        day: 13,
        title: "Arrays And Objects",
        objective: "Store lists and grouped information.",
        talk: [
          "Explain arrays as lists and objects as labeled detail cards.",
          "Show indexes, properties, dot notation, and bracket notation.",
          "Use product and user examples."
        ],
        analogy: "An array is like a shopping list. An object is like an ID card with labeled fields.",
        watch: [
          ["JavaScript arrays and objects search", "https://www.youtube.com/results?search_query=javascript+arrays+and+objects+beginner"],
          ["MDN JavaScript Objects", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"]
        ],
        research: "Research array, index, object, property, and method.",
        demo: "Create a list of tasks and a user profile object.",
        practice: "Access the first task and the user's email.",
        homework: [
          "Create an array of five products.",
          "Create an object for one product with name, price, category, and inStock.",
          "Print one sentence using values from the object."
        ],
        checkpoint: [
          "When should you use an array?",
          "When should you use an object?",
          "What does index 0 mean?"
        ]
      },
      {
        day: 14,
        title: "Loops And Repetition",
        objective: "Repeat logic over lists of data.",
        talk: [
          "Explain why developers avoid repeating code manually.",
          "Show for loops and forEach.",
          "Connect loops to rendering lists in web apps."
        ],
        analogy: "A loop is like checking every item on a shopping list one by one.",
        watch: [
          ["JavaScript loops search", "https://www.youtube.com/results?search_query=javascript+loops+for+beginners"],
          ["MDN Loops", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code"]
        ],
        research: "Research for loop, forEach, iteration, and array length.",
        demo: "Loop through tasks and print each title.",
        practice: "Loop through products and print only products in stock.",
        homework: [
          "Create an array of tasks.",
          "Use a loop to print every task.",
          "Use a condition inside the loop to show only completed tasks."
        ],
        checkpoint: [
          "Why are loops useful?",
          "What does array.length tell us?",
          "How can a loop and condition work together?"
        ]
      },
      {
        day: 15,
        title: "JavaScript Mini Project",
        objective: "Build a small calculator or quiz using core JavaScript.",
        talk: [
          "Review variables, functions, arrays, objects, conditions, and loops.",
          "Explain how to break a small program into steps.",
          "Introduce simple debugging with console.log."
        ],
        analogy: "A program is like a checklist. You write each step clearly, then run through the list.",
        watch: [
          ["JavaScript Tutorial for Beginners review", "https://www.youtube.com/watch?v=W6NZfCO5SIk"]
        ],
        research: "Search for one JavaScript error you do not understand and write what it means.",
        demo: "Plan a quiz app in comments before writing code.",
        practice: "Build a three-question quiz in the console.",
        homework: [
          "Build either a simple calculator or quiz.",
          "Use at least one function, one condition, and one array.",
          "Explain your code line by line during review."
        ],
        checkpoint: [
          "Can you break a problem into small steps?",
          "Can you debug with console.log?",
          "Can you explain your own code?"
        ]
      }
    ]
  },
  {
    number: 4,
    title: "DOM, Browser Interaction, Git, And GitHub",
    focus: "DOM events, forms, localStorage, Git basics, and GitHub workflow.",
    outcome: "The learner can build an interactive page and submit it through GitHub.",
    days: [
      {
        day: 16,
        title: "DOM Selection And Events",
        objective: "Use JavaScript to select elements and respond to clicks.",
        talk: [
          "Explain the DOM as the browser's live map of the page.",
          "Show querySelector, textContent, classList, and addEventListener.",
          "Connect events to buttons and menus."
        ],
        analogy: "The DOM is like a control panel for the webpage. JavaScript presses switches on that panel.",
        watch: [
          ["JavaScript DOM tutorial search", "https://www.youtube.com/results?search_query=javascript+dom+tutorial+for+beginners"],
          ["MDN DOM Introduction", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"]
        ],
        research: "Research querySelector, addEventListener, textContent, and classList.",
        demo: "Create a button that changes text and toggles a class.",
        practice: "Build a show/hide details section.",
        homework: [
          "Add one interactive button to your landing page.",
          "Use addEventListener instead of inline onclick.",
          "Write what the DOM is in one paragraph."
        ],
        checkpoint: [
          "What does querySelector do?",
          "What is an event listener?",
          "How can JavaScript change the page?"
        ]
      },
      {
        day: 17,
        title: "Form Validation",
        objective: "Read form input and show helpful feedback.",
        talk: [
          "Explain form validation as checking information before accepting it.",
          "Show form submit events and preventDefault.",
          "Teach helpful error messages."
        ],
        analogy: "Validation is like checking a form at the front desk before filing it away.",
        watch: [
          ["JavaScript form validation search", "https://www.youtube.com/results?search_query=javascript+form+validation+beginner"],
          ["MDN Client-side form validation", "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"]
        ],
        research: "Research preventDefault, value, trim, and validation message.",
        demo: "Validate a contact form with name and email.",
        practice: "Show an error if the message is too short.",
        homework: [
          "Add validation to your contact form.",
          "Show a success message when the form is valid.",
          "Write three examples of bad user input."
        ],
        checkpoint: [
          "Why do we validate forms?",
          "What does preventDefault do?",
          "What makes an error message useful?"
        ]
      },
      {
        day: 18,
        title: "localStorage And Todo App",
        objective: "Save simple data in the browser.",
        talk: [
          "Explain that localStorage saves small data in the user's browser.",
          "Show JSON.stringify and JSON.parse.",
          "Discuss why this is not a real database."
        ],
        analogy: "localStorage is like a sticky note inside one browser. It remembers small things, but it is not a shared filing cabinet.",
        watch: [
          ["localStorage JavaScript tutorial search", "https://www.youtube.com/results?search_query=javascript+localstorage+tutorial+beginner"],
          ["MDN localStorage", "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"]
        ],
        research: "Research localStorage, JSON.stringify, JSON.parse, and browser storage.",
        demo: "Build a small todo list that saves tasks.",
        practice: "Add delete or complete behavior.",
        homework: [
          "Build a todo list with add, complete, and delete.",
          "Save tasks to localStorage.",
          "Explain why localStorage is not enough for a team app."
        ],
        checkpoint: [
          "Where does localStorage save data?",
          "Why do we use JSON.stringify?",
          "What happens if the user changes browser?"
        ]
      },
      {
        day: 19,
        title: "Git Basics",
        objective: "Save code changes with Git.",
        talk: [
          "Explain Git as a save system for code.",
          "Show status, add, commit, and log.",
          "Explain useful commit messages."
        ],
        analogy: "Git is like save points in a video game. You can see what changed and return to earlier points when needed.",
        watch: [
          ["Git and GitHub for Beginners", "https://www.youtube.com/watch?v=RGOj5yH7evk"],
          ["About GitHub and Git", "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"]
        ],
        research: "Research repository, commit, branch, working tree, and staging area.",
        demo: "Initialize Git, commit the todo app, and view the log.",
        practice: "Make one change and create a second commit.",
        homework: [
          "Put your todo app into a Git repository.",
          "Make at least three clear commits.",
          "Write what git status tells you."
        ],
        checkpoint: [
          "What is a commit?",
          "Why do we stage files?",
          "What makes a commit message useful?"
        ]
      },
      {
        day: 20,
        title: "GitHub And Pull Requests",
        objective: "Push code to GitHub and understand pull requests.",
        talk: [
          "Explain GitHub as shared cloud storage for Git repositories.",
          "Explain branches and pull requests as team safety tools.",
          "Show the professional workflow from issue to PR."
        ],
        analogy: "A pull request is like asking a teammate to review your changes before they go into the official copy.",
        watch: [
          ["GitHub Flow Docs", "https://docs.github.com/en/get-started/using-github/github-flow"],
          ["Git and GitHub for Beginners review", "https://www.youtube.com/watch?v=RGOj5yH7evk"]
        ],
        research: "Research origin, push, pull, branch, pull request, and merge.",
        demo: "Create a GitHub repo, push code, make a branch, and open a pull request.",
        practice: "Create a branch and update the README.",
        homework: [
          "Push your todo app to GitHub.",
          "Create a branch and open a pull request.",
          "Write a PR description with what changed and how to test."
        ],
        checkpoint: [
          "Why do teams use pull requests?",
          "What is a branch?",
          "What should a PR description include?"
        ]
      }
    ]
  },
  {
    number: 5,
    title: "React Foundations",
    focus: "Components, props, state, events, lists, and forms.",
    outcome: "The learner can build a small React app with reusable components.",
    days: [
      {
        day: 21,
        title: "Why React Exists",
        objective: "Understand components and why React helps build bigger interfaces.",
        talk: [
          "Compare one large HTML page with reusable UI pieces.",
          "Explain components as custom building blocks.",
          "Show how JSX mixes HTML-like structure with JavaScript."
        ],
        analogy: "React is like building with reusable blocks. You can create one button design and use it in many places.",
        watch: [
          ["React Course - Beginner's Tutorial", "https://www.youtube.com/watch?v=bMknfKXIFA8"],
          ["React Quick Start", "https://react.dev/learn"]
        ],
        research: "Research component, JSX, import, export, and render.",
        demo: "Create a React app and build Header, Card, and Footer components.",
        practice: "Split one page into three components.",
        homework: [
          "Create a React profile page using at least three components.",
          "Write what JSX is in your own words.",
          "Explain why components are useful."
        ],
        checkpoint: [
          "What is a component?",
          "Why is React useful?",
          "What does JSX look like?"
        ]
      },
      {
        day: 22,
        title: "Props And Composition",
        objective: "Pass data into reusable components.",
        talk: [
          "Explain props as instructions passed into components.",
          "Show a Card component reused with different titles and descriptions.",
          "Discuss parent and child components."
        ],
        analogy: "Props are like ordering a sandwich with specific instructions: cheese, no onions, extra sauce.",
        watch: [
          ["React props search", "https://www.youtube.com/results?search_query=React+props+beginner+tutorial"],
          ["Passing Props to a Component", "https://react.dev/learn/passing-props-to-a-component"]
        ],
        research: "Research props, parent component, child component, and children prop.",
        demo: "Build a reusable ProductCard component.",
        practice: "Render three cards using different props.",
        homework: [
          "Build a TeamMemberCard component.",
          "Reuse it for at least four people.",
          "Explain the difference between a component and props."
        ],
        checkpoint: [
          "What are props?",
          "Who sends props?",
          "Can a component use different data each time?"
        ]
      },
      {
        day: 23,
        title: "State And Events",
        objective: "Use useState to remember changing information.",
        talk: [
          "Explain state as the app's memory.",
          "Show useState with a counter and a toggle.",
          "Connect state to user actions like clicking and typing."
        ],
        analogy: "State is like a whiteboard showing the current situation: menu open, count is 3, user typed hello.",
        watch: [
          ["React state search", "https://www.youtube.com/results?search_query=React+useState+beginner+tutorial"],
          ["State: A Component's Memory", "https://react.dev/learn/state-a-components-memory"]
        ],
        research: "Research useState, event handler, setState, and re-render.",
        demo: "Build a counter and a show/hide panel.",
        practice: "Create a favorite button that changes text when clicked.",
        homework: [
          "Build a small React counter.",
          "Build a toggle that shows and hides profile details.",
          "Explain what causes React to re-render."
        ],
        checkpoint: [
          "What is state?",
          "Why do we use set functions?",
          "What is an event handler?"
        ]
      },
      {
        day: 24,
        title: "Lists And Forms In React",
        objective: "Render lists and handle controlled form inputs.",
        talk: [
          "Show mapping over arrays to render UI.",
          "Explain keys in lists.",
          "Show controlled inputs with state."
        ],
        analogy: "Rendering a list is like printing one name tag for every person on a guest list.",
        watch: [
          ["Rendering Lists", "https://react.dev/learn/rendering-lists"],
          ["React forms search", "https://www.youtube.com/results?search_query=React+forms+controlled+inputs+beginner"]
        ],
        research: "Research map, key prop, controlled input, and onChange.",
        demo: "Build a todo form that adds items to a list.",
        practice: "Add a filter to show all or completed tasks.",
        homework: [
          "Build a React todo list with an input form.",
          "Use map to render tasks.",
          "Use keys correctly."
        ],
        checkpoint: [
          "Why do React lists need keys?",
          "What is a controlled input?",
          "How does map create UI?"
        ]
      },
      {
        day: 25,
        title: "React Product List Project",
        objective: "Combine components, props, state, lists, and forms.",
        talk: [
          "Review React building blocks.",
          "Plan a small product list app before coding.",
          "Teach simple component folder organization."
        ],
        analogy: "A React app is like a store shelf made of repeated product cards and controls.",
        watch: [
          ["React project-based course", "https://www.youtube.com/watch?v=u6gSSpfsoOQ"]
        ],
        research: "Find one React component library and write what problem it solves.",
        demo: "Sketch the product list components and data shape.",
        practice: "Build filterable products with ProductCard and SearchBox.",
        homework: [
          "Finish the product list project.",
          "Include at least four components.",
          "Prepare to explain data flow from parent to child."
        ],
        checkpoint: [
          "Can you identify components before coding?",
          "Can you pass data through props?",
          "Can you manage a search or filter with state?"
        ]
      }
    ]
  },
  {
    number: 6,
    title: "React Data And Polish",
    focus: "Effects, API fetching, loading states, errors, and project structure.",
    outcome: "The learner can fetch data and build a polished React app.",
    days: [
      {
        day: 26,
        title: "useEffect And Side Effects",
        objective: "Understand when React should run code after rendering.",
        talk: [
          "Explain side effects as work outside normal rendering.",
          "Show useEffect with document title or simple data loading.",
          "Explain dependency arrays at a beginner level."
        ],
        analogy: "useEffect is like setting a reminder: after the page updates, do this extra task.",
        watch: [
          ["Synchronizing with Effects", "https://react.dev/learn/synchronizing-with-effects"],
          ["React useEffect search", "https://www.youtube.com/results?search_query=React+useEffect+beginner+tutorial"]
        ],
        research: "Research useEffect, side effect, dependency array, and cleanup.",
        demo: "Update the document title based on state.",
        practice: "Log a message when a selected product changes.",
        homework: [
          "Use useEffect in a small React app.",
          "Write when useEffect runs.",
          "Find one example where useEffect is not needed."
        ],
        checkpoint: [
          "What is a side effect?",
          "When does useEffect run?",
          "What does the dependency array control?"
        ]
      },
      {
        day: 27,
        title: "Fetching API Data",
        objective: "Fetch data and handle loading and error states.",
        talk: [
          "Explain APIs as waiters between frontend and data.",
          "Show fetch, async/await, loading, error, and empty states.",
          "Teach them to inspect network requests in dev tools."
        ],
        analogy: "An API is like a waiter. You ask for information, the waiter gets it from the kitchen, and brings back a response.",
        watch: [
          ["Fetch API JavaScript search", "https://www.youtube.com/results?search_query=fetch+api+javascript+beginner"],
          ["MDN Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"]
        ],
        research: "Research API, JSON, request, response, status code, and fetch.",
        demo: "Fetch users from a public API and render cards.",
        practice: "Add loading and error messages.",
        homework: [
          "Build a React app that fetches and displays API data.",
          "Include loading, error, and empty states.",
          "Explain what JSON is."
        ],
        checkpoint: [
          "What is an API?",
          "Why do we need loading states?",
          "How can you see requests in dev tools?"
        ]
      },
      {
        day: 28,
        title: "Component Structure",
        objective: "Organize components and avoid messy files.",
        talk: [
          "Explain when to split a component.",
          "Show a simple folders structure for components and data.",
          "Discuss naming conventions."
        ],
        analogy: "Organizing components is like putting kitchen tools in the right drawers so people can find them.",
        watch: [
          ["React folder structure search", "https://www.youtube.com/results?search_query=React+folder+structure+beginner"],
          ["Thinking in React", "https://react.dev/learn/thinking-in-react"]
        ],
        research: "Research component composition, single responsibility, and file naming.",
        demo: "Refactor a large component into smaller pieces.",
        practice: "Move repeated UI into a reusable component.",
        homework: [
          "Refactor your API project into clear components.",
          "Create a components folder.",
          "Write why each component exists."
        ],
        checkpoint: [
          "When should you create a new component?",
          "Why are clear names important?",
          "How can structure help a team?"
        ]
      },
      {
        day: 29,
        title: "UI Polish And Accessibility In React",
        objective: "Make React screens usable, responsive, and clear.",
        talk: [
          "Review loading, error, empty, and success states.",
          "Show accessible buttons, labels, and focus states.",
          "Explain that professional apps handle more than the happy path."
        ],
        analogy: "Polish is like preparing a tool for daily work: it should be clear, reliable, and comfortable.",
        watch: [
          ["React accessibility docs", "https://react.dev/reference/react-dom/components/common#accessibility-attributes"],
          ["Web accessibility beginner search", "https://www.youtube.com/results?search_query=web+accessibility+for+beginners"]
        ],
        research: "Research empty state, loading state, error state, focus state, and aria-label.",
        demo: "Improve the API app with clear states and responsive styling.",
        practice: "Add an empty state and keyboard-friendly controls.",
        homework: [
          "Polish your React API project.",
          "Add at least one empty state and one error state.",
          "Test it on a mobile width."
        ],
        checkpoint: [
          "What is an empty state?",
          "Why do professional apps need error states?",
          "Can the app be used on mobile?"
        ]
      },
      {
        day: 30,
        title: "React Assessment Project",
        objective: "Build a complete React app using data, state, and components.",
        talk: [
          "Review the React mental model.",
          "Explain the assessment requirements and acceptance criteria.",
          "Let the learner plan before coding."
        ],
        analogy: "This project is like a small job ticket: read the requirements, plan, build, test, and explain.",
        watch: [
          ["React Quick Start review", "https://react.dev/learn"]
        ],
        research: "Research one React topic that still feels confusing and write what you learned.",
        demo: "Model how to turn requirements into a task checklist.",
        practice: "Start a weather, movie, or user directory app.",
        homework: [
          "Finish the React assessment project.",
          "Use components, props, state, useEffect, and API data.",
          "Write a README with setup and testing steps."
        ],
        checkpoint: [
          "Can you build a React app from requirements?",
          "Can you explain data flow?",
          "Can you handle loading and error states?"
        ]
      }
    ]
  },
  {
    number: 7,
    title: "Next.js App Router",
    focus: "Routing, layouts, server components, client components, dynamic routes, loading, and errors.",
    outcome: "The learner can build a multi-page Next.js App Router app.",
    days: [
      {
        day: 31,
        title: "Why Next.js After React",
        objective: "Understand what Next.js adds to React.",
        talk: [
          "Compare React as UI parts and Next.js as app structure.",
          "Explain routing, server rendering, layouts, and deployment support.",
          "Show the app folder at a high level."
        ],
        analogy: "React gives you the parts for a house. Next.js also gives you rooms, addresses, and rules for where things go.",
        watch: [
          ["Next.js App Router Docs", "https://nextjs.org/docs/app"],
          ["Next.js Tutorial for Beginners with TypeScript", "https://www.youtube.com/watch?v=ZVnjOPwW4ZA"]
        ],
        research: "Research App Router, page.tsx, layout.tsx, server component, and client component.",
        demo: "Create a Next.js app and show the app directory.",
        practice: "Edit the home page and create a simple about page.",
        homework: [
          "Create a fresh Next.js app.",
          "Make home and about pages.",
          "Explain what Next.js adds on top of React."
        ],
        checkpoint: [
          "Why use Next.js?",
          "What is the app folder?",
          "How does a folder become a route?"
        ]
      },
      {
        day: 32,
        title: "Pages, Routes, And Layouts",
        objective: "Use file-based routing and shared layouts.",
        talk: [
          "Explain folders as website addresses.",
          "Show page.tsx and layout.tsx.",
          "Create navigation with Link."
        ],
        analogy: "Next.js folders are like rooms in a building. The folder path becomes the address visitors can walk to.",
        watch: [
          ["Next.js Linking and Navigating Docs", "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating"],
          ["Next.js App Router tutorial search", "https://www.youtube.com/results?search_query=Next.js+App+Router+beginner+tutorial"]
        ],
        research: "Research Link, nested route, root layout, and route segment.",
        demo: "Build home, blog, contact, and dashboard routes.",
        practice: "Add a shared navbar and footer.",
        homework: [
          "Build a small multi-page Next.js site.",
          "Use a shared layout.",
          "Add navigation between pages."
        ],
        checkpoint: [
          "What file creates a route page?",
          "What does layout.tsx do?",
          "Why use Link instead of a normal anchor for internal navigation?"
        ]
      },
      {
        day: 33,
        title: "Server And Client Components",
        objective: "Know when to use server components and client components.",
        talk: [
          "Explain server components as kitchen work before the page reaches the browser.",
          "Explain client components as interactive work in the browser.",
          "Show the use client directive."
        ],
        analogy: "Some work happens in the kitchen before serving. Some work happens at the table while the customer interacts.",
        watch: [
          ["Server and Client Components Docs", "https://nextjs.org/docs/app/building-your-application/rendering/server-components"],
          ["Next.js Server Components search", "https://www.youtube.com/results?search_query=Next.js+server+components+client+components+beginner"]
        ],
        research: "Research server component, client component, use client, hydration, and browser event.",
        demo: "Create a server page and a client counter component.",
        practice: "Move interactive state into a client component.",
        homework: [
          "Build a page with a server component and a client component.",
          "Use useState only in the client component.",
          "Explain why use client is needed."
        ],
        checkpoint: [
          "What runs on the server?",
          "What requires a client component?",
          "What does use client mean?"
        ]
      },
      {
        day: 34,
        title: "Dynamic Routes, Loading, And Errors",
        objective: "Create dynamic pages and handle waiting or failure.",
        talk: [
          "Explain dynamic routes for details pages.",
          "Show loading.tsx and error.tsx.",
          "Discuss user-friendly failure states."
        ],
        analogy: "A dynamic route is like a hotel room number. The building layout is the same, but each room has different details.",
        watch: [
          ["Next.js Dynamic Routes Docs", "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes"],
          ["Next.js Loading UI Docs", "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"]
        ],
        research: "Research dynamic segment, params, loading UI, error boundary, and notFound.",
        demo: "Build /products/[id] with sample product data.",
        practice: "Add loading and not found behavior.",
        homework: [
          "Create a blog or product details route.",
          "Use a dynamic route parameter.",
          "Add loading and not found states."
        ],
        checkpoint: [
          "What problem does a dynamic route solve?",
          "Why do users need loading UI?",
          "How should an app handle missing data?"
        ]
      },
      {
        day: 35,
        title: "Next.js Mini Blog",
        objective: "Build a complete small App Router project.",
        talk: [
          "Review routes, layouts, server components, client components, and dynamic routes.",
          "Plan a blog with home, posts list, and post detail pages.",
          "Introduce metadata at a simple level."
        ],
        analogy: "A blog is like a library shelf: one list page helps visitors choose, and each book has its own detail page.",
        watch: [
          ["Next.js Docs", "https://nextjs.org/docs"],
          ["Next.js Tutorial for Beginners - App Router", "https://www.youtube.com/watch?v=U6GqYyW6FxM"]
        ],
        research: "Research metadata, title, description, and SEO.",
        demo: "Plan routes and file structure for a mini blog.",
        practice: "Build the posts list and one dynamic detail page.",
        homework: [
          "Finish the mini blog.",
          "Include at least three posts.",
          "Prepare to explain which components are server and which are client."
        ],
        checkpoint: [
          "Can you build a multi-page app?",
          "Can you use a dynamic route?",
          "Can you explain server vs client components?"
        ]
      }
    ]
  },
  {
    number: 8,
    title: "Next.js Fullstack Patterns",
    focus: "Environment variables, route handlers, forms, protected routes, and dashboard layout.",
    outcome: "The learner can build Next.js pages that communicate with backend-style routes.",
    days: [
      {
        day: 36,
        title: "Environment Variables And Metadata",
        objective: "Use environment variables safely and add basic page metadata.",
        talk: [
          "Explain secrets and public settings.",
          "Show .env.local and .env.example.",
          "Add title and description metadata."
        ],
        analogy: "Environment variables are private keys kept outside the public notebook.",
        watch: [
          ["Next.js Environment Variables Docs", "https://nextjs.org/docs/app/building-your-application/configuring/environment-variables"],
          ["Next.js Metadata Docs", "https://nextjs.org/docs/app/building-your-application/optimizing/metadata"]
        ],
        research: "Research .env.local, NEXT_PUBLIC, secret, metadata, and environment.",
        demo: "Create .env.local and read a safe public variable.",
        practice: "Add metadata to home and dashboard pages.",
        homework: [
          "Add .env.example to the Next.js project.",
          "Add metadata to two pages.",
          "Write why secrets should not be committed to GitHub."
        ],
        checkpoint: [
          "What belongs in .env.local?",
          "What does NEXT_PUBLIC mean?",
          "Why does metadata matter?"
        ]
      },
      {
        day: 37,
        title: "Route Handlers",
        objective: "Create backend-style endpoints inside Next.js.",
        talk: [
          "Explain route handlers as service windows.",
          "Show GET and POST handlers.",
          "Discuss request, response, and JSON."
        ],
        analogy: "A route handler is a service window. The frontend asks for something, and the window returns a response.",
        watch: [
          ["Next.js Route Handlers Docs", "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"],
          ["Next.js API route handlers search", "https://www.youtube.com/results?search_query=Next.js+route+handlers+App+Router+beginner"]
        ],
        research: "Research GET, POST, request body, response, and JSON.",
        demo: "Create /api/tasks that returns sample tasks.",
        practice: "Create a POST handler that accepts a new task title.",
        homework: [
          "Create a route handler for tasks.",
          "Return JSON from a GET request.",
          "Write what HTTP methods are used for."
        ],
        checkpoint: [
          "What is a route handler?",
          "What is JSON?",
          "When do we use POST?"
        ]
      },
      {
        day: 38,
        title: "Forms In Next.js",
        objective: "Submit form data and show validation feedback.",
        talk: [
          "Review controlled forms from React.",
          "Show a form submitting to a route handler or client function.",
          "Teach validation before saving data."
        ],
        analogy: "A form is a delivery slip. The app checks it before sending it to the service window.",
        watch: [
          ["Next.js Forms Docs", "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"],
          ["React forms review search", "https://www.youtube.com/results?search_query=React+forms+controlled+inputs+beginner"]
        ],
        research: "Research formData, validation, required field, and mutation.",
        demo: "Build a task creation form with simple validation.",
        practice: "Show an error if the task title is empty.",
        homework: [
          "Add a task form to the dashboard.",
          "Validate empty input.",
          "Show a success or error message."
        ],
        checkpoint: [
          "Why validate before saving?",
          "What is a mutation?",
          "How does the user know the form worked?"
        ]
      },
      {
        day: 39,
        title: "Protected Routes Concept",
        objective: "Understand pages that require login before access.",
        talk: [
          "Explain authentication and authorization.",
          "Show the dashboard as a private room.",
          "Discuss redirecting users who are not logged in."
        ],
        analogy: "Authentication is the security desk. Authorization decides which rooms your badge opens.",
        watch: [
          ["Supabase Auth with Next.js Docs", "https://supabase.com/docs/guides/auth/quickstarts/nextjs"],
          ["Next.js authentication search", "https://www.youtube.com/results?search_query=Next.js+App+Router+authentication+beginner"]
        ],
        research: "Research authentication, authorization, session, protected route, and redirect.",
        demo: "Use fake logged-in state to protect a dashboard route conceptually.",
        practice: "Show a login prompt when the user is not authenticated.",
        homework: [
          "Write the difference between authentication and authorization.",
          "Create a fake protected dashboard using a boolean.",
          "Explain why real auth cannot be only a frontend boolean."
        ],
        checkpoint: [
          "What is authentication?",
          "What is authorization?",
          "Why should private data be protected on the server?"
        ]
      },
      {
        day: 40,
        title: "Dashboard Layout Assessment",
        objective: "Build a realistic dashboard shell in Next.js.",
        talk: [
          "Review App Router and fullstack patterns.",
          "Plan a dashboard with sidebar, task list, form, loading, and error states.",
          "Explain acceptance criteria."
        ],
        analogy: "A dashboard is like a control room. It should show the important controls and information clearly.",
        watch: [
          ["Next.js App Router Docs review", "https://nextjs.org/docs/app"]
        ],
        research: "Research one dashboard UX pattern and explain why it works.",
        demo: "Sketch dashboard sections before coding.",
        practice: "Build the dashboard layout and task list using mock data.",
        homework: [
          "Finish the dashboard shell.",
          "Use mock task data.",
          "Include loading, empty, and error UI examples."
        ],
        checkpoint: [
          "Can you structure a dashboard?",
          "Can you separate server and client work?",
          "Can you create route handlers?"
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Database And Authentication",
    focus: "Supabase or Firebase, auth, CRUD, permissions, and user-owned data.",
    outcome: "The learner can connect an app to real auth and database storage.",
    days: [
      {
        day: 41,
        title: "Database And Auth Concepts",
        objective: "Understand why apps need databases and user accounts.",
        talk: [
          "Explain database, table, row, document, user, session, and permissions.",
          "Compare localStorage with a real database.",
          "Choose Supabase or Firebase based on your team."
        ],
        analogy: "A database is an organized filing cabinet. Authentication is the security desk checking who you are.",
        watch: [
          ["Supabase User Management with Next.js", "https://supabase.com/docs/guides/with-nextjs"],
          ["Firebase Authentication Web Docs", "https://firebase.google.com/docs/auth/web/start"]
        ],
        research: "Research database, table, record, user, session, and permission.",
        demo: "Draw the data model for users and tasks.",
        practice: "Create a table plan or Firestore collection plan.",
        homework: [
          "Write a simple schema for tasks and profiles.",
          "Explain why tasks should belong to a user.",
          "Choose Supabase or Firebase for the project."
        ],
        checkpoint: [
          "Why is localStorage not enough?",
          "What is a user session?",
          "Why does each task need an owner?"
        ]
      },
      {
        day: 42,
        title: "Project Setup And Data Model",
        objective: "Create the backend project and define the first data structure.",
        talk: [
          "Walk through creating a Supabase or Firebase project.",
          "Create environment variables for connection details.",
          "Define tasks and profiles carefully."
        ],
        analogy: "Setting up the backend is like renting an office with filing cabinets and security already installed.",
        watch: [
          ["Supabase Auth with Next.js Docs", "https://supabase.com/docs/guides/auth/quickstarts/nextjs"],
          ["Cloud Firestore Quickstart", "https://firebase.google.com/docs/firestore/quickstart"]
        ],
        research: "Research Supabase tables and RLS, or Firebase collections and security rules.",
        demo: "Create the tasks table or collection.",
        practice: "Add sample task data in the dashboard.",
        homework: [
          "Set up the chosen backend project.",
          "Create tasks data storage.",
          "Add connection values to .env.local and .env.example."
        ],
        checkpoint: [
          "Where are connection settings stored?",
          "What fields does a task need?",
          "What should never be committed to GitHub?"
        ]
      },
      {
        day: 43,
        title: "Signup, Login, And Logout",
        objective: "Implement basic authentication.",
        talk: [
          "Explain signup, login, logout, and password reset.",
          "Show how the app checks the current user.",
          "Discuss friendly auth errors."
        ],
        analogy: "Signup creates an ID badge. Login proves the badge belongs to you. Logout returns the badge.",
        watch: [
          ["Next.js Authentication - Supabase Auth", "https://www.youtube.com/watch?v=I7slTmDKuj8"],
          ["Firebase Auth Web Start", "https://firebase.google.com/docs/auth/web/start"]
        ],
        research: "Research signup, login, logout, session, and auth provider.",
        demo: "Create signup and login screens.",
        practice: "Display the logged-in user's email.",
        homework: [
          "Build signup, login, and logout.",
          "Show auth errors clearly.",
          "Protect the dashboard from logged-out users."
        ],
        checkpoint: [
          "What is the difference between signup and login?",
          "Where does the app check the current user?",
          "What should happen when login fails?"
        ]
      },
      {
        day: 44,
        title: "CRUD With User Data",
        objective: "Create, read, update, and delete user-owned records.",
        talk: [
          "Explain CRUD as the basic actions most apps need.",
          "Show tasks that belong to the logged-in user.",
          "Discuss security rules or Row Level Security."
        ],
        analogy: "CRUD is like managing notes in a filing cabinet: add, read, update, and remove papers.",
        watch: [
          ["Supabase Row Level Security Docs", "https://supabase.com/docs/guides/database/postgres/row-level-security"],
          ["Firebase Security Rules Docs", "https://firebase.google.com/docs/rules"]
        ],
        research: "Research CRUD, user_id, ownership, Row Level Security, and security rules.",
        demo: "Create and read tasks for the logged-in user.",
        practice: "Add complete and delete actions.",
        homework: [
          "Implement create, read, update, and delete for tasks.",
          "Ensure users only see their own tasks.",
          "Write the security rule in plain English."
        ],
        checkpoint: [
          "What does CRUD stand for?",
          "How does a task belong to a user?",
          "Why is frontend-only filtering not secure?"
        ]
      },
      {
        day: 45,
        title: "Auth And Database Assessment",
        objective: "Build the first real authenticated task app.",
        talk: [
          "Review auth, database, CRUD, and protected routes.",
          "Set acceptance criteria for the task manager.",
          "Let the learner implement with guidance only when blocked."
        ],
        analogy: "This is the first real office tool: people sign in, manage their own work, and cannot see someone else's files.",
        watch: [
          ["Supabase with Next.js review", "https://supabase.com/docs/guides/with-nextjs"],
          ["Firebase Firestore review", "https://firebase.google.com/docs/firestore/quickstart"]
        ],
        research: "Research one security mistake beginners make with auth or databases.",
        demo: "Review the required user journey before coding.",
        practice: "Test signup, login, create task, edit task, delete task, logout.",
        homework: [
          "Finish the authenticated task app.",
          "Record bugs or confusing errors in a notes file.",
          "Prepare a demo of the full user journey."
        ],
        checkpoint: [
          "Can a logged-out user access the dashboard?",
          "Can one user see another user's tasks?",
          "Can you explain how data is saved?"
        ]
      }
    ]
  },
  {
    number: 10,
    title: "APIs, DNS, Hosting, And Deployment",
    focus: "HTTP, API design, Vercel or Netlify, DNS, domains, and deployment debugging.",
    outcome: "The learner can deploy a working app and explain how people find it online.",
    days: [
      {
        day: 46,
        title: "HTTP And APIs",
        objective: "Understand request, response, JSON, and common HTTP methods.",
        talk: [
          "Explain GET, POST, PATCH, and DELETE.",
          "Show status codes at a simple level.",
          "Use network dev tools to inspect requests."
        ],
        analogy: "HTTP is like a mail system. The request is the letter you send, and the response is the reply.",
        watch: [
          ["Fetch API JavaScript beginner search", "https://www.youtube.com/results?search_query=fetch+api+javascript+beginner"],
          ["MDN HTTP Overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"]
        ],
        research: "Research GET, POST, PATCH, DELETE, 200, 404, 500, and JSON.",
        demo: "Inspect API calls in the browser network tab.",
        practice: "Write a table of HTTP methods and what they do.",
        homework: [
          "Explain request and response using an analogy.",
          "Find one 404 error online and explain what it means.",
          "Inspect one API response in dev tools."
        ],
        checkpoint: [
          "What is a request?",
          "What is a response?",
          "What does a 404 status mean?"
        ]
      },
      {
        day: 47,
        title: "External APIs And Route Handlers",
        objective: "Combine external API data with Next.js route handlers.",
        talk: [
          "Explain why apps sometimes call outside services.",
          "Show server-side fetching in a route handler.",
          "Discuss hiding private API keys."
        ],
        analogy: "An external API is like hiring a specialist service instead of doing everything yourself.",
        watch: [
          ["Next.js Route Handlers Docs", "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"],
          ["Next.js fetch data docs", "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching"]
        ],
        research: "Research API key, rate limit, server-side fetch, and environment variable.",
        demo: "Create a route handler that returns weather, quote, or sample external data.",
        practice: "Render that data in the dashboard.",
        homework: [
          "Add one API-powered widget to the app.",
          "Hide any API key in environment variables.",
          "Handle loading and failure states."
        ],
        checkpoint: [
          "Why hide API keys?",
          "What is a rate limit?",
          "When should the server call an API?"
        ]
      },
      {
        day: 48,
        title: "Deploying To Vercel Or Netlify",
        objective: "Deploy the app from GitHub to a public URL.",
        talk: [
          "Explain hosting as the place where the website lives.",
          "Show connecting GitHub to Vercel or Netlify.",
          "Explain build logs and preview deployments."
        ],
        analogy: "Hosting is renting a building for your website. Deployment is moving your finished work into that building.",
        watch: [
          ["Deploy Next.js Project on Vercel", "https://www.youtube.com/watch?v=Lsxs1rZqPnI"],
          ["Next.js on Vercel Docs", "https://vercel.com/docs/concepts/next.js/overview"],
          ["Next.js on Netlify Docs", "https://docs.netlify.com/frameworks/next-js/overview/"]
        ],
        research: "Research build, deploy, preview URL, production URL, and build log.",
        demo: "Deploy the app and inspect the build logs.",
        practice: "Change a small text, push to GitHub, and watch a new deployment start.",
        homework: [
          "Deploy the task app.",
          "Add all needed environment variables to the hosting platform.",
          "Write the public URL and test the app in a fresh browser."
        ],
        checkpoint: [
          "What does hosting do?",
          "Why can deployment fail?",
          "Where do production environment variables go?"
        ]
      },
      {
        day: 49,
        title: "Domains And DNS",
        objective: "Understand how custom domains point to hosted apps.",
        talk: [
          "Explain domain names as website addresses.",
          "Explain DNS as the internet phonebook.",
          "Show A, CNAME, and TXT records at a beginner level."
        ],
        analogy: "A domain is a street address. DNS is the phonebook that tells the browser where that address points.",
        watch: [
          ["What is DNS?", "https://www.lifewire.com/what-is-dns-domain-name-system-2625855"],
          ["DNS explained beginner search", "https://www.youtube.com/results?search_query=DNS+explained+for+beginners"]
        ],
        research: "Research domain registrar, DNS record, A record, CNAME, TXT, and propagation.",
        demo: "Open a hosting provider's custom domain settings and explain the records.",
        practice: "Draw how myapp.com reaches the deployed app.",
        homework: [
          "Write a plain-language explanation of DNS.",
          "Explain A, CNAME, and TXT records in one sentence each.",
          "Describe what DNS propagation means."
        ],
        checkpoint: [
          "What is a domain name?",
          "What does DNS do?",
          "Why might a new domain not work immediately?"
        ]
      },
      {
        day: 50,
        title: "Deployment Assessment",
        objective: "Submit a deployed app with docs and deployment notes.",
        talk: [
          "Review hosting, domains, environment variables, logs, and preview deployments.",
          "Explain how real teams review deployed previews.",
          "Set acceptance criteria for a production-style handoff."
        ],
        analogy: "A deployment pipeline is like a conveyor belt: GitHub sends code, the platform builds it, checks it, and publishes it.",
        watch: [
          ["GitHub Flow Docs", "https://docs.github.com/en/get-started/using-github/github-flow"],
          ["Vercel Next.js Docs", "https://vercel.com/docs/concepts/next.js/overview"]
        ],
        research: "Research one common Vercel or Netlify deployment error and how to fix it.",
        demo: "Review a failed build log and identify the useful error line.",
        practice: "Open a PR, get a preview URL, and test the user flow.",
        homework: [
          "Submit the deployed task app URL.",
          "Submit the GitHub repo link and PR link.",
          "Write setup instructions in the README."
        ],
        checkpoint: [
          "Can you deploy from GitHub?",
          "Can you read a failed build log?",
          "Can another developer follow your README?"
        ]
      }
    ]
  },
  {
    number: 11,
    title: "TypeScript, Testing, And Workflow",
    focus: "TypeScript basics, debugging, tests, PR discipline, and CI awareness.",
    outcome: "The learner can write safer code, test basic flows, and work through pull requests.",
    days: [
      {
        day: 51,
        title: "TypeScript Basics",
        objective: "Use types to catch mistakes earlier.",
        talk: [
          "Explain TypeScript as labels on values.",
          "Show string, number, boolean, arrays, objects, and function types.",
          "Explain why teams prefer safer code."
        ],
        analogy: "TypeScript is like labels on boxes. If a box says plates, you should not put shoes inside it.",
        watch: [
          ["TypeScript Course for Beginners", "https://www.youtube.com/watch?v=BwuLxPH8IDs"],
          ["TypeScript Documentation", "https://www.typescriptlang.org/docs/"]
        ],
        research: "Research type, interface, optional property, union type, and any.",
        demo: "Type a User object and a function parameter.",
        practice: "Add types to task data.",
        homework: [
          "Create types for User, Task, and Profile.",
          "Type component props in a React or Next.js component.",
          "Explain why using any too much is risky."
        ],
        checkpoint: [
          "What problem does TypeScript solve?",
          "What is a type?",
          "Why avoid any by default?"
        ]
      },
      {
        day: 52,
        title: "TypeScript In React And Next.js",
        objective: "Type props, route params, API responses, and form values.",
        talk: [
          "Show typed component props.",
          "Show typed API response data.",
          "Teach the learner to read TypeScript errors patiently."
        ],
        analogy: "TypeScript errors are like a careful reviewer warning you before the mistake reaches users.",
        watch: [
          ["TypeScript Tutorial for Beginners", "https://www.youtube.com/watch?v=d56mG7DezGs"],
          ["Typing React components search", "https://www.youtube.com/results?search_query=TypeScript+React+props+beginner"]
        ],
        research: "Research React.FC, Props type, type inference, and null.",
        demo: "Convert an untyped component to typed props.",
        practice: "Type the task form and task list.",
        homework: [
          "Add TypeScript types to your dashboard components.",
          "Fix TypeScript errors without deleting the types.",
          "Write one TypeScript error and what it meant."
        ],
        checkpoint: [
          "How do you type props?",
          "What is type inference?",
          "How should you respond to a TypeScript error?"
        ]
      },
      {
        day: 53,
        title: "Debugging Like A Developer",
        objective: "Use error messages, dev tools, and logs to find problems.",
        talk: [
          "Explain debugging as gathering clues.",
          "Show console, network tab, stack trace, and build logs.",
          "Teach the difference between guessing and investigating."
        ],
        analogy: "Debugging is detective work. The error message, logs, and browser tools are clues.",
        watch: [
          ["Chrome DevTools beginner search", "https://www.youtube.com/results?search_query=Chrome+DevTools+for+beginners"],
          ["MDN Debugging JavaScript", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong"]
        ],
        research: "Research stack trace, console error, network request, breakpoint, and reproduction steps.",
        demo: "Break the app on purpose and debug it step by step.",
        practice: "Fix a broken import, missing env variable, and failed API call.",
        homework: [
          "Create a bug log with three bugs you fixed.",
          "For each bug, write symptom, cause, fix, and prevention.",
          "Practice reading one stack trace."
        ],
        checkpoint: [
          "What is a stack trace?",
          "Why are reproduction steps useful?",
          "How can network tab help with API issues?"
        ]
      },
      {
        day: 54,
        title: "Testing And Manual QA",
        objective: "Create simple tests and use a QA checklist.",
        talk: [
          "Explain tests as checklists that run again and again.",
          "Show manual QA first, then automated testing.",
          "Introduce Playwright or basic unit tests depending on the project."
        ],
        analogy: "Tests are like a pilot checklist before takeoff. They make sure important things still work.",
        watch: [
          ["Beginner Tutorial: Playwright Test Automation", "https://www.youtube.com/watch?v=oboomg80YTI"],
          ["Playwright Installation Docs", "https://playwright.dev/docs/intro"]
        ],
        research: "Research unit test, integration test, end-to-end test, assertion, and test case.",
        demo: "Write a manual QA checklist and one simple Playwright test.",
        practice: "Test login, task creation, task completion, and logout.",
        homework: [
          "Write a manual QA checklist for the task app.",
          "Add at least one automated test if tooling is available.",
          "Run the checklist before submitting the PR."
        ],
        checkpoint: [
          "Why test the app?",
          "What is an end-to-end test?",
          "What should be in a QA checklist?"
        ]
      },
      {
        day: 55,
        title: "Professional Workflow Assessment",
        objective: "Complete a real ticket through branch, commit, PR, review, and preview deployment.",
        talk: [
          "Review GitHub flow.",
          "Explain PR descriptions, screenshots, testing notes, and review comments.",
          "Teach professional communication when blocked."
        ],
        analogy: "Team workflow is like a kitchen during service. Everyone has stations, communicates clearly, and checks work before it leaves.",
        watch: [
          ["Pull Requests Docs", "https://docs.github.com/pull-requests"],
          ["GitHub Flow Docs", "https://docs.github.com/en/get-started/using-github/github-flow"]
        ],
        research: "Research PR template, code review, merge conflict, CI, and preview deployment.",
        demo: "Review a sample PR description and improve it.",
        practice: "Create a branch, fix a small issue, push, and open a PR.",
        homework: [
          "Complete a small ticket through a pull request.",
          "Include screenshots or testing notes.",
          "Respond to at least one review comment."
        ],
        checkpoint: [
          "What should a PR include?",
          "How do you communicate a blocker?",
          "What does CI usually check?"
        ]
      }
    ]
  },
  {
    number: 12,
    title: "Capstone And Job Readiness",
    focus: "Planning, implementation, deployment, documentation, demo, and final review.",
    outcome: "The learner can complete a supervised junior-style feature from ticket to deployment.",
    days: [
      {
        day: 56,
        title: "Capstone Planning",
        objective: "Plan the final project like a real team feature.",
        talk: [
          "Define the capstone: authenticated team task board.",
          "Break the project into tickets.",
          "Plan routes, components, database schema, and user flows."
        ],
        analogy: "Planning a capstone is like planning a building before construction: rooms, doors, security, and utilities need a map.",
        watch: [
          ["Next.js App Router Docs", "https://nextjs.org/docs/app"],
          ["Supabase Auth with Next.js Docs", "https://supabase.com/docs/guides/auth/quickstarts/nextjs"]
        ],
        research: "Research one similar app and list its main user flows.",
        demo: "Create a project board or checklist for the capstone.",
        practice: "Write user stories for login, dashboard, tasks, comments, and admin-lite features.",
        homework: [
          "Write the capstone README plan.",
          "Create tickets for each feature.",
          "Create the database schema or collection plan."
        ],
        checkpoint: [
          "Can you explain the app goal?",
          "Can you break the work into tickets?",
          "Can you describe the data model?"
        ]
      },
      {
        day: 57,
        title: "Capstone Auth And Data",
        objective: "Build authentication and database foundation.",
        talk: [
          "Review protected routes and user-owned records.",
          "Implement signup, login, logout, and session check.",
          "Create the first task CRUD path."
        ],
        analogy: "This is installing the building's security desk and filing cabinets before opening the office.",
        watch: [
          ["Next.js Authentication - Supabase Auth", "https://www.youtube.com/watch?v=I7slTmDKuj8"],
          ["Firebase Authentication Web Docs", "https://firebase.google.com/docs/auth/web/start"]
        ],
        research: "Research one auth bug and how to avoid it.",
        demo: "Implement one auth flow together if needed.",
        practice: "Create and read user-owned tasks.",
        homework: [
          "Finish signup, login, logout, and protected dashboard.",
          "Create and read tasks from the database.",
          "Document any auth issues in the README."
        ],
        checkpoint: [
          "Can users sign in and out?",
          "Can logged-out users access private pages?",
          "Can tasks be saved and fetched?"
        ]
      },
      {
        day: 58,
        title: "Capstone Dashboard CRUD",
        objective: "Complete the core dashboard user experience.",
        talk: [
          "Review create, read, update, delete, filter, and empty states.",
          "Discuss simple UI organization for repeated daily use.",
          "Improve validation and error messages."
        ],
        analogy: "The dashboard is the control desk. It should make the user's work clear and quick.",
        watch: [
          ["React Thinking in React", "https://react.dev/learn/thinking-in-react"],
          ["Next.js Route Handlers Docs", "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"]
        ],
        research: "Research one dashboard UI pattern and explain how it helps users.",
        demo: "Review dashboard states and acceptance criteria.",
        practice: "Add update, delete, complete, and filter actions.",
        homework: [
          "Finish task CRUD.",
          "Add loading, error, empty, and success states.",
          "Test the full task workflow manually."
        ],
        checkpoint: [
          "Can users manage tasks end to end?",
          "Are errors clear?",
          "Is the dashboard usable on mobile?"
        ]
      },
      {
        day: 59,
        title: "Capstone Deployment And PR",
        objective: "Prepare a professional submission.",
        talk: [
          "Review deployment, environment variables, README, screenshots, and PR descriptions.",
          "Run manual QA before deployment.",
          "Teach them to demo from the user's perspective."
        ],
        analogy: "Submitting the capstone is like handing a finished tool to a team: it must work, include instructions, and be easy to review.",
        watch: [
          ["Vercel Next.js Docs", "https://vercel.com/docs/concepts/next.js/overview"],
          ["GitHub Flow Docs", "https://docs.github.com/en/get-started/using-github/github-flow"]
        ],
        research: "Research one production checklist for web apps and adapt five items.",
        demo: "Review and improve the README and PR description.",
        practice: "Deploy, open PR, and test preview URL.",
        homework: [
          "Deploy the capstone.",
          "Open a PR with screenshots and test steps.",
          "Update README with setup, env variables, and deployment link."
        ],
        checkpoint: [
          "Can someone else run the project?",
          "Does the deployed app work?",
          "Does the PR explain what changed?"
        ]
      },
      {
        day: 60,
        title: "Final Review And Interview Practice",
        objective: "Evaluate readiness and practice explaining the work.",
        talk: [
          "Run the final demo.",
          "Ask technical and workflow questions.",
          "Give feedback on strengths, gaps, and next steps."
        ],
        analogy: "The final review is like a driving test: not perfection, but enough control, awareness, and safety to continue with supervision.",
        watch: [
          ["React Quick Start", "https://react.dev/learn"],
          ["Next.js Docs", "https://nextjs.org/docs"],
          ["TypeScript Docs", "https://www.typescriptlang.org/docs/"]
        ],
        research: "Research three junior developer interview questions and answer them in writing.",
        demo: "Model a clear project walkthrough: problem, stack, architecture, challenges, demo, lessons.",
        practice: "Have the learner present the capstone and answer questions.",
        homework: [
          "Submit final capstone links: repo, PR, deployment, README.",
          "Write a reflection: what you learned, what was hard, what you can do next.",
          "Create a personal improvement plan for the next 30 days."
        ],
        checkpoint: [
          "Can you explain the app architecture?",
          "Can you debug a small issue calmly?",
          "Can you complete a small ticket with review support?"
        ]
      }
    ]
  }
];

const videos = [
  ["Web Foundations", "Frontend Web Development Bootcamp Course", "Big-picture HTML, CSS, and JavaScript introduction.", "https://www.youtube.com/watch?v=zJSY8tbf_ys"],
  ["Web Foundations", "MDN Learn Web Development", "Official beginner-friendly web learning path.", "https://developer.mozilla.org/en-US/docs/Learn"],
  ["HTML/CSS/JS", "Learn HTML - Full Tutorial for Beginners", "HTML fundamentals.", "https://www.youtube.com/watch?v=kUMe1FH4CHE"],
  ["HTML/CSS/JS", "CSS Full Course", "CSS layout, Flexbox, and Grid basics.", "https://www.youtube.com/watch?v=ieTHC78giGQ"],
  ["HTML/CSS/JS", "Learn JavaScript - Full Course for Beginners", "JavaScript fundamentals.", "https://www.youtube.com/watch?v=PkZNo7MFNFg"],
  ["Git/GitHub", "Git and GitHub for Beginners - Crash Course", "Git basics, commits, branches, and GitHub workflow.", "https://www.youtube.com/watch?v=RGOj5yH7evk"],
  ["Git/GitHub", "GitHub Flow Docs", "Official workflow for branches and pull requests.", "https://docs.github.com/en/get-started/using-github/github-flow"],
  ["React", "React Course - Beginner's Tutorial", "Components, props, state, and effects.", "https://www.youtube.com/watch?v=bMknfKXIFA8"],
  ["React", "React Quick Start", "Official React fundamentals.", "https://react.dev/learn"],
  ["React", "React Project-Based Course", "Project-based React practice.", "https://www.youtube.com/watch?v=u6gSSpfsoOQ"],
  ["Next.js", "Next.js Tutorial for Beginners with TypeScript", "App Router concepts and TypeScript.", "https://www.youtube.com/watch?v=ZVnjOPwW4ZA"],
  ["Next.js", "Next.js App Router Docs", "Official App Router reference.", "https://nextjs.org/docs/app"],
  ["Data/Auth", "Supabase Auth With Next.js Docs", "Official Supabase App Router auth setup.", "https://supabase.com/docs/guides/auth/quickstarts/nextjs"],
  ["Data/Auth", "Next.js Authentication - Supabase Auth", "Newer Supabase Auth with Next.js App Router.", "https://www.youtube.com/watch?v=I7slTmDKuj8"],
  ["Data/Auth", "Firebase Authentication Web Docs", "Official Firebase Auth setup.", "https://firebase.google.com/docs/auth/web/start"],
  ["Data/Auth", "Cloud Firestore Quickstart", "Official Firestore database setup.", "https://firebase.google.com/docs/firestore/quickstart"],
  ["Deployment", "Deploy Next.js Project on Vercel", "Beginner Vercel deployment walkthrough.", "https://www.youtube.com/watch?v=Lsxs1rZqPnI"],
  ["Deployment", "Next.js on Vercel Docs", "Official Vercel deployment reference.", "https://vercel.com/docs/concepts/next.js/overview"],
  ["Deployment", "Next.js on Netlify Docs", "Official Netlify deployment reference.", "https://docs.netlify.com/frameworks/next-js/overview/"],
  ["Testing/TypeScript", "TypeScript Course for Beginners", "TypeScript fundamentals.", "https://www.youtube.com/watch?v=BwuLxPH8IDs"],
  ["Testing/TypeScript", "Beginner Tutorial: Playwright Test Automation", "End-to-end testing basics.", "https://www.youtube.com/watch?v=oboomg80YTI"],
  ["Testing/TypeScript", "Playwright Installation Docs", "Official Playwright setup.", "https://playwright.dev/docs/intro"]
];

const snippets = [
  {
    id: "web-three-files",
    title: "The Three Basic Website Files",
    phase: "Web Foundations",
    language: "html",
    days: [1, 2],
    description: "Use this on day one to show that HTML is structure, CSS is style, and JavaScript is behavior.",
    code: [
      "project-folder/",
      "  index.html",
      "  styles.css",
      "  script.js",
      "",
      "<!-- index.html -->",
      "<!doctype html>",
      "<html lang=\"en\">",
      "  <head>",
      "    <meta charset=\"UTF-8\" />",
      "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
      "    <title>My First Page</title>",
      "    <link rel=\"stylesheet\" href=\"styles.css\" />",
      "  </head>",
      "  <body>",
      "    <h1>Hello, I am learning web development</h1>",
      "    <p>This text is the structure of the page.</p>",
      "    <button id=\"helloButton\">Click me</button>",
      "    <script src=\"script.js\"></script>",
      "  </body>",
      "</html>",
      "",
      "/* styles.css */",
      "body {",
      "  font-family: Arial, sans-serif;",
      "  background: #f5f7f2;",
      "  color: #1c2520;",
      "  padding: 40px;",
      "}",
      "",
      "button {",
      "  background: #176b5c;",
      "  color: white;",
      "  border: 0;",
      "  padding: 10px 14px;",
      "  border-radius: 6px;",
      "}",
      "",
      "// script.js",
      "const button = document.querySelector(\"#helloButton\");",
      "",
      "button.addEventListener(\"click\", function () {",
      "  alert(\"JavaScript made the page respond!\");",
      "});"
    ].join("\n")
  },
  {
    id: "html-profile-page",
    title: "Beginner Profile Page HTML",
    phase: "HTML/CSS",
    language: "html",
    days: [3, 5],
    description: "A fuller HTML example for the first mini project.",
    code: [
      "<!doctype html>",
      "<html lang=\"en\">",
      "  <head>",
      "    <meta charset=\"UTF-8\" />",
      "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
      "    <title>Amina's Profile</title>",
      "    <link rel=\"stylesheet\" href=\"styles.css\" />",
      "  </head>",
      "  <body>",
      "    <header>",
      "      <h1>Amina Hassan</h1>",
      "      <p>Beginner web developer</p>",
      "    </header>",
      "",
      "    <main>",
      "      <section>",
      "        <h2>About Me</h2>",
      "        <p>I am learning how websites are built using HTML, CSS, and JavaScript.</p>",
      "      </section>",
      "",
      "      <section>",
      "        <h2>My Hobbies</h2>",
      "        <ul>",
      "          <li>Reading</li>",
      "          <li>Cooking</li>",
      "          <li>Learning technology</li>",
      "        </ul>",
      "      </section>",
      "",
      "      <section>",
      "        <h2>Contact</h2>",
      "        <a href=\"mailto:amina@example.com\">Email me</a>",
      "      </section>",
      "    </main>",
      "",
      "    <footer>",
      "      <p>Built during mentorship.</p>",
      "    </footer>",
      "  </body>",
      "</html>"
    ].join("\n")
  },
  {
    id: "css-profile-style",
    title: "Profile Page CSS Starter",
    phase: "HTML/CSS",
    language: "css",
    days: [4, 5],
    description: "A simple CSS foundation that teaches selectors, spacing, colors, cards, and responsive width.",
    code: [
      "* {",
      "  box-sizing: border-box;",
      "}",
      "",
      "body {",
      "  margin: 0;",
      "  font-family: Arial, sans-serif;",
      "  background: #f5f7f2;",
      "  color: #1c2520;",
      "  line-height: 1.6;",
      "}",
      "",
      "header,",
      "main,",
      "footer {",
      "  width: min(900px, 92%);",
      "  margin: 0 auto;",
      "}",
      "",
      "header {",
      "  padding: 48px 0 24px;",
      "}",
      "",
      "section {",
      "  background: white;",
      "  border: 1px solid #d7dfd9;",
      "  border-radius: 8px;",
      "  padding: 20px;",
      "  margin-bottom: 16px;",
      "}",
      "",
      "a {",
      "  color: #176b5c;",
      "  font-weight: bold;",
      "}",
      "",
      "@media (max-width: 600px) {",
      "  header {",
      "    padding-top: 28px;",
      "  }",
      "",
      "  section {",
      "    padding: 16px;",
      "  }",
      "}"
    ].join("\n")
  },
  {
    id: "html-contact-form",
    title: "Accessible Contact Form",
    phase: "HTML/CSS",
    language: "html",
    days: [6, 17],
    description: "Shows labels, input types, required fields, textarea, and a submit button.",
    code: [
      "<form class=\"contact-form\">",
      "  <div>",
      "    <label for=\"name\">Name</label>",
      "    <input id=\"name\" name=\"name\" type=\"text\" required />",
      "  </div>",
      "",
      "  <div>",
      "    <label for=\"email\">Email</label>",
      "    <input id=\"email\" name=\"email\" type=\"email\" required />",
      "  </div>",
      "",
      "  <div>",
      "    <label for=\"message\">Message</label>",
      "    <textarea id=\"message\" name=\"message\" rows=\"5\" required></textarea>",
      "  </div>",
      "",
      "  <button type=\"submit\">Send Message</button>",
      "</form>"
    ].join("\n")
  },
  {
    id: "css-flex-navbar",
    title: "Flexbox Navbar And Cards",
    phase: "HTML/CSS",
    language: "css",
    days: [7, 10],
    description: "A practical Flexbox example for navigation and horizontal cards.",
    code: [
      ".navbar {",
      "  display: flex;",
      "  justify-content: space-between;",
      "  align-items: center;",
      "  gap: 16px;",
      "  padding: 16px 24px;",
      "}",
      "",
      ".nav-links {",
      "  display: flex;",
      "  gap: 12px;",
      "  list-style: none;",
      "  margin: 0;",
      "  padding: 0;",
      "}",
      "",
      ".card-row {",
      "  display: flex;",
      "  flex-wrap: wrap;",
      "  gap: 16px;",
      "}",
      "",
      ".card {",
      "  flex: 1 1 220px;",
      "  border: 1px solid #d7dfd9;",
      "  border-radius: 8px;",
      "  padding: 18px;",
      "  background: white;",
      "}"
    ].join("\n")
  },
  {
    id: "css-grid-responsive",
    title: "Responsive CSS Grid",
    phase: "HTML/CSS",
    language: "css",
    days: [8, 10],
    description: "A responsive grid that creates as many columns as can fit.",
    code: [
      ".gallery {",
      "  display: grid;",
      "  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));",
      "  gap: 16px;",
      "}",
      "",
      ".gallery-item {",
      "  min-height: 160px;",
      "  border-radius: 8px;",
      "  background: white;",
      "  border: 1px solid #d7dfd9;",
      "  padding: 16px;",
      "}",
      "",
      "@media (max-width: 600px) {",
      "  .gallery {",
      "    grid-template-columns: 1fr;",
      "  }",
      "}"
    ].join("\n")
  },
  {
    id: "accessibility-checks",
    title: "Accessibility Checklist In Code",
    phase: "HTML/CSS",
    language: "html",
    days: [9],
    description: "Small examples of labels, alt text, keyboard-friendly buttons, and clear link text.",
    code: [
      "<img src=\"profile.jpg\" alt=\"Amina smiling at her desk\" />",
      "",
      "<label for=\"search\">Search tasks</label>",
      "<input id=\"search\" name=\"search\" type=\"search\" />",
      "",
      "<button type=\"button\">Save task</button>",
      "",
      "<a href=\"/pricing\">View pricing plans</a>",
      "",
      "<!-- Avoid vague text like this: -->",
      "<a href=\"/pricing\">Click here</a>"
    ].join("\n")
  },
  {
    id: "js-variables",
    title: "JavaScript Variables And Types",
    phase: "JavaScript",
    language: "js",
    days: [11],
    description: "A tiny console example for strings, numbers, booleans, and template strings.",
    code: [
      "const learnerName = \"Amina\";",
      "let completedLessons = 1;",
      "const isBeginner = true;",
      "",
      "console.log(learnerName);",
      "console.log(completedLessons);",
      "console.log(isBeginner);",
      "",
      "completedLessons = completedLessons + 1;",
      "",
      "console.log(`${learnerName} completed ${completedLessons} lessons.`);"
    ].join("\n")
  },
  {
    id: "js-functions-conditions",
    title: "Functions And Conditions",
    phase: "JavaScript",
    language: "js",
    days: [12],
    description: "Use this to explain parameters, return values, and if/else decisions.",
    code: [
      "function canAccessDashboard(isLoggedIn) {",
      "  if (isLoggedIn) {",
      "    return \"Welcome to your dashboard.\";",
      "  }",
      "",
      "  return \"Please log in first.\";",
      "}",
      "",
      "console.log(canAccessDashboard(true));",
      "console.log(canAccessDashboard(false));",
      "",
      "function calculateDiscount(price, discountPercent) {",
      "  const discount = price * (discountPercent / 100);",
      "  return price - discount;",
      "}",
      "",
      "console.log(calculateDiscount(100, 20));"
    ].join("\n")
  },
  {
    id: "js-arrays-objects",
    title: "Arrays And Objects",
    phase: "JavaScript",
    language: "js",
    days: [13],
    description: "Shows the difference between a list and a labeled group of details.",
    code: [
      "const taskTitles = [\"Learn HTML\", \"Practice CSS\", \"Write JavaScript\"];",
      "",
      "const user = {",
      "  id: 1,",
      "  name: \"Amina\",",
      "  email: \"amina@example.com\",",
      "  isAdmin: false",
      "};",
      "",
      "console.log(taskTitles[0]);",
      "console.log(user.email);",
      "",
      "const task = {",
      "  title: \"Practice arrays\",",
      "  completed: false",
      "};",
      "",
      "console.log(`${user.name} needs to: ${task.title}`);"
    ].join("\n")
  },
  {
    id: "js-loops",
    title: "Loops With Arrays",
    phase: "JavaScript",
    language: "js",
    days: [14],
    description: "A simple loop that prints only completed tasks.",
    code: [
      "const tasks = [",
      "  { title: \"Learn HTML\", completed: true },",
      "  { title: \"Practice CSS\", completed: true },",
      "  { title: \"Write JavaScript\", completed: false }",
      "];",
      "",
      "for (const task of tasks) {",
      "  if (task.completed) {",
      "    console.log(`Done: ${task.title}`);",
      "  } else {",
      "    console.log(`Still working on: ${task.title}`);",
      "  }",
      "}"
    ].join("\n")
  },
  {
    id: "js-quiz",
    title: "Console Quiz Mini Project",
    phase: "JavaScript",
    language: "js",
    days: [15],
    description: "A small assessment-style project using arrays, objects, functions, and conditions.",
    code: [
      "const questions = [",
      "  { question: \"What language structures a webpage?\", answer: \"html\" },",
      "  { question: \"What language styles a webpage?\", answer: \"css\" },",
      "  { question: \"What language adds behavior?\", answer: \"javascript\" }",
      "];",
      "",
      "function checkAnswer(userAnswer, correctAnswer) {",
      "  return userAnswer.trim().toLowerCase() === correctAnswer;",
      "}",
      "",
      "let score = 0;",
      "",
      "for (const item of questions) {",
      "  const userAnswer = prompt(item.question);",
      "",
      "  if (checkAnswer(userAnswer, item.answer)) {",
      "    score = score + 1;",
      "  }",
      "}",
      "",
      "alert(`You scored ${score} out of ${questions.length}.`);"
    ].join("\n")
  },
  {
    id: "dom-click-toggle",
    title: "DOM Click And Toggle",
    phase: "DOM/Git",
    language: "js",
    days: [16],
    description: "The smallest useful DOM interaction example.",
    code: [
      "<button id=\"detailsButton\">Show details</button>",
      "<p id=\"details\" hidden>This learner is practicing DOM events.</p>",
      "",
      "<script>",
      "  const button = document.querySelector(\"#detailsButton\");",
      "  const details = document.querySelector(\"#details\");",
      "",
      "  button.addEventListener(\"click\", function () {",
      "    const isHidden = details.hasAttribute(\"hidden\");",
      "",
      "    if (isHidden) {",
      "      details.removeAttribute(\"hidden\");",
      "      button.textContent = \"Hide details\";",
      "    } else {",
      "      details.setAttribute(\"hidden\", \"\");",
      "      button.textContent = \"Show details\";",
      "    }",
      "  });",
      "</script>"
    ].join("\n")
  },
  {
    id: "form-validation-js",
    title: "Form Validation With Helpful Messages",
    phase: "DOM/Git",
    language: "js",
    days: [17],
    description: "Reads input values, prevents empty submissions, and displays feedback.",
    code: [
      "const form = document.querySelector(\"#contactForm\");",
      "const nameInput = document.querySelector(\"#name\");",
      "const messageInput = document.querySelector(\"#message\");",
      "const feedback = document.querySelector(\"#feedback\");",
      "",
      "form.addEventListener(\"submit\", function (event) {",
      "  event.preventDefault();",
      "",
      "  const name = nameInput.value.trim();",
      "  const message = messageInput.value.trim();",
      "",
      "  if (name.length === 0) {",
      "    feedback.textContent = \"Please enter your name.\";",
      "    return;",
      "  }",
      "",
      "  if (message.length < 10) {",
      "    feedback.textContent = \"Please write at least 10 characters.\";",
      "    return;",
      "  }",
      "",
      "  feedback.textContent = \"Thanks! Your message is ready to send.\";",
      "});"
    ].join("\n")
  },
  {
    id: "localstorage-todo",
    title: "localStorage Todo Starter",
    phase: "DOM/Git",
    language: "js",
    days: [18],
    description: "A minimal pattern for saving tasks inside one browser.",
    code: [
      "const form = document.querySelector(\"#taskForm\");",
      "const input = document.querySelector(\"#taskInput\");",
      "const list = document.querySelector(\"#taskList\");",
      "",
      "let tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];",
      "",
      "function saveTasks() {",
      "  localStorage.setItem(\"tasks\", JSON.stringify(tasks));",
      "}",
      "",
      "function renderTasks() {",
      "  list.innerHTML = \"\";",
      "",
      "  for (const task of tasks) {",
      "    const item = document.createElement(\"li\");",
      "    item.textContent = task.title;",
      "    list.appendChild(item);",
      "  }",
      "}",
      "",
      "form.addEventListener(\"submit\", function (event) {",
      "  event.preventDefault();",
      "",
      "  tasks.push({ title: input.value.trim(), completed: false });",
      "  input.value = \"\";",
      "  saveTasks();",
      "  renderTasks();",
      "});",
      "",
      "renderTasks();"
    ].join("\n")
  },
  {
    id: "git-workflow",
    title: "Beginner Git Workflow Commands",
    phase: "DOM/Git",
    language: "bash",
    days: [19, 20],
    description: "Commands for the first repository, commits, branch, and push.",
    code: [
      "git init",
      "git status",
      "git add .",
      "git commit -m \"Create first todo app\"",
      "",
      "git branch feature/readme-update",
      "git switch feature/readme-update",
      "",
      "git status",
      "git add README.md",
      "git commit -m \"Add project instructions\"",
      "",
      "git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git",
      "git push -u origin feature/readme-update"
    ].join("\n")
  },
  {
    id: "pr-template",
    title: "Pull Request Description Template",
    phase: "Professional Workflow",
    language: "md",
    days: [20, 55, 59],
    description: "Give this to the learner so every PR has useful context.",
    code: [
      "## What Changed",
      "",
      "- Added a task form",
      "- Displayed tasks in a list",
      "- Added empty and error states",
      "",
      "## Why",
      "",
      "This lets logged-in users manage their own tasks.",
      "",
      "## How To Test",
      "",
      "1. Pull this branch.",
      "2. Run the app locally.",
      "3. Log in.",
      "4. Create a task.",
      "5. Mark the task complete.",
      "6. Delete the task.",
      "",
      "## Screenshots",
      "",
      "Add before/after screenshots for UI changes."
    ].join("\n")
  },
  {
    id: "react-component-props",
    title: "React Component With Props",
    phase: "React",
    language: "jsx",
    days: [21, 22],
    description: "A clear component and props example for React beginners.",
    code: [
      "function TeamMemberCard({ name, role, email }) {",
      "  return (",
      "    <article className=\"card\">",
      "      <h2>{name}</h2>",
      "      <p>{role}</p>",
      "      <a href={`mailto:${email}`}>{email}</a>",
      "    </article>",
      "  );",
      "}",
      "",
      "export default function App() {",
      "  return (",
      "    <main>",
      "      <TeamMemberCard",
      "        name=\"Amina Hassan\"",
      "        role=\"Frontend learner\"",
      "        email=\"amina@example.com\"",
      "      />",
      "      <TeamMemberCard",
      "        name=\"David Kim\"",
      "        role=\"Backend mentor\"",
      "        email=\"david@example.com\"",
      "      />",
      "    </main>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "react-state-events",
    title: "React State And Events",
    phase: "React",
    language: "jsx",
    days: [23],
    description: "Shows how a click updates component memory.",
    code: [
      "import { useState } from \"react\";",
      "",
      "export default function Counter() {",
      "  const [count, setCount] = useState(0);",
      "",
      "  function increaseCount() {",
      "    setCount(count + 1);",
      "  }",
      "",
      "  return (",
      "    <section>",
      "      <h1>Completed lessons: {count}</h1>",
      "      <button onClick={increaseCount}>Add lesson</button>",
      "    </section>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "react-list-form",
    title: "React Todo Form And List",
    phase: "React",
    language: "jsx",
    days: [24, 25],
    description: "A controlled input, list rendering, and keys in one small app.",
    code: [
      "import { useState } from \"react\";",
      "",
      "export default function TodoApp() {",
      "  const [title, setTitle] = useState(\"\");",
      "  const [tasks, setTasks] = useState([]);",
      "",
      "  function addTask(event) {",
      "    event.preventDefault();",
      "",
      "    if (title.trim().length === 0) return;",
      "",
      "    const newTask = {",
      "      id: crypto.randomUUID(),",
      "      title: title.trim(),",
      "      completed: false",
      "    };",
      "",
      "    setTasks([...tasks, newTask]);",
      "    setTitle(\"\");",
      "  }",
      "",
      "  return (",
      "    <main>",
      "      <form onSubmit={addTask}>",
      "        <label htmlFor=\"taskTitle\">Task title</label>",
      "        <input",
      "          id=\"taskTitle\"",
      "          value={title}",
      "          onChange={(event) => setTitle(event.target.value)}",
      "        />",
      "        <button type=\"submit\">Add task</button>",
      "      </form>",
      "",
      "      <ul>",
      "        {tasks.map((task) => (",
      "          <li key={task.id}>{task.title}</li>",
      "        ))}",
      "      </ul>",
      "    </main>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "react-fetch-useeffect",
    title: "React Fetch With Loading And Error States",
    phase: "React",
    language: "jsx",
    days: [26, 27, 29, 30],
    description: "A reliable pattern for beginner API fetching.",
    code: [
      "import { useEffect, useState } from \"react\";",
      "",
      "export default function UserList() {",
      "  const [users, setUsers] = useState([]);",
      "  const [isLoading, setIsLoading] = useState(true);",
      "  const [error, setError] = useState(\"\");",
      "",
      "  useEffect(() => {",
      "    async function loadUsers() {",
      "      try {",
      "        const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");",
      "",
      "        if (!response.ok) {",
      "          throw new Error(\"Could not load users\");",
      "        }",
      "",
      "        const data = await response.json();",
      "        setUsers(data);",
      "      } catch (err) {",
      "        setError(err.message);",
      "      } finally {",
      "        setIsLoading(false);",
      "      }",
      "    }",
      "",
      "    loadUsers();",
      "  }, []);",
      "",
      "  if (isLoading) return <p>Loading users...</p>;",
      "  if (error) return <p>{error}</p>;",
      "  if (users.length === 0) return <p>No users found.</p>;",
      "",
      "  return (",
      "    <ul>",
      "      {users.map((user) => (",
      "        <li key={user.id}>{user.name}</li>",
      "      ))}",
      "    </ul>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "react-folder-structure",
    title: "Simple React Folder Structure",
    phase: "React",
    language: "txt",
    days: [28],
    description: "Use this to explain where files can live as the app grows.",
    code: [
      "src/",
      "  components/",
      "    Header.jsx",
      "    ProductCard.jsx",
      "    SearchBox.jsx",
      "  data/",
      "    products.js",
      "  pages/",
      "    Home.jsx",
      "  App.jsx",
      "  main.jsx"
    ].join("\n")
  },
  {
    id: "next-routes-layout",
    title: "Next.js App Router Pages And Layout",
    phase: "Next.js",
    language: "tsx",
    days: [31, 32, 35],
    description: "The file-based routing mental model in code.",
    code: [
      "app/",
      "  layout.tsx",
      "  page.tsx",
      "  about/",
      "    page.tsx",
      "  dashboard/",
      "    page.tsx",
      "",
      "// app/layout.tsx",
      "import Link from \"next/link\";",
      "import \"./globals.css\";",
      "",
      "export default function RootLayout({ children }: { children: React.ReactNode }) {",
      "  return (",
      "    <html lang=\"en\">",
      "      <body>",
      "        <nav>",
      "          <Link href=\"/\">Home</Link>",
      "          <Link href=\"/about\">About</Link>",
      "          <Link href=\"/dashboard\">Dashboard</Link>",
      "        </nav>",
      "        {children}",
      "      </body>",
      "    </html>",
      "  );",
      "}",
      "",
      "// app/about/page.tsx",
      "export default function AboutPage() {",
      "  return <h1>About this app</h1>;",
      "}"
    ].join("\n")
  },
  {
    id: "next-server-client",
    title: "Server Component And Client Component",
    phase: "Next.js",
    language: "tsx",
    days: [33],
    description: "Shows where data fetching and browser interaction belong.",
    code: [
      "// app/products/page.tsx",
      "import FavoriteButton from \"./FavoriteButton\";",
      "",
      "export default async function ProductsPage() {",
      "  const products = [\"Laptop\", \"Keyboard\", \"Mouse\"];",
      "",
      "  return (",
      "    <main>",
      "      <h1>Products</h1>",
      "      {products.map((product) => (",
      "        <article key={product}>",
      "          <h2>{product}</h2>",
      "          <FavoriteButton />",
      "        </article>",
      "      ))}",
      "    </main>",
      "  );",
      "}",
      "",
      "// app/products/FavoriteButton.tsx",
      "\"use client\";",
      "",
      "import { useState } from \"react\";",
      "",
      "export default function FavoriteButton() {",
      "  const [isFavorite, setIsFavorite] = useState(false);",
      "",
      "  return (",
      "    <button onClick={() => setIsFavorite(!isFavorite)}>",
      "      {isFavorite ? \"Saved\" : \"Save\"}",
      "    </button>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "next-dynamic-route",
    title: "Next.js Dynamic Route",
    phase: "Next.js",
    language: "tsx",
    days: [34, 35],
    description: "A beginner-friendly product details page using params.",
    code: [
      "app/products/[id]/page.tsx",
      "",
      "const products = [",
      "  { id: \"1\", name: \"Laptop\", price: 1200 },",
      "  { id: \"2\", name: \"Keyboard\", price: 80 }",
      "];",
      "",
      "type ProductPageProps = {",
      "  params: Promise<{ id: string }>;",
      "};",
      "",
      "export default async function ProductPage({ params }: ProductPageProps) {",
      "  const { id } = await params;",
      "  const product = products.find((item) => item.id === id);",
      "",
      "  if (!product) {",
      "    return <h1>Product not found</h1>;",
      "  }",
      "",
      "  return (",
      "    <main>",
      "      <h1>{product.name}</h1>",
      "      <p>${product.price}</p>",
      "    </main>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "next-env-metadata",
    title: "Environment Variables And Metadata",
    phase: "Next.js",
    language: "tsx",
    days: [36],
    description: "Shows .env files and metadata in a beginner-safe way.",
    code: [
      "# .env.local",
      "NEXT_PUBLIC_APP_NAME=\"Mentor Task Board\"",
      "DATABASE_URL=\"keep-this-secret\"",
      "",
      "# .env.example",
      "NEXT_PUBLIC_APP_NAME=\"\"",
      "DATABASE_URL=\"\"",
      "",
      "// app/page.tsx",
      "export const metadata = {",
      "  title: \"Mentor Task Board\",",
      "  description: \"A practice dashboard for learning fullstack development\"",
      "};",
      "",
      "export default function HomePage() {",
      "  return <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>;",
      "}"
    ].join("\n")
  },
  {
    id: "next-route-handler",
    title: "Next.js Route Handler",
    phase: "Next.js",
    language: "ts",
    days: [37, 47],
    description: "A small GET and POST example using App Router route handlers.",
    code: [
      "// app/api/tasks/route.ts",
      "const tasks = [",
      "  { id: 1, title: \"Learn route handlers\", completed: false }",
      "];",
      "",
      "export async function GET() {",
      "  return Response.json({ tasks });",
      "}",
      "",
      "export async function POST(request: Request) {",
      "  const body = await request.json();",
      "",
      "  if (!body.title) {",
      "    return Response.json({ error: \"Title is required\" }, { status: 400 });",
      "  }",
      "",
      "  const task = {",
      "    id: Date.now(),",
      "    title: body.title,",
      "    completed: false",
      "  };",
      "",
      "  tasks.push(task);",
      "",
      "  return Response.json({ task }, { status: 201 });",
      "}"
    ].join("\n")
  },
  {
    id: "next-form-validation",
    title: "Next.js Client Form Validation",
    phase: "Next.js",
    language: "tsx",
    days: [38, 40],
    description: "A client form with a simple validation message.",
    code: [
      "\"use client\";",
      "",
      "import { useState } from \"react\";",
      "",
      "export default function TaskForm() {",
      "  const [title, setTitle] = useState(\"\");",
      "  const [error, setError] = useState(\"\");",
      "",
      "  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {",
      "    event.preventDefault();",
      "",
      "    if (title.trim().length === 0) {",
      "      setError(\"Task title is required.\");",
      "      return;",
      "    }",
      "",
      "    setError(\"\");",
      "",
      "    await fetch(\"/api/tasks\", {",
      "      method: \"POST\",",
      "      headers: { \"Content-Type\": \"application/json\" },",
      "      body: JSON.stringify({ title })",
      "    });",
      "",
      "    setTitle(\"\");",
      "  }",
      "",
      "  return (",
      "    <form onSubmit={handleSubmit}>",
      "      <label htmlFor=\"title\">Task title</label>",
      "      <input id=\"title\" value={title} onChange={(event) => setTitle(event.target.value)} />",
      "      {error && <p>{error}</p>}",
      "      <button type=\"submit\">Create task</button>",
      "    </form>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "protected-route-concept",
    title: "Protected Route Concept",
    phase: "Auth/Data",
    language: "tsx",
    days: [39, 40],
    description: "A simplified concept before connecting real auth.",
    code: [
      "import { redirect } from \"next/navigation\";",
      "",
      "async function getCurrentUser() {",
      "  // Later this will check Supabase or Firebase.",
      "  return null;",
      "}",
      "",
      "export default async function DashboardPage() {",
      "  const user = await getCurrentUser();",
      "",
      "  if (!user) {",
      "    redirect(\"/login\");",
      "  }",
      "",
      "  return <h1>Private dashboard</h1>;",
      "}"
    ].join("\n")
  },
  {
    id: "supabase-schema",
    title: "Supabase Task Tables",
    phase: "Auth/Data",
    language: "sql",
    days: [41, 42, 44],
    description: "A practical schema for user-owned tasks.",
    code: [
      "create table profiles (",
      "  id uuid primary key references auth.users(id) on delete cascade,",
      "  full_name text,",
      "  created_at timestamp with time zone default now()",
      ");",
      "",
      "create table tasks (",
      "  id uuid primary key default gen_random_uuid(),",
      "  user_id uuid not null references auth.users(id) on delete cascade,",
      "  title text not null,",
      "  completed boolean not null default false,",
      "  created_at timestamp with time zone default now()",
      ");",
      "",
      "alter table tasks enable row level security;",
      "",
      "create policy \"Users can read their own tasks\"",
      "on tasks for select",
      "using (auth.uid() = user_id);",
      "",
      "create policy \"Users can create their own tasks\"",
      "on tasks for insert",
      "with check (auth.uid() = user_id);"
    ].join("\n")
  },
  {
    id: "supabase-client",
    title: "Supabase Browser Client",
    phase: "Auth/Data",
    language: "ts",
    days: [42, 43, 45, 57],
    description: "A common Next.js client helper for Supabase.",
    code: [
      "// lib/supabase/client.ts",
      "import { createBrowserClient } from \"@supabase/ssr\";",
      "",
      "export function createClient() {",
      "  return createBrowserClient(",
      "    process.env.NEXT_PUBLIC_SUPABASE_URL!,",
      "    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!",
      "  );",
      "}",
      "",
      "// Example login call from a client component",
      "const supabase = createClient();",
      "",
      "const { error } = await supabase.auth.signInWithPassword({",
      "  email,",
      "  password",
      "});",
      "",
      "if (error) {",
      "  console.log(error.message);",
      "}"
    ].join("\n")
  },
  {
    id: "crud-tasks",
    title: "CRUD Actions With Supabase",
    phase: "Auth/Data",
    language: "ts",
    days: [44, 45, 58],
    description: "Create, read, update, and delete tasks for the current user.",
    code: [
      "const supabase = createClient();",
      "",
      "// Create",
      "await supabase.from(\"tasks\").insert({",
      "  title: \"Practice CRUD\",",
      "  user_id: user.id",
      "});",
      "",
      "// Read",
      "const { data: tasks } = await supabase",
      "  .from(\"tasks\")",
      "  .select(\"id, title, completed, created_at\")",
      "  .order(\"created_at\", { ascending: false });",
      "",
      "// Update",
      "await supabase",
      "  .from(\"tasks\")",
      "  .update({ completed: true })",
      "  .eq(\"id\", taskId);",
      "",
      "// Delete",
      "await supabase",
      "  .from(\"tasks\")",
      "  .delete()",
      "  .eq(\"id\", taskId);"
    ].join("\n")
  },
  {
    id: "http-cheatsheet",
    title: "HTTP Methods Cheat Sheet",
    phase: "APIs/Deployment",
    language: "txt",
    days: [46],
    description: "A plain-language reference for API conversations.",
    code: [
      "GET    /tasks       -> Give me all tasks",
      "GET    /tasks/123   -> Give me one task",
      "POST   /tasks       -> Create a new task",
      "PATCH  /tasks/123   -> Update part of a task",
      "PUT    /tasks/123   -> Replace a whole task",
      "DELETE /tasks/123   -> Delete a task",
      "",
      "Common status codes:",
      "200 OK                  -> It worked",
      "201 Created             -> New item created",
      "400 Bad Request         -> The request had a problem",
      "401 Unauthorized        -> Please log in",
      "403 Forbidden           -> You are logged in but not allowed",
      "404 Not Found           -> The thing does not exist",
      "500 Internal Server Error -> The server broke"
    ].join("\n")
  },
  {
    id: "deployment-env",
    title: "Deployment Environment Checklist",
    phase: "APIs/Deployment",
    language: "txt",
    days: [48, 50, 59],
    description: "Use this before deploying to Vercel or Netlify.",
    code: [
      "Before deployment:",
      "",
      "1. Push the latest code to GitHub.",
      "2. Confirm npm run build works locally.",
      "3. Add environment variables to Vercel or Netlify.",
      "4. Do not expose private keys in NEXT_PUBLIC variables.",
      "5. Deploy a preview branch first.",
      "6. Test signup, login, create task, update task, delete task, and logout.",
      "7. Check the build logs if deployment fails.",
      "",
      "Example variables:",
      "",
      "NEXT_PUBLIC_SUPABASE_URL=...",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY=...",
      "SUPABASE_SERVICE_ROLE_KEY=never_expose_this_in_the_browser"
    ].join("\n")
  },
  {
    id: "dns-records",
    title: "DNS Records Explained",
    phase: "APIs/Deployment",
    language: "txt",
    days: [49],
    description: "A tiny reference for custom domains.",
    code: [
      "Domain name:",
      "myapp.com",
      "",
      "DNS records:",
      "",
      "A record",
      "Points a domain to an IP address.",
      "",
      "CNAME record",
      "Points one domain name to another domain name.",
      "Example: www.myapp.com -> cname.vercel-dns.com",
      "",
      "TXT record",
      "Stores verification text.",
      "Example: proving to Vercel that you own the domain.",
      "",
      "Propagation",
      "The waiting period while DNS changes spread across the internet."
    ].join("\n")
  },
  {
    id: "typescript-types",
    title: "TypeScript Types For The Task App",
    phase: "Testing/TypeScript",
    language: "ts",
    days: [51, 52],
    description: "Practical types for users, tasks, props, and API responses.",
    code: [
      "type User = {",
      "  id: string;",
      "  email: string;",
      "};",
      "",
      "type Task = {",
      "  id: string;",
      "  title: string;",
      "  completed: boolean;",
      "  createdAt: string;",
      "  userId: string;",
      "};",
      "",
      "type TaskCardProps = {",
      "  task: Task;",
      "  onComplete: (taskId: string) => void;",
      "};",
      "",
      "function TaskCard({ task, onComplete }: TaskCardProps) {",
      "  return (",
      "    <article>",
      "      <h2>{task.title}</h2>",
      "      <button onClick={() => onComplete(task.id)}>Complete</button>",
      "    </article>",
      "  );",
      "}"
    ].join("\n")
  },
  {
    id: "debug-log-template",
    title: "Bug Log Template",
    phase: "Testing/TypeScript",
    language: "md",
    days: [53],
    description: "A structure that teaches debugging instead of guessing.",
    code: [
      "# Bug Log",
      "",
      "## Bug",
      "",
      "The task list does not show after login.",
      "",
      "## Steps To Reproduce",
      "",
      "1. Open the app.",
      "2. Log in.",
      "3. Go to the dashboard.",
      "",
      "## What I Expected",
      "",
      "The dashboard should show my tasks.",
      "",
      "## What Happened",
      "",
      "The dashboard showed an empty screen.",
      "",
      "## Clues",
      "",
      "- Browser console error:",
      "- Network request status:",
      "- Build log line:",
      "",
      "## Fix",
      "",
      "Describe the exact change that solved the bug.",
      "",
      "## Prevention",
      "",
      "Describe how to avoid this next time."
    ].join("\n")
  },
  {
    id: "playwright-smoke-test",
    title: "Playwright Smoke Test",
    phase: "Testing/TypeScript",
    language: "ts",
    days: [54],
    description: "A tiny end-to-end test for checking that the app loads and navigates.",
    code: [
      "import { test, expect } from \"@playwright/test\";",
      "",
      "test(\"home page loads\", async ({ page }) => {",
      "  await page.goto(\"/\");",
      "  await expect(page.getByRole(\"heading\", { name: /mentor task board/i })).toBeVisible();",
      "});",
      "",
      "test(\"login page is reachable\", async ({ page }) => {",
      "  await page.goto(\"/\");",
      "  await page.getByRole(\"link\", { name: /log in/i }).click();",
      "  await expect(page.getByRole(\"heading\", { name: /log in/i })).toBeVisible();",
      "});"
    ].join("\n")
  },
  {
    id: "capstone-readme",
    title: "Capstone README Starter",
    phase: "Capstone",
    language: "md",
    days: [56, 59, 60],
    description: "A professional README structure for the final project.",
    code: [
      "# Mentor Team Task Board",
      "",
      "A protected task board built with Next.js, TypeScript, and Supabase.",
      "",
      "## Features",
      "",
      "- User signup and login",
      "- Protected dashboard",
      "- Create, read, update, and delete tasks",
      "- User-owned data",
      "- Responsive UI",
      "",
      "## Tech Stack",
      "",
      "- Next.js App Router",
      "- React",
      "- TypeScript",
      "- Supabase",
      "- Vercel",
      "",
      "## Environment Variables",
      "",
      "Create a .env.local file:",
      "",
      "NEXT_PUBLIC_SUPABASE_URL=",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY=",
      "",
      "## Run Locally",
      "",
      "npm install",
      "npm run dev",
      "",
      "## Test Checklist",
      "",
      "- Sign up",
      "- Log in",
      "- Create task",
      "- Complete task",
      "- Delete task",
      "- Log out"
    ].join("\n")
  }
];

const assessments = [
  {
    phase: "1. Web Foundations",
    when: "End of Week 1",
    questions: [
      "Explain browser, server, frontend, backend, and database using a restaurant analogy.",
      "What happens when someone types a website address?",
      "What are HTML, CSS, and JavaScript responsible for?"
    ],
    task: "Build a personal profile page with clean HTML structure and basic CSS.",
    pass: [
      "Can explain the web request flow in plain language.",
      "Can create and open HTML/CSS files without help.",
      "Can explain the tags and classes used in the page."
    ]
  },
  {
    phase: "2. HTML And CSS",
    when: "End of Week 2",
    questions: [
      "What is the box model?",
      "When would you use Flexbox vs Grid?",
      "Why do forms need labels?"
    ],
    task: "Build a responsive landing page with a form, cards, navigation, and footer.",
    pass: [
      "Works on mobile and desktop.",
      "Uses semantic HTML and accessible labels.",
      "Has clear spacing, readable text, and organized CSS."
    ]
  },
  {
    phase: "3. JavaScript Basics",
    when: "End of Week 3",
    questions: [
      "What are variables, functions, arrays, and objects?",
      "When do we use conditions?",
      "Why are loops useful?"
    ],
    task: "Build a calculator or quiz using functions, conditions, arrays, and loops.",
    pass: [
      "Can explain the logic line by line.",
      "Uses at least one function, condition, array, and loop.",
      "Can debug small issues with console.log."
    ]
  },
  {
    phase: "4. DOM And GitHub",
    when: "End of Week 4",
    questions: [
      "What is the DOM?",
      "What does addEventListener do?",
      "Why do teams use GitHub and pull requests?"
    ],
    task: "Build an interactive todo app, save it with Git, push it to GitHub, and open a pull request.",
    pass: [
      "Can add, complete, and delete tasks.",
      "Uses Git commits with clear messages.",
      "Creates a PR with a useful description."
    ]
  },
  {
    phase: "5. React Foundations",
    when: "End of Week 5",
    questions: [
      "What are components, props, and state?",
      "Why do React lists need keys?",
      "What is a controlled input?"
    ],
    task: "Build a product list or team directory with reusable components and filtering.",
    pass: [
      "Uses multiple components.",
      "Passes data with props.",
      "Uses state for interaction."
    ]
  },
  {
    phase: "6. React Data",
    when: "End of Week 6",
    questions: [
      "What is useEffect for?",
      "What is an API?",
      "Why are loading and error states important?"
    ],
    task: "Build a React app that fetches public API data and handles loading, error, and empty states.",
    pass: [
      "Uses useEffect and fetch correctly.",
      "Handles failure gracefully.",
      "Has a clear component structure."
    ]
  },
  {
    phase: "7. Next.js App Router",
    when: "End of Week 7",
    questions: [
      "What does Next.js add to React?",
      "How does file-based routing work?",
      "What is the difference between server and client components?"
    ],
    task: "Build a mini blog with home, posts list, dynamic post detail, layout, loading, and not found states.",
    pass: [
      "Uses the app directory correctly.",
      "Creates dynamic routes.",
      "Can explain server vs client components."
    ]
  },
  {
    phase: "8. Next.js Fullstack Patterns",
    when: "End of Week 8",
    questions: [
      "What are environment variables?",
      "What are route handlers?",
      "What is a protected route?"
    ],
    task: "Build a dashboard shell with mock data, a task form, route handler, and protected-route concept.",
    pass: [
      "Uses .env.local and .env.example appropriately.",
      "Creates at least one route handler.",
      "Includes loading, empty, and error UI."
    ]
  },
  {
    phase: "9. Data And Auth",
    when: "End of Week 9",
    questions: [
      "What is the difference between authentication and authorization?",
      "What does CRUD mean?",
      "Why must users only see their own data?"
    ],
    task: "Build an authenticated task manager with Supabase or Firebase.",
    pass: [
      "Users can sign up, log in, and log out.",
      "Users can create, read, update, and delete their own tasks.",
      "Private routes and data are protected."
    ]
  },
  {
    phase: "10. APIs And Deployment",
    when: "End of Week 10",
    questions: [
      "What are request and response?",
      "What does hosting do?",
      "What does DNS do?"
    ],
    task: "Deploy the task app to Vercel or Netlify and explain the deployment pipeline.",
    pass: [
      "App works at a public URL.",
      "Environment variables are configured in the host.",
      "Learner can read and explain build logs."
    ]
  },
  {
    phase: "11. TypeScript, Testing, Workflow",
    when: "End of Week 11",
    questions: [
      "What problem does TypeScript solve?",
      "What is a manual QA checklist?",
      "What should a good PR description include?"
    ],
    task: "Complete a small ticket using TypeScript, manual QA, Git branch, PR, and review notes.",
    pass: [
      "Types common data and props.",
      "Runs or documents tests.",
      "Submits a clear PR with testing notes."
    ]
  },
  {
    phase: "12. Capstone",
    when: "End of Week 12",
    questions: [
      "Can you explain your app architecture?",
      "Can you explain how auth and database work together?",
      "Can you describe your deployment workflow?"
    ],
    task: "Build and deploy a protected team task board with auth, database CRUD, GitHub PR, README, and demo.",
    pass: [
      "Complete user flow works.",
      "Repo, PR, deployment, and README are reviewable.",
      "Learner can demo and answer questions calmly."
    ]
  }
];

const rubric = [
  {
    title: "Technical Basics",
    items: [
      "Builds responsive pages with HTML and CSS.",
      "Uses JavaScript for logic and interaction.",
      "Creates React components with props, state, forms, and lists.",
      "Uses Next.js App Router for pages, layouts, and dynamic routes.",
      "Connects to Supabase or Firebase for auth and data."
    ]
  },
  {
    title: "Professional Workflow",
    items: [
      "Uses Git branches and clear commits.",
      "Pushes to GitHub and opens pull requests.",
      "Writes PR descriptions with testing notes.",
      "Uses environment variables safely.",
      "Can deploy to Vercel or Netlify."
    ]
  },
  {
    title: "Problem Solving",
    items: [
      "Reads error messages instead of panicking.",
      "Uses browser dev tools and build logs.",
      "Breaks tasks into small steps.",
      "Searches documentation responsibly.",
      "Asks clear questions when blocked."
    ]
  },
  {
    title: "Team Readiness",
    items: [
      "Can pick up a small ticket.",
      "Can work inside an existing codebase with guidance.",
      "Accepts code review professionally.",
      "Communicates progress and blockers.",
      "Can complete the capstone with normal mentor review."
    ]
  }
];

const allDays = weeks.flatMap((week) => week.days.map((day) => ({ ...day, week: week.number, weekTitle: week.title })));
const progressKey = "mentor-dashboard-progress";
const progress = loadProgress();

const sectionButtons = document.querySelectorAll(".nav-button");
const sections = document.querySelectorAll(".section");
const weekFilter = document.querySelector("#weekFilter");
const homeworkWeekFilter = document.querySelector("#homeworkWeekFilter");
const videoFilter = document.querySelector("#videoFilter");
const snippetFilter = document.querySelector("#snippetFilter");
const daySearch = document.querySelector("#daySearch");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || { complete: {}, notes: {} };
  } catch {
    return { complete: {}, notes: {} };
  }
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
  updateProgress();
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function linkedList(items) {
  return `<ul>${items.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noreferrer">${label}</a></li>`).join("")}</ul>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setupNavigation() {
  sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.section;
      sectionButtons.forEach((item) => item.classList.toggle("active", item === button));
      sections.forEach((section) => section.classList.toggle("active", section.id === target));
      window.location.hash = target;
    });
  });

  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const match = document.querySelector(`.nav-button[data-section="${hash}"]`);
    if (match) match.click();
  }
}

function setupFilters() {
  weekFilter.innerHTML = `<option value="all">All weeks</option>${weeks.map((week) => `<option value="${week.number}">Week ${week.number}: ${week.title}</option>`).join("")}`;
  homeworkWeekFilter.innerHTML = weeks.map((week) => `<option value="${week.number}">Week ${week.number}: ${week.title}</option>`).join("");

  const phases = ["All phases", ...new Set(videos.map(([phase]) => phase))];
  videoFilter.innerHTML = phases.map((phase) => `<option value="${phase}">${phase}</option>`).join("");

  const snippetPhases = ["All topics", ...new Set(snippets.map((snippet) => snippet.phase))];
  snippetFilter.innerHTML = snippetPhases.map((phase) => `<option value="${phase}">${phase}</option>`).join("");

  weekFilter.addEventListener("change", renderDays);
  homeworkWeekFilter.addEventListener("change", renderHomework);
  videoFilter.addEventListener("change", renderVideos);
  snippetFilter.addEventListener("change", renderSnippets);
  daySearch.addEventListener("input", renderDays);
}

function renderOverview() {
  const timeline = document.querySelector("#overviewTimeline");
  timeline.innerHTML = weeks
    .map(
      (week) => `
        <article class="timeline-item">
          <strong>Week ${week.number}</strong>
          <span>${week.title}</span>
          <span>${week.outcome}</span>
        </article>
      `
    )
    .join("");
}

function renderWeekSummary(days) {
  const summary = document.querySelector("#weekSummary");
  if (!days.length) {
    summary.innerHTML = `<div class="empty-state">No days match your search.</div>`;
    return;
  }

  const weekNumbers = [...new Set(days.map((day) => day.week))];
  const titles = weekNumbers.map((number) => weeks.find((week) => week.number === number).title);
  summary.innerHTML = `
    <div>
      <strong>${days.length} day${days.length === 1 ? "" : "s"} showing</strong>
      <p>${titles.join(", ")}</p>
    </div>
    <div class="pill-row">
      ${weekNumbers.map((number) => `<span class="pill">Week ${number}</span>`).join("")}
    </div>
  `;
}

function renderDays() {
  const grid = document.querySelector("#dayGrid");
  const selectedWeek = weekFilter.value;
  const query = daySearch.value.trim().toLowerCase();

  const days = allDays.filter((day) => {
    const matchesWeek = selectedWeek === "all" || Number(selectedWeek) === day.week;
    const haystack = [
      day.title,
      day.objective,
      day.weekTitle,
      day.analogy,
      day.research,
      day.demo,
      day.practice,
      ...day.homework,
      ...day.checkpoint,
      ...getSnippetsForDay(day.day).map((snippet) => `${snippet.title} ${snippet.description} ${snippet.code}`)
    ]
      .join(" ")
      .toLowerCase();
    return matchesWeek && (!query || haystack.includes(query));
  });

  renderWeekSummary(days);

  if (!days.length) {
    grid.innerHTML = `<div class="empty-state">No matching lessons. Try a different search.</div>`;
    return;
  }

  grid.innerHTML = days.map(renderDayCard).join("");
  grid.querySelectorAll("[data-complete-day]").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      progress.complete[event.target.dataset.completeDay] = event.target.checked;
      saveProgress();
    });
  });

  grid.querySelectorAll("[data-note-day]").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      progress.notes[event.target.dataset.noteDay] = event.target.value;
      saveProgress();
    });
  });
}

function renderDayCard(day) {
  const checked = progress.complete[day.day] ? "checked" : "";
  const notes = escapeHtml(progress.notes[day.day] || "");

  return `
    <article class="day-card">
      <header>
        <div>
          <div class="day-meta">
            <span class="pill">Day ${day.day}</span>
            <span class="pill">Week ${day.week}: ${day.weekTitle}</span>
          </div>
          <h3>${day.title}</h3>
          <p>${day.objective}</p>
        </div>
        <label class="day-toggle">
          <input type="checkbox" data-complete-day="${day.day}" ${checked} />
          Complete
        </label>
      </header>

      <div class="lesson-layout">
        <div class="lesson-block">
          <h4>Talk About</h4>
          ${list(day.talk)}
        </div>
        <div class="lesson-block">
          <h4>Simple Analogy</h4>
          <p>${day.analogy}</p>
        </div>
        <div class="lesson-block">
          <h4>Watch Or Read</h4>
          ${linkedList(day.watch)}
        </div>
        <div class="lesson-block">
          <h4>Research Prompt</h4>
          <p>${day.research}</p>
        </div>
        <div class="lesson-block">
          <h4>Mentor Demo</h4>
          <p>${day.demo}</p>
        </div>
        <div class="lesson-block">
          <h4>Guided Practice</h4>
          <p>${day.practice}</p>
        </div>
        <div class="lesson-block">
          <h4>Homework</h4>
          ${list(day.homework)}
        </div>
        <div class="lesson-block">
          <h4>Checkpoint Questions</h4>
          ${list(day.checkpoint)}
        </div>
        ${renderDaySnippets(day.day)}
        <div class="lesson-block full">
          <h4>Mentor Notes</h4>
          <textarea class="notes-area" data-note-day="${day.day}" placeholder="What clicked? What needs review tomorrow?">${notes}</textarea>
        </div>
      </div>
    </article>
  `;
}

function getSnippetsForDay(dayNumber) {
  return snippets.filter((snippet) => snippet.days.includes(dayNumber));
}

function renderDaySnippets(dayNumber) {
  const daySnippets = getSnippetsForDay(dayNumber);

  if (!daySnippets.length) {
    return "";
  }

  return `
    <div class="lesson-block full">
      <h4>Code Samples For This Lesson</h4>
      <div class="snippet-grid">
        ${daySnippets.map((snippet) => renderSnippetCard(snippet, true)).join("")}
      </div>
    </div>
  `;
}

function renderSnippetCard(snippet, compact = false) {
  return `
    <article class="snippet-card ${compact ? "compact" : ""}">
      <div class="snippet-header">
        <div class="snippet-title">
          <div class="day-meta">
            <span class="pill">${snippet.phase}</span>
            <span class="pill">${snippet.language}</span>
          </div>
          <h3>${snippet.title}</h3>
          <p>${snippet.description}</p>
        </div>
        <button class="copy-button" type="button" data-copy-snippet="${snippet.id}">Copy</button>
      </div>
      <div class="code-panel">
        <pre><code>${escapeHtml(snippet.code)}</code></pre>
      </div>
      <p class="snippet-note">Mentor tip: explain the goal first, then type the code slowly enough for the learner to predict the next line.</p>
    </article>
  `;
}

function renderVideos() {
  const selected = videoFilter.value;
  const filtered = videos.filter(([phase]) => selected === "All phases" || phase === selected);
  const grid = document.querySelector("#videoGrid");

  grid.innerHTML = filtered
    .map(
      ([phase, title, use, url]) => `
        <article class="resource-card">
          <span class="pill">${phase}</span>
          <h3>${title}</h3>
          <p>${use}</p>
          <a class="resource-link" href="${url}" target="_blank" rel="noreferrer">Open Resource</a>
        </article>
      `
    )
    .join("");
}

function renderSnippets() {
  const selected = snippetFilter.value;
  const filtered = snippets.filter((snippet) => selected === "All topics" || snippet.phase === selected);
  const grid = document.querySelector("#snippetGrid");

  grid.innerHTML = filtered.map((snippet) => renderSnippetCard(snippet)).join("");
}

function renderHomework() {
  const selectedWeek = Number(homeworkWeekFilter.value || 1);
  const days = allDays.filter((day) => day.week === selectedWeek);
  const listEl = document.querySelector("#homeworkList");
  listEl.innerHTML = days
    .map(
      (day) => `
        <article class="homework-card">
          <div class="day-meta">
            <span class="pill">Day ${day.day}</span>
            <span class="pill">${day.title}</span>
          </div>
          <h3>Independent Work</h3>
          ${list(day.homework)}
          <div class="lesson-block">
            <h4>Must Be Able To Answer</h4>
            ${list(day.checkpoint)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderAssessments() {
  const grid = document.querySelector("#assessmentGrid");
  grid.innerHTML = assessments
    .map(
      (assessment) => `
        <article class="assessment-card">
          <span class="pill">${assessment.when}</span>
          <h3>${assessment.phase}</h3>
          <div class="assessment-section">
            <strong>Knowledge Questions</strong>
            ${list(assessment.questions)}
          </div>
          <div class="assessment-section">
            <strong>Practical Test</strong>
            <p>${assessment.task}</p>
          </div>
          <div class="assessment-section">
            <strong>Pass Criteria</strong>
            ${list(assessment.pass)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderRubric() {
  const grid = document.querySelector("#rubricGrid");
  grid.innerHTML = rubric
    .map(
      (group) => `
        <article class="rubric-card">
          <h3>${group.title}</h3>
          ${list(group.items)}
        </article>
      `
    )
    .join("");
}

function updateProgress() {
  const completeCount = allDays.filter((day) => progress.complete[day.day]).length;
  const pct = Math.round((completeCount / allDays.length) * 100);
  document.documentElement.style.setProperty("--progress", `${pct}%`);
  document.querySelector("#progressPct").textContent = `${pct}%`;
  document.querySelector("#progressText").textContent = `${completeCount} of ${allDays.length} days complete`;
  document.querySelector("#snippetCount").textContent = snippets.length;
}

function setupActions() {
  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#resetProgressBtn").addEventListener("click", () => {
    const confirmed = window.confirm("Reset all completed days and mentor notes in this browser?");
    if (!confirmed) return;
    progress.complete = {};
    progress.notes = {};
    saveProgress();
    renderDays();
  });

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-snippet]");
    if (!button) return;

    const snippet = snippets.find((item) => item.id === button.dataset.copySnippet);
    if (!snippet) return;

    try {
      await navigator.clipboard.writeText(snippet.code);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = snippet.code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    }
  });
}

function init() {
  setupNavigation();
  setupFilters();
  setupActions();
  renderOverview();
  renderDays();
  renderVideos();
  renderSnippets();
  renderHomework();
  renderAssessments();
  renderRubric();
  updateProgress();
}

init();
