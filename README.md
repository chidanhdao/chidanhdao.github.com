# Academic Website Starter

A lightweight academic website inspired by the AcademicPages layout. It uses plain HTML, CSS, and JavaScript, so GitHub Pages can publish it without Jekyll, Ruby, or a build step.

## 1. Edit your information

Open `assets/js/config.js` and replace:

- Your name
- Position and university
- Location and email
- Google Scholar, GitHub, and LinkedIn links
- Introductory biography

## 2. Replace the profile image

Add your photo to `assets/images/`, then update `profileImage` in `assets/js/config.js`.

Example:

```js
profileImage: "assets/images/my-photo.jpg",
```

A square image works best.

## 3. Add your CV

Put your CV in `files/` and name it `cv.pdf`, or update `cvFile` in `assets/js/config.js`.

## 4. Edit page content

- `index.html`: homepage biography and research summary
- `research.html`: working papers, publications, and works in progress
- `teaching.html`: teaching experience and awards
- `contact.html`: contact page
- `cv.html`: CV link

## 5. Publish with GitHub Pages

1. Create a GitHub account.
2. Create a public repository named `YOUR-USERNAME.github.io`.
3. Upload all files in this folder to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then save.
7. Your site will be available at `https://YOUR-USERNAME.github.io/` after GitHub finishes publishing it.

## Optional custom domain

Add a custom domain later in **Settings → Pages → Custom domain**.

## Local preview

You can double-click `index.html`, or run a local server from this directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
