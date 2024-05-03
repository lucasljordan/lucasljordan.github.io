# Lucas L Jordan's personal website

## Repository 🗃️

**[lucasljordan/lucasljordan.github.io | GitHub](https://github.com/lucasljordan/lucasljordan.github.io)**

## Project Structure 📂

```text
/
├── public/
│   ├── fonts/
│   ├── images/
|   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AboutMe.astro
│   │   ├── Button.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── HTMLHeader.astro  # HTML meta tags etc.
│   │   └── Navbar.astro  # Header navigation menu.
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   |   ├── about.astro
│   |   ├── ambrose.astro
│   |   └── index.astro
|   └── styles/
|       ├── styles.css
|       └── themify-icons.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Getting started 🏁

Run the following commands to get the project up and running:

```sh
yarn install
```

```sh
yarn run dev
```

## Build for production 🏗️

Run the following commands to build the project for production:

```sh
yarn install
```

```sh
yarn run build
```

## Commands 🧞

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn`                     | Installs dependencies                            |
| `yarn run dev`             | Starts local dev server at `localhost:4321`      |
| `yarn run build`           | Build your production site to `./dist/`          |
| `yarn run preview`         | Preview your build locally, before deploying     |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more? 👀

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
