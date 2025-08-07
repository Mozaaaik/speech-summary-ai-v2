# 🎙️ Speech Summary AI v2

A full-stack speech transcription and summarization web app using **React + Node.js**, powered by **Google Cloud**, **Cohere AI**, and **Supabase**.  
Users can record or upload audio, get transcriptions, generate summaries & titles, and hear the results back using TTS.

---

## 🧠 What’s New in v2

- 🔐 **JWT-based Authentication** with Supabase  
- 🧑‍💻 **User roles**: Free vs. Pro accounts  
- 🧠 **Smart Title Generator**: AI auto-names transcript sessions  
- 🕰️ **History & Session Management**  
- 🎓 Cohere + Google Cloud integration improved  
- 🧾 Real-time transcription with **auto-scrolling highlights**  
- 💎 Clean React 19 UI and backend service separation  

---

## 🛠️ Features

### 🔐 User Management
- Register / Login with email/password (Supabase Auth)  
- Session-based authentication with JWT  
- Role system: free users vs pro users  
- Role upgrade endpoint (`/pro`)  

### 🎤 Audio Processing
- Upload or record audio  
- Audio files uploaded to Google Cloud Storage  
- Transcription via Google Speech-to-Text API  
- Real-time transcript display on frontend  

### 📚 AI Summarization
- Summarize transcripts using **Cohere AI** (Pro users only)  
- Generate short 3-word **smart titles**  
- Optional: GPT / Gemini support for additional AI services  

### 🎧 Text-to-Speech (TTS)
- Synthesize summary text to speech (via Google or OpenAI)  
- Download or stream generated audio  

### 📜 History & Storage
- User audio, transcripts, summaries, titles & TTS stored in Supabase  
- Authenticated users can view history of previous sessions  

---

## 🖥️ Frontend (React)

- React 19 + CRA  
- Supabase integration  
- Audio recorder + uploader  
- Transcript highlighting during playback  
- Role-based UI adjustments  
- Demo: https://speech-summary-ai-v2.vercel.app/login

---

## 🚀 Backend (Node.js + Express)

- Express v5 REST API  
- Supabase Postgres integration  
- Google Cloud SDKs:  
  - Speech-to-Text  
  - Text-to-Speech  
  - Cloud Storage  
- Cohere AI Chat API for summarization & title generation  
- JWT authentication middleware  
- File handling with Multer  
- `.env` for config & credentials  

---

## 🧱 Tech Stack Overview

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Frontend    | React 19, react-router-dom 7, axios      |
| Auth & DB   | Supabase                                 |
| AI Services | Cohere AI, Google Cloud APIs, OpenAI     |
| Backend     | Node.js, Express v5                      |
| Tools       | Multer, dotenv, cors, fs, compromise (NLP) |

---

## 📁 Folder Structure


---

## 🔑 Example `.env` File

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_service_role_key

# Google Cloud
GOOGLE_APPLICATION_CREDENTIALS=./credentials.json

# Cohere
COHERE_API_KEY=your_cohere_api_key

# OpenAI (optional)
OPENAI_API_KEY=your_openai_api_key

# Port
PORT=3000

## 📡 API Routes Overview

| Endpoint           | Method | Description                            |
|--------------------|--------|----------------------------------------|
| `/user/register`   | POST   | Register a new user                    |
| `/user/login`      | POST   | Authenticate & return JWT              |
| `/speech/upload`   | POST   | Upload audio & return transcription    |
| `/speech/summary`  | POST   | Generate summary via Cohere (Pro only)|
| `/speech/tts`      | POST   | Convert summary to audio (TTS)         |
| `/history`         | GET    | Fetch past session history             |
| `/pro`             | POST   | Upgrade user role to `pro`             |


---


## 🧠 AI-Generated Session Names

Every transcript is automatically analyzed.  
Based on the content, a short **smart title** is generated with AI — no manual input required.


## 🤝 Contributing

Pull requests and issues are welcome!  
If you like the project, don’t forget to ⭐️ star it.





