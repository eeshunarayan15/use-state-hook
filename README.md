# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
state ek data hota hai  ,react is data ka khayal rakhta ha ,jab bhi ye data change hota hai react page ko update karta hai

state koi bhi data ho sakta hai , jaise ke score =0
const [score,setScore]=useState(0);

maan lete hai aapke game mai score by default 0 se shuru hota hai and future mai wo score badhega by 10 aur apko page pe show bhi karna hai jab score badh ,to use case mein aapka score varibale ek state menin rakhna jaruri hai ,kyunki react sirf use change karta hia jo state mein hota hai