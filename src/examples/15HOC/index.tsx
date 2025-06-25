import {type ComponentType} from "react";
import styles from "./index.module.scss";
interface WithThemeProps {
  theme: string;
}
function useTheme() {
  return {
    theme: "light"
  };
}
function withTheme<T extends WithThemeProps = WithThemeProps>(WrappedComponent: ComponentType<T>) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
    // Fetch the props you want to inject. This could be done with context instead.
    const themeProps = useTheme();

    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...themeProps} {...(props as T)} />;
  };

  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
}
interface ButtonProps {
  theme: string;
  type: string;
}
function MyButton(prop: ButtonProps) {
  return <button className={styles.button + " " + styles[prop.type]}>{prop.theme}</button>;
}
const ThemeButton = withTheme<ButtonProps>(MyButton);
const HocComp = () => {
  return <ThemeButton type="primary"></ThemeButton>;
};
export default HocComp;
