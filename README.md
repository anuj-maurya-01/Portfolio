# Anuj Maurya - Interactive Portfolio Website

A premium, modern, and highly interactive developer portfolio website designed to showcase professional experience, academic foundation, certifications, and technical projects.

## 🚀 Live Showcase Features

* **Cinematic Hero Landing**: Featuring local video introduction capabilities, clean typography outlines, and sleek call-to-actions.
* **Interactive Floating Skills Canvas**: A physics-based floating node stage representing technical skills that automatically resizes and aligns dynamically on mobile and desktop viewports.
* **Work Experience Timeline**: Branded timelines for Campus Mantri @GeeksforGeeks, MNNIT Allahabad, and IBM Internships, featuring interactive verification certificate attachments.
* **Academic Foundation**: Details educational highlights from Dr. A.P.J. Abdul Kalam Technical University (B.Tech CSE) and Shri MahaPrabhu Public School, complete with institutional logo badges.
* **Interactive Project Showcase**: High-fidelity UI mockups for major projects (Employee Attrition System, CPU Scheduler, Bhagavad Gita) with direct links that launch code repositories in new tabs.
* **Integrated PDF Resume**: Direct integration with local static PDF files resolving to `Anuj_Maurya_resume.pdf` for immediate viewing/downloads.
* **Direct Messaging (Web3Forms)**: Background form submission built directly into the site using the Web3Forms API (with automatic fallback to mail clients).

## 🛠️ Technology Stack

* **Frontend Framework**: [React.js](https://react.dev/) + [Vite](https://vite.dev/) (Fast HMR)
* **Styling**: Vanilla CSS3 + Tailwind CSS
* **Animations**: [Framer Motion](https://www.framer.com/motion/) + [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
* **Contact Integration**: [Web3Forms API](https://web3forms.com/)
* **Build tool**: Vite Bundler (Oxc Compiler)

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anuj-maurya-01/portfolio.git
   ```

2. Navigate into the project folder:
   ```bash
   cd portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Build the project for production deployment:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory.

## ⚙️ Configuration Notes

### 1. Resume PDF Update
To update the downloadable resume, replace the file located at:
`src/assets/Resume/Anuj_Maurya_resume.pdf`

### 2. Contact Form Access Key
To receive messages directly to your inbox without client popups, fetch a free Access Key from [Web3Forms](https://web3forms.com/) and replace the key variable in:
`src/components/Contact.jsx` (line 24)
```javascript
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
```
*(If left as default, the form automatically falls back to drafting emails via the user's local email app).*
