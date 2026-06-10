# Sana Hameed - Front-End Developer Portfolio 
 
A modern, responsive portfolio website built with React 18, TypeScript, and Vite. Features a functional contact form, glassmorphism design, and smooth animations. 
 
Live Demo: [View Portfolio](https://sana-portfolio-weld.vercel.app/) 
 
--- 
 
## Tech Stack 
 
- React 18 
- TypeScript 
- Vite 
- Tailwind CSS 
- Framer Motion 
- EmailJS 
- Node.js 
- Express 
 
--- 
 
## Features 
 
- Responsive design (Mobile and Desktop) 
- Glassmorphism UI effects 
- Smooth scroll animations 
- Contact form with EmailJS 
- Project showcase with images 
- Skills section with progress bars 
- Social media links 
- Back to top button 
 
--- 
 
## Project Structure 
 
``` 
Sana-Portfolio/ 
��� backend/ 
�   ��� src/ 
�   �   ��� index.js 
�   ��� .env 
�   ��� package.json 
��� frontend/ 
�   ��� public/ 
�   �   ��� images/ 
�   �       ��� getitmart.png 
�   �       ��� mathlings.png 
�   �       ��� nexcent.png 
�   �       ��� pennywise.png 
�   �       ��� Student Management System.png 
�   �       ��� logo.jpg 
�   �       ��� img4.png 
�   �       ��� Code typing-cuate.svg 
�   ��� src/ 
�   �   ��� app/ 
�   �   �   ��� components/ 
�   �   �   �   ��� ui/ 
�   �   �   �   ��� figma/ 
�   �   �   �   ��� About.tsx 
�   �   �   �   ��� Contact.tsx 
�   �   �   �   ��� Hero.tsx 
�   �   �   �   ��� Navigation.tsx 
�   �   �   �   ��� Projects.tsx 
�   �   �   �   ��� Skills.tsx 
�   �   �   ��� App.tsx 
�   �   ��� styles/ 
�   �   ��� main.tsx 
�   ��� index.html 
�   ��� package.json 
��� .gitignore 
``` 
 
--- 
 
## Installation 
 
1. Clone the repository 
   ``` 
   git clone https://github.com/SanaHameed2/Sana-portfolio.git 
   cd Sana-portfolio 
   ``` 
 
2. Install frontend dependencies 
   ``` 
   cd frontend 
   npm install 
   ``` 
 
3. Install backend dependencies (optional) 
   ``` 
   cd ../backend 
   npm install 
   ``` 
 
4. Create environment file 
   ``` 
   PORT=5000 
   EMAIL_USER=your-email@gmail.com 
   EMAIL_PASS=your-app-password 
   ``` 
 
5. Run development servers 
   ``` 
   ``` 
 
6. Open browser at `http://localhost:5173` 
 
--- 
 
## Contact Form Setup (EmailJS) 
 
1. Create account at emailjs.com 
2. Add Gmail service 
3. Create email template with variables: `{{name}}`, `{{email}}`, `{{message}}` 
4. Copy Service ID, Template ID, and Public Key 
5. Update `Contact.tsx` with your IDs 
 
--- 
 
## Building for Production 
 
Frontend: 
``` 
cd frontend 
npm run build 
``` 
The build output will be in the `frontend/dist` folder. 
 
--- 
 
## Deployment 
 
