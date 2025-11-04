# 🧠 AI Agent Dialogue Showcase
### A Research Project by [Tawana Mohammadi](https://tawana.online)

[![Hugging Face Spaces](https://img.shields.io/badge/🤗%20Hugging%20Face-Live%20Demo-blue?style=for-the-badge&logo=huggingface)](https://huggingface.co/spaces/tawanamohammadi/nous-hermes-chat)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](https://opensource.org/licenses/MIT)

---



##  Overview

The **AI Agent Dialogue Showcase** is an interactive web application designed to demonstrate the reasoning, multi-step task planning, and conversational capabilities of a modern Large Language Model. This project serves as a public-facing research portfolio for Tawana Mohammadi, showcasing work at the intersection of AI agents, data strategy, and human-computer interaction.

The interface is built to mimic the polished user experience of leading AI platforms like ChatGPT, providing a clean and intuitive way to explore a pre-recorded, complex dialogue with an AI agent.

## ✨ Key Features

| Feature                 | Description                                                                                                                              | Status |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | :----: |
| **ChatGPT-Style UI**    | A modern, responsive interface with a professional sidebar, message bubbles, and a clean layout.                                         |   ✅   |
| **Full Internationalization** | Seamless language switching between **English** and **Persian (فارسی)** with full RTL support.                                         |   ✅   |
| **Advanced Markdown**   | Renders code blocks, nested lists, bold text, and other markdown for structured and readable conversations.                          |   ✅   |
| **Branding & SEO**      | Fully optimized for search engines with comprehensive metadata, Open Graph tags, and JSON-LD structured data for rich search results.     |   ✅   |
| **Zero Build**          | Runs directly in the browser using modern ES modules and CDNs, requiring no complex build setup.                                        |   ✅   |

## 🛠️ Technology Stack

-   **Frontend:** [React 18](https://react.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
-   **Internationalization (i18n):** React Context API
-   **Deployment:** Hugging Face Spaces / GitHub Pages

---

## 👤 Author & Research Profile

This project is created and maintained by **Tawana Mohammadi**, an independent AI researcher, data strategist, and educator.

| Profile                               | Link                                                                                                 |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **🌐 Personal Website**               | [tawana.online](https://tawana.online)                                                                 |
| **ORCID**                             | [0009-0005-6825-6728](https://orcid.org/0009-0005-6825-6728)                                          |
| **Google Scholar**                    | [View Profile](https://scholar.google.com/citations?user=VP8O0a4AAAAJ)                                |
| **GitHub**                            | [@tawanamohammadi](https://github.com/tawanamohammadi)                                                 |
| **Web of Science**                    | [View Profile](https://www.webofscience.com/wos/author/record/ORI-6601-2025)                           |
| **Zenodo**                            | [Research Collection](https://zenodo.org/search?page=1&size=20&q=creator%3ATawana%20Mohammadi)         |
| **Medium (AI Ethics)**                | [@tawanamohammadi](https://tawanamohammadi.medium.com/)                                                |

---

## 🚀 Deploy on GitHub Pages

This application is optimized for a simple, no-build deployment on GitHub Pages.

### Step 1: Create a GitHub Repository

Create a new **public** repository on your GitHub account (e.g., `ai-chat-showcase`).

### Step 2: Upload Project Files

Upload all the project files and folders to your new GitHub repository. The structure must be preserved.

```
/
├── components/
├── App.tsx
├── index.html
├── index.tsx
├── ... (and all other files)
```

### Step 3: Configure GitHub Pages

1.  In your repository, go to the **Settings** tab.
2.  In the left sidebar, select **Pages**.
3.  Under "Build and deployment", set the **Source** to **Deploy from a branch**.
4.  Set the **Branch** to `main` and the folder to `/(root)`.
5.  Click **Save**.

Your project will be deployed in a few minutes and available at `https://<your-username>.github.io/<your-repo-name>/`.

**Important:** The `index.html` file has been configured with a relative path (`./index.tsx`) to the main script, which is essential for it to work correctly on GitHub Pages.

### How to Run Locally

To test the application on your local machine, you can use a simple live server.
1.  If you use VS Code, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2.  Right-click on `index.html` and select "Open with Live Server".

## 📜 License

This project is licensed under the **MIT License**.

---
_Keywords: Tawana Mohammadi, AI Researcher, AutoGPT, AI Agent, Research Project, LLM, Data Strategist, AI Ethics, Chatbot Showcase, React, TypeScript, Hugging Face, GitHub Pages._