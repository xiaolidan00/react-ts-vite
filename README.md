# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## class 与 hooks 生命周期对应

| Class                    | hooks                       |
| ------------------------ | --------------------------- |
| constructor              | useState                    |
| getDerivedStateFromProps | useState 里面的 update 函数 |
| render                   | 函数本身                    |
| componentDidMount        | useEffect                   |
| componentDidUpdate       | useEffect                   |
| componentWillUnmount     | useEffect 里返回的函数      |
| componentDidCatch        | 无                          |
| getDerivedStateFromError | 无                          |
| getSnapshotBeforeUpdate  | 无                          |
| shouldComponentUpdate    | 无                          |
