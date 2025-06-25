import {useState, Component, type ReactNode, type ErrorInfo} from "react";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}
const ErrorBtn = ({value, onClick}: {value: number; onClick: () => void}) => {
  if (value > 100) {
    throw new Error("error");
  }
  return <button onClick={onClick}>value={value}</button>;
};
const ErrorBoundaryComp = () => {
  const [value, setValue] = useState(100);
  return (
    <ErrorBoundary>
      <ErrorBtn
        value={value}
        onClick={() => {
          setValue(2222);
        }}
      ></ErrorBtn>
    </ErrorBoundary>
  );
};
export default ErrorBoundaryComp;
