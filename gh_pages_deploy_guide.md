Here is a complete step-by-step guide to host a React app on GitHub Pages with a custom domain and free SSL, paying only for the domain registration:

***

## Step 1: Prepare React App for GitHub Pages Hosting

1. In your React project, open `package.json`.
2. Add a `homepage` field with the URL of your GitHub Pages site:
   - For a user/organization site: `"homepage": "https://username.github.io/"`
   - For a project site: `"homepage": "https://username.github.io/repo-name/"`
3. Install the `gh-pages` package to handle deployment:

   ```
   npm install --save gh-pages
   ```

4. Add these scripts in your `package.json` under `scripts`:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

5. Deploy your app to GitHub Pages:

   ```
   npm run deploy
   ```

This will build your React app and push the static files to the `gh-pages` branch of your GitHub repository.

***

## Step 2: Enable GitHub Pages for the Repository

1. On GitHub, go to your repository.
2. Click on **Settings** → **Pages**.
3. Under **Source**, select the `gh-pages` branch (or your chosen branch) and save.
4. Note the URL given (e.g., `https://username.github.io/repo-name/`).

***

## Step 3: Purchase and Prepare Your Custom Domain

1. Buy a custom domain from any domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
2. Access the domain's DNS settings on the registrar’s dashboard.

***

## Step 4: Configure DNS for Your Custom Domain

1. Create **four A records** pointing your root domain (`@`) to GitHub’s IP addresses:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. Create a **CNAME record** for the `www` subdomain pointing to your GitHub Pages domain:

   ```
   www  CNAME  username.github.io
   ```

***

## Step 5: Connect Custom Domain in GitHub Repository

1. In your repository, go to **Settings** → **Pages**.
2. Under **Custom domain**, enter your custom domain (e.g., `www.example.com` or `example.com`) and save.
3. GitHub will create a `CNAME` file in your repository root branch with this domain name.

***

## Step 6: Enable HTTPS with Free SSL

1. After GitHub verifies your custom domain DNS settings, it will automatically provision a **free SSL certificate** via Let’s Encrypt.
2. In **Settings** → **Pages**, check the option to **Enforce HTTPS**.
3. Wait for DNS to fully propagate; this may take up to 24 hours.

***

## Step 7: Access Your Site

- Visit your custom domain (e.g., `https://www.example.com`).
- The site is served securely with HTTPS and hosted for free on GitHub Pages.
- Only the domain registration costs money.

***

### Additional Notes

- For project sites, ensure your `homepage` field and CNAME are correctly set to handle GitHub Pages subpath URLs.
- You can verify DNS propagation using tools like `dig`, online DNS checkers, or your command line.
- Use HTTPS exclusively to secure your site and improve SEO.

***

This workflow lets you handle the entire end-to-end hosting for free on GitHub Pages, with the only cost being the domain registration from your domain provider.[1][2][4][5][6][8]

[1](https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages)
[2](https://dev.to/sidmohanty11/how-to-add-a-custom-domain-to-github-pages-hostinger-edition-p4p)
[3](https://www.youtube.com/watch?v=rIXWUJ5U8bY)
[4](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
[5](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
[6](https://docs.github.com/articles/about-supported-custom-domains)
[7](https://www.youtube.com/watch?v=e5AwNU3Y2es)
[8](https://docs.github.com/en/pages/quickstart)