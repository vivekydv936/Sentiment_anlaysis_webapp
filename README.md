
# 📝 Feedback Analysis System using NLP

This project is a **Feedback Analysis System** built with **FastAPI** and **TextBlob**, designed to classify textual feedback into sentiments such as **Positive**, **Negative**, or **Neutral**. It's ideal for analyzing customer, student, or user feedback in real-time using Natural Language Processing (NLP) techniques.

## 🚀 Features

- 🔍 **Sentiment Analysis** using TextBlob
- ⚡ **FastAPI Backend** for real-time API responses
- 🌐 **RESTful API** for integrating with any frontend or system
- 📊 Returns **polarity** and **subjectivity** scores
- 🧪 Clean and minimal setup for experimentation or production use

## 🛠️ Tech Stack

- **Programming Language**: Python 3
- **Framework**: FastAPI
- **NLP Library**: TextBlob
- **Web Server**: Uvicorn
- **Optional Frontend**: HTML/CSS/JS or API clients like Postman

## 📦 Requirements

Install dependencies via:

```bash
pip install -r requirements.txt
````

Typical `requirements.txt` might include:

```
fastapi
uvicorn
textblob
```

## ▶️ How to Run the App

1. **Clone the repository**

```bash
git clone https://github.com/vivekydv936/local_host.git
cd local_host
```

2. **Install dependencies**

```bash
pip install -r requirements.txt
```

3. **Run the FastAPI app**

```bash
uvicorn main:app --reload
```

4. **Access the API documentation**
   Go to:

```
http://127.0.0.1:8000/docs
```

You'll find the Swagger UI where you can test the sentiment analysis endpoint interactively.

## 🧪 Example API Usage

### `POST /analyze`

**Request Body:**

```json
{
  "text": "I love this event! It was very well organized."
}
```

**Response:**

```json
{
  "polarity": 0.625,
  "subjectivity": 0.6,
  "sentiment": "Positive"
}
```

## 📁 Folder Structure

```
local_host/
├── main.py               # FastAPI app
├── sentiment.py          # TextBlob analysis logic
├── models.py             # Pydantic models for request/response
├── requirements.txt
└── README.md
```

## 👨‍💻 Developed By

**Vivek Yadav**
B.Tech Data Science Student
ABES Engineering College

## 📫 Contact

* 📧 Email: [vivekydv936@gmail.com](mailto:vivekydv936@gmail.com)
* 🔗 [LinkedIn](https://www.linkedin.com/in/vivekydv936)

---

⭐ Star this repo if it helped you or inspired your next project!

```

---

Would you like me to generate this as a downloadable file for you now?
```
