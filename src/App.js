import { Header } from "./components/Header";
import { Count } from "./components/Count";

export const App = () => {
  return (
    <div className="App">
      <Header title="Word Counter" subTitle="Paste or type your text here" />
      <Count />
    </div>
  );
};
