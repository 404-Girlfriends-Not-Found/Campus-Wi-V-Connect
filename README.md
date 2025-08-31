# Campus-Wi-V-Connect

2 Friends just having fun trying to create job opportunities for students

---

## Project Structure

gitu45b/                      # Root of your GitHub repo  
├── public/                  # Static assets, e.g. images  
│   └── ...  
├── src/  
│   ├── assets/              # Images, fonts, static files for Vue components  
│   ├── components/          # Reusable Vue components  
│   ├── views/               # Page-level components (views)  
│   ├── animations/          # GSAP animation scripts or timelines  
│   ├── services/            # Business logic, API utilities, etc.  
│   ├── utils/               # Helper functions  
│   ├── App.vue              # Root component  
│   ├── main.js / main.ts    # Application entry point  
│   ├── router/              # Vue Router setup (if applicable)  
│   └── store/               # Vuex or Pinia store setup  
├── tests/                   # Unit tests (optional but helpful)  
├── package.json             # Project dependencies & scripts  
├── vite.config.js           # Vite config (if using Vite)  
└── README.md                # Project overview & documentation  

---

## Layers and Description

| Layer      | Description                                       |
|------------|-------------------------------------------------|
| UI Layer   | Built with Vue components and GSAP animations   |
| Routing    | Handles navigation using Vue Router              |
| State      | Manages global data using Pinia/Vuex (optional) |
| Build Tool | Uses Vite (or Webpack) for fast local dev and optimized builds |
| Assets     | Static files like images and fonts                |
| Logic      | Client-side services and utilities only           |

---

## About Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite.  
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
