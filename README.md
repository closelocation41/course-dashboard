## 🛠 Setup Instructions

1. **Install Angular CLI globally**:

   ```bash
   npm install -g @angular/cli
   ```

2. **Install project dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   ng serve
   ```

4. **Open your browser** and go to:

   ```
   http://localhost:4200
   ```

![Login Page](public/login.png)


---

## 🔐 Login Credentials

* **Email:** `test@demo.com`
* **Password:** `demo`

---

## 📚 How to Use

* After logging in, the app displays a top navigation bar and a left sidebar menu.
![Left Menu](public/left-menu.png)
* Click on any **course** in the sidebar to load its content.
![Course Content](public/course-content.png)
* A table will appear with rows of topics, instructors, and durations for that course.
* You can **edit any row** directly in the table.
![Save Content](public/course-save.png)
* Click **Save** to store your changes (currently logs to console).

---

## 🎨 UI & Tech Stack

* Angular 19 (with Standalone Components)
* Bootstrap 5 (CDN)
* TypeScript

---

## 📂 Project Structure (simplified)

```
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   ├── side-menu/
│   │   ├── course-table/
│   │   └── navbar/
│   ├── app.routes.ts
│   └── app.component.ts
├── index.html
├── styles.scss
└── main.ts
```

---

## ✅ Features

* Login with email/password.
* Sidebar course navigation.
* Course-specific content in a table.
* Inline table editing and save.

---
