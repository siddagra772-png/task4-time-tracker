# 🧠 Time Tracker Chrome Extension

## 📌 Project Overview

This project is a **Chrome Extension for Time Tracking and Productivity Analytics** developed as part of a Full Stack Internship Task.

The extension tracks the time users spend on different websites, classifies them as **productive or unproductive**, stores the data in a backend database, and displays analytics through a dashboard.

---

## 🚀 Features

* ⏱️ Track time spent on each website
* 📊 Classify websites:

  * ✅ Productive (e.g., GitHub, LeetCode)
  * ❌ Unproductive (e.g., YouTube, Instagram)
  * ⚪ Neutral
* 💾 Store data using backend (Node.js + MongoDB)
* 📈 Display usage analytics in dashboard
* 📋 Popup UI showing real-time usage

---

## 🛠️ Tech Stack

### Frontend (Extension)

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```
time-tracker-extension/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── styles.css
│
├── backend/
│   ├── server.js
│
└── dashboard/
    └── index.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/time-tracker-extension.git
cd time-tracker-extension
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
node server.js
```

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017/timetracker
```

---

### 3️⃣ Load Chrome Extension

1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

---

## 📊 Usage

* Browse websites normally
* Extension automatically tracks time
* Click extension icon to see usage
* Open dashboard to view analytics

---

## 🧠 Productivity Classification

You can customize categories in `popup.js`:

```javascript
const productiveSites = ["github.com", "leetcode.com"];
const unproductiveSites = ["youtube.com", "instagram.com"];
```

---

## 📈 API Endpoints

### Save Data

```
POST /save
```

### Get Data

```
GET /data
```

---

## 🎯 Future Enhancements

* 📊 Charts using Chart.js
* 📅 Weekly/Monthly reports
* 🔐 User authentication
* 📄 Export reports (PDF)
* 🌙 Dark mode

---

## 📸 Screenshots (Add Here)

* Extension popup
* Dashboard view
* Chrome extension loaded

---

## 📌 Submission Requirements

* ✔ GitHub repository
* ✔ Proper code structure
* ✔ Comments in code
* ✔ Working extension + backend

---

## 👨‍💻 Author

Rajan Gupta
Full Stack Intern

---

## 📜 License

This project is for educational purposes.
