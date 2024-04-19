# NEW VERSION React 19 + Javascript + Vite

To install the new version I first created a new project with 'npx create-vite .', after give me a error that could be a network issue, a temporary problem with the npm registry, or an issue with your local npm cache I used 'npm cache clean --force' ro Clear npm Cache, after retry the installation but only with the 'npm install' I check my npm registry with 'curl -i https://registry.npmjs.org' and update npm 'npm install -g npm@latest' after check this that I try install the dependency with the new versions 'npm i react@canary react-dom@canary' and to check you can see the package.json with react 19.0.0-canary something like this and finally 'npm run dev'.

The base of this it was with the course: 'O React JS 19 está incrível! Conheça todos os novos recursos do React - Matheus Battisti' with reference below.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
