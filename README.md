# Weather App

A weather application built with Astro, TypeScript, and SCSS.  
Search for cities using PlaceKit autocomplete, save favorites, and view real-time weather data from Open-Meteo.

[live URL](https://summer-weather.netlify.app/)

## 🚀 Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Set up environment variables

```sh
cp .env.example .env
```

Open `.env` and add your PlaceKit API key:

```
PUBLIC_PLACEKIT_API_KEY=your_api_key_here
```

You can get your API key from [placekit.io](https://placekit.io).

> Open-Meteo is a public API and requires no key.

### 3. Start the dev server

```sh
npm run dev
```

Open `http://localhost:4321` in your browser.

---

## 🗂 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
