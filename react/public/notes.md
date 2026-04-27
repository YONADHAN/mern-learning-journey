# React Interview Quick Notes



---

## 🔹 React Fragments

> React Fragments let you group multiple elements without adding extra nodes to the DOM, improving clean HTML structure.

---

## 🔹 Babel

> Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.

---

## 🔹 Reconciliation

> Reconciliation is React’s process of comparing the current Virtual DOM with the previous one and updating only the changed parts in the real DOM.

---

## 🔹 Transpiler

> A transpiler converts code from one version/language to another at the same level, like ES6 to ES5 (e.g., Babel).

---

## 🔹 Redux Principles

> Redux follows three principles:

1. Single source of truth (one global store)  
2. State is read-only (updated via actions)  
3. Changes are made with pure reducer functions  

---

## 🔹 Rules of Hooks

> Hooks must:

- Be called only at the top level  
- Be called only inside React functional components or custom hooks  

---

## 🔹 Advantages of React

> Component-based architecture, reusable code, Virtual DOM for performance, strong ecosystem, and easy state management.

---

## 🔹 Disadvantages of React

> Requires additional libraries for full setup, frequent updates, JSX learning curve, and overuse of re-renders if not optimized.

---

## 🔹 Shadow DOM

> Shadow DOM is a browser feature that encapsulates DOM and styles inside a component, preventing global CSS conflicts.

---

## 🔹 Virtual DOM

> Virtual DOM is a lightweight JavaScript representation of the real DOM used by React to efficiently update UI.

---

## 🔹 Events (onClick, onScroll, etc.)

> React uses a synthetic event system to handle events like onClick and onScroll, providing consistent behavior across browsers.

---

## 🔹 Error Boundaries

> Error boundaries are React components that catch JavaScript errors in child components and display fallback UI instead of crashing the app.

---

## 🔹 Reusable Components

> Reusable components are modular UI units designed to be used multiple times across an application, improving maintainability.

---

## 🔹 Prop Drilling

> Prop drilling is passing data through multiple component levels even when intermediate components don’t need it.

---

## 🔹 Thunk vs Saga

### Thunk

> Redux Thunk allows async logic inside action creators using functions.

### Saga

> Redux Saga uses generator functions to handle complex async flows like side effects and background tasks.

### 👉 Difference

- Thunk → simple, function-based  
- Saga → complex, powerful, better for large apps  

---

## 🔹 React Middleware

> Middleware in React (commonly in Redux) sits between dispatch and reducer to handle side effects like logging, API calls, or async operations.

---

## 🔥 Final Advice

Don’t just memorize—connect them.

If interviewer asks:

- Virtual DOM → mention Reconciliation  
- Redux → mention Middleware + Thunk/Saga  
- Hooks → mention Rules of Hooks  

---

