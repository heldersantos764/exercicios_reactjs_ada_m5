import Counter from "./components/Counter";
import Card from "./components/Card";
import CounterStep from "./components/CounterStep";
import FormNameAge from "./components/FormNameAge";
import DynamicList from "./components/DynamicList";
import Tabs from "./components/Tabs";
import FetchData from "./components/FetchData";
import TitleSection from "./components/TitleSection";
import Timer from "./components/Timer";
import FocusInput from "./components/FocusInput";
import CounterWithRef from "./components/CounterWithRef";
import MeasureElement from "./components/MeasureElement";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <TitleSection title="Lista de exercícios: Hook useState"/>
      <Card title="Questão 01">
        <Counter />
      </Card>

      <Card title="Questão 02">
        <CounterStep step={2} />
        <CounterStep step={5} />
      </Card>

      <Card title="Questão 03">
        <FormNameAge />
      </Card>

      <Card title="Questão 04">
        <DynamicList />
      </Card>

      <Card title="Questão 05">
        <Tabs />
      </Card>

      <TitleSection title="Lista de exercícios: Hook useEffect"/>

      <Card title="Questão 01 e 02">
        <FetchData />
      </Card>

      <Card title="Questão 03">
        <Timer/>
      </Card>

      <TitleSection title="Lista de exercícios: Hook useRef"/>

      <Card title="Questão 01">
        <FocusInput/>
      </Card>

      <Card title="Questão 02">
        <CounterWithRef/>
      </Card>

      <Card title="Questão 03">
        <MeasureElement/>
      </Card>

    </div>
  );
}

export default App;
