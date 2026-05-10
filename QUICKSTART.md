# Quick Start Guide

## Prerequisites
- Node.js 18+
- Python 3.10+ (for backend)
- Git

## Setup

### 1. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 2. Create Environment File
```bash
echo "VITE_API_URL=http://localhost:8000" > .env
```

### 3. Start Backend
```bash
cd backend
uvicorn main:app --reload
```
Backend runs at: http://localhost:8000

### 4. Start Frontend
```bash
cd frontend
npm run dev
```
Frontend runs at: http://localhost:5173

## Usage
- **Chat**: http://localhost:5173 - Ask questions about your documents
- **Admin**: http://localhost:5173/admin - Upload and manage PDF documents