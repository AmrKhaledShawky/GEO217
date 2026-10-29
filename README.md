# PowerWise Campus — Website

A responsive, static website prototype based on the PowerWise Campus sustainability project. It includes:
- Project introduction and SDG 7 connection
- Practical energy-saving tips
- Interactive electricity consumption calculator
- Demo student survey (does not store or transmit responses)
- Responsive navigation for mobile devices

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser.

No build tools or package installation are required. You can also run a local server from this folder:
- Python: `python -m http.server 8000`
- Then open `http://localhost:8000`

## Publish with GitHub Pages (free)
1. Create or sign in to a GitHub account at https://github.com.
2. Create a **new public repository**, for example `powerwise-campus`.
3. Extract this ZIP on your computer.
4. Upload the contents of the `PowerWise_Campus_Website` folder to the repository root. Make sure `index.html`, `styles.css`, and `script.js` are at the root, not nested inside another folder.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Choose branch **main** and folder **/(root)**, then click **Save**.
8. Wait a minute or two and refresh the Pages section. GitHub will show the published URL, usually `https://YOUR-USERNAME.github.io/powerwise-campus/`.

If the URL does not appear, check the **Actions** tab for deployment errors and confirm that `index.html` is at the repository root.

## Publish with Netlify (alternative)
1. Open https://app.netlify.com/drop.
2. Extract the ZIP first.
3. Drag and drop the extracted website folder into the Netlify Drop area.
4. Netlify will deploy the static website and show a public URL. You can configure a custom domain in the site settings.

## Important notes before submitting
- The calculator estimates energy use using: `kWh = (watts / 1000) × hours per day × days`.
- The calculator's reduced-use scenario is a hypothetical estimate, not verified electricity savings.
- The survey is currently a front-end demo. It does not save answers or send them to a database. To collect real responses, create a Google Form and replace the survey section with a link/embed, or connect a backend.
- The website does not read live campus meters and does not claim to measure actual university consumption.
- Replace/add team, course, instructor, or university details if required by your final submission.
