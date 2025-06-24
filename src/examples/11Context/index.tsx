import {createContext, useState, useContext} from "react";

type ThemeContextType = "light" | "dark";
const ThemeContext = createContext<ThemeContextType>("light");

type UserType = {
  username: string;
  age: number;
};
const UserContext = createContext<UserType | null>(null);

const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
const MyComponent = () => {
  const theme = useContext(ThemeContext);
  const theUser = useUser();
  return (
    <>
      <p>The current theme is {theme}.</p>
      <h1>
        User={theUser?.username},age={theUser?.age}
      </h1>
    </>
  );
};
const ContextComp = () => {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
      <button
        onClick={() => {
          setTheme((theme) => (theme === "light" ? "dark" : "light"));
        }}
      >
        changeTheme
      </button>
    </ThemeContext.Provider>
  );
};
export default ContextComp;
