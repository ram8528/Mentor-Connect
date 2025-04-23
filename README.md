# Mentor Connect

🚀 **Mentor Connect** is a Full Stack MERN-based AI-integrated mentorship platform that intelligently connects students and mentors. It enables collaborative learning, personalized guidance, and growth tracking through a modern, responsive web application.

---

## 🔧 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js, 
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), Role-based Access (Student & Mentor)
- **AI Integration**: (Pluggable recommendation logic / placeholder for AI engine)

---

## 🌟 Features

### 🎓 For Students:
- Create profile, list goals and interests
- View mentor recommendations powered by AI
- Interact with mentors via posts, messaging
- Dashboard to track mentorship progress

### 🧑‍🏫 For Mentors:
- Build mentor portfolio
- Get matched with relevant students
- Post content, answer queries
- Monitor and support student growth

### 🔒 Role-based Login:
- Two separate roles

## 🤖 AI Integration with OpenAI

Mentor Connect uses OpenAI’s GPT models to enhance the mentorship experience by:

- Generating intelligent mentor/mentee matches
- Providing learning suggestions and resources
- Enabling smart post/comment assistance (e.g., rephrasing, summarization)

---

### ⚙️ OpenAI Setup

To integrate OpenAI into the platform, follow these steps:

#### 1. Get your OpenAI API key
- Sign up at [https://platform.openai.com](https://platform.openai.com)
- Go to **API Keys** and generate a new secret key

#### 2. Add your key to the backend `.env` file

```env
OPENAI_API_KEY=your_openai_api_key_here

📥 Future AI Ideas
Auto-summarize long threads/posts

AI assistant for Q&A forums

Personalized learning path generation

Real-time code/debug helper (OpenAI Codex)

🛡️ Security Note
Always secure your keys using .env

Add .env to .gitignore

Use rate limits and token checks on your AI endpoints

yaml
Copy
Edit
