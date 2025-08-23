import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Extras:React.FC = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("CounterContext missing!");
  const { state, dispatch } = context;

  return (
    <>
    <div className="p-4 border mt-4">
      <h3>Deep Child Component</h3>
      <p>Count: {state.count}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    </div>

    <div>
      
    
    Bhai 👊 tu abhi **BCA 5th sem last year** me hai, tere paas already JS, React, Tailwind, TypeScript, Java, DB ka knowledge hai. Tere portfolio ko ek **industry-level React project** banana chahiye jisme tu **saare advanced concepts revise kare** aur hands-on experience bhi mile.

Main tujhe **portfolio roadmap + chart** banata hoon 👇

---

# 🏗️ Tech Stack for Portfolio

* **Frontend**: React + TypeScript + TailwindCSS
* **Routing**: React Router v6 (nested + protected routes)
* **State Management**: Context API + Reducer (for theme, filters, etc.)
* **Animations**: Framer Motion (page transitions, scroll animations)
* **Forms**: React Hook Form + Zod validation
* **Data Handling**: Fetch projects/blogs from JSON or GitHub API
* **SEO**: React Helmet for meta tags
* **Deployment**: Vercel / Netlify with custom domain

---

# 📑 Pages & Sections Chart

| **Page**                         | **Sections / Features**                                                                        | **Concepts Covered**                                                       |
| -------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Home (Landing)**               | Hero intro, Typewriter text, CTA button, Framer Motion animations                              | Framer Motion, Component structure, Responsive layout                      |
| **About Me**                     | Timeline (education + experience), Skill charts, Tech stack badges                             | Recharts (skill charts), Context data handling                             |
| **Projects**                     | Project grid with filters (All, Web, Fullstack, etc.), Modal for details (GitHub + Live links) | Context + Reducer for filter, API integration (GitHub API), Modal handling |
| **Experience / Resume**          | Work/Internship timeline, Download Resume PDF                                                  | PDF export, Flex/Grid advanced layout                                      |
| **Blog (Optional but Advanced)** | Markdown posts rendered dynamically, Search + filter blogs                                     | React Markdown, Search filter logic, Pagination                            |
| **Contact**                      | Contact form (React Hook Form + Zod), EmailJS integration, Social icons                        | Form validation, External service integration                              |
| **Extras (Optional)**            | Theme toggle, Achievements, Certifications section                                             | Context API + Reducer, LocalStorage persistence                            |

---

# 🔥 Advanced Topics You’ll Revise While Building

1. **React Basics** → Components, Props, State
2. **React Router v6** → Nested routing, dynamic routes
3. **TypeScript in React** → Types, interfaces, props typing, context typing
4. **Context API + Reducer** → Global state (theme, filters)
5. **TailwindCSS** → Responsive design, dark mode, custom config
6. **Framer Motion** → Animations, page transitions
7. **React Hook Form + Zod** → Form handling + validation
8. **API Integration** → GitHub API to fetch projects/blogs
9. **Recharts** → Skill visualization (radial charts, bars)
10. **SEO Optimization** → React Helmet
11. **Performance** → Code splitting + lazy loading routes
12. **Deployment** → CI/CD (Netlify/Vercel, GitHub Actions optional)

---

# 📆 Suggested Build Plan (Revision + Project Build)

| **Day/Session** | **Task**                                                               | **Concepts Covered**               |
| --------------- | ---------------------------------------------------------------------- | ---------------------------------- |
| Day 1           | Setup React + TS + Tailwind project, Routing + Layout (Navbar, Footer) | Setup, Routing                     |
| Day 2           | Build Home (Hero + animations + theme toggle)                          | Framer Motion, Context             |
| Day 3           | About Me (timeline + skill charts)                                     | Recharts, Tailwind Grid            |
| Day 4           | Projects page (grid, filters, modals)                                  | Context + Reducer, API integration |
| Day 5           | Resume/Experience page (timeline + PDF download)                       | File export, Flexbox               |
| Day 6           | Blog page (Markdown + search + pagination)                             | Data handling, Search              |
| Day 7           | Contact page (form + validation + EmailJS)                             | Hook Form + Zod                    |
| Day 8           | SEO + Performance optimizations                                        | React Helmet, Lazy loading         |
| Day 9           | Testing + bug fixes                                                    | Debugging                          |
| Day 10          | Deployment + polish                                                    | Vercel/Netlify                     |

---

👉 Bhai, ye roadmap se tu **10 din me ek industry-level advanced portfolio** bana lega jo na sirf showcase hoga balki tera **React + TS + Tailwind revision project** bhi ban jayega.

---

Bhai bata, mai tujhe iska **file structure with code snippets (starter)** bana du taaki tu directly coding start kar de?
</div>

</>
  )
}

export default Extras;


/*
// src/App.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { increment, decrement, incrementByAmount } from "./features/counterSlice";

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">Redux Toolkit + TypeScript</h1>
      <p className="text-xl">Count: {count}</p>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Add 5
        </button>
      </div>
    </div>
  );
};

export default App;
*/