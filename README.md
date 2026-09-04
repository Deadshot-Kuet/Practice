# 📝 To-Do App

A simple and interactive **To-Do List Web Application** built with **HTML, CSS, and JavaScript**.

This project was created to practice core JavaScript concepts such as DOM manipulation, event handling, arrays, objects, JSON, and browser `localStorage`.

## 🚀 Features

* ➕ Add new tasks
* 🗑️ Delete tasks
* ✅ Mark tasks as completed
* 🔄 Toggle tasks between completed and incomplete
* 💾 Tasks are saved using `localStorage`
* 📊 Displays:

  * Total tasks
  * Completed tasks
  * Incomplete tasks
* 🔄 Tasks and progress remain after refreshing the page
* ⌨️ Press **Enter** to add a task
* 🌙 Responsive cyberpunk-style interface

## 🛠️ Technologies Used

* **HTML5** — Structure
* **CSS3** — Styling and UI
* **JavaScript** — Application logic and DOM manipulation
* **LocalStorage** — Persistent browser storage
* **JSON** — Storing and retrieving task data

## 🧠 What I Learned

While building this project, I practiced:

* DOM manipulation
* `addEventListener()`
* Event delegation
* Arrays and objects
* `push()`, `splice()`, and `findIndex()`
* `forEach()`
* Conditional rendering
* Template literals
* `classList.toggle()`
* `JSON.stringify()`
* `JSON.parse()`
* Browser `localStorage`
* Basic state management
* Separating data from UI rendering

## 📂 Project Structure

```text
todo-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

Tasks are stored as JavaScript objects:

```javascript
{
    text: "Study JavaScript",
    completed: false
}
```

Multiple tasks are stored inside an array:

```javascript
const taskArray = [
    {
        text: "Study JavaScript",
        completed: false
    },
    {
        text: "Practice DSA",
        completed: true
    }
];
```

The array is saved to `localStorage` using JSON:

```javascript
localStorage.setItem("tasks", JSON.stringify(taskArray));
```

When the page loads, the saved tasks are retrieved:

```javascript
const taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
```

The UI is then generated from `taskArray`.

## 📊 Progress Tracking

The application calculates:

```text
Total Tasks = taskArray.length

Completed Tasks = number of tasks where completed === true

Incomplete Tasks = Total Tasks - Completed Tasks
```

This means the progress information is automatically restored after refreshing the page.

## ▶️ How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Start adding tasks!

No backend or installation is required.

## 🔮 Future Improvements

Possible features for future versions:

* [ ] Edit tasks
* [ ] Task categories
* [ ] Due dates
* [ ] Search and filter tasks
* [ ] Priority levels
* [ ] Actual visual progress bar
* [ ] Unique task IDs
* [ ] Backend database
* [ ] User authentication

## 👨‍💻 Author

**Rafi**

Built as a learning project while exploring JavaScript and Web Development.

---

⭐ If you found this project useful, feel free to star the repository!
