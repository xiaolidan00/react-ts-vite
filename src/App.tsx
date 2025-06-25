import menus from "./config/menus";
import styles from "./App.module.css";
import {Outlet, useNavigate, useLocation} from "react-router";
import {Suspense, useCallback, useEffect, useState, type MouseEvent} from "react";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(0);
  const onClickItem = useCallback((ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const index = Number(target.dataset.index);
    setActive(index);
    const menuItem = menus[index];
    navigate(menuItem.path);
  }, []);
  useEffect(() => {
    // console.log("🚀 ~ App.tsx ~ App ~ location:", location);
    const p = location.pathname;
    const index = menus.findIndex((it) => it.path === p);
    setActive(index);
  }, [location]);

  return (
    <main className={styles.container}>
      <nav className={styles["left-nav"]}>
        {menus.map((it, i) => (
          <div key={it.label} className={active === i ? styles.active : ""} onClick={onClickItem} data-index={i}>
            {it.label}
          </div>
        ))}
      </nav>
      <section className={styles["right-content"]}>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet></Outlet>
        </Suspense>
      </section>
    </main>
  );
};
export default App;
