# Prasanna — Full-Stack Developer Portfolio

Creative animated dark portfolio built with React + Vite. It uses resume-backed content and avoids publishing a phone number or confidential internship information.

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. In the project directory run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite (usually http://localhost:5173).

For a production build:
```bash
npm run build
npm run preview
```

## Resume download
Put your current PDF resume at `public/resume.pdf` so the Resume links work. The original resume is not bundled automatically.

## Notes
- Email, GitHub, and LinkedIn are filled from your resume/details.
- Phone number is not displayed.
- Project descriptions are based on the uploaded resume; no public repository/demo links are fabricated.
- People Intel is described at a high level without internal links or confidential details.
- Skills are taken from the resume.
- The portfolio does not claim live demos or public repositories because none were supplied.

## Deploy
Deploy to Vercel or Netlify with build command `npm run build` and output folder `dist`.
