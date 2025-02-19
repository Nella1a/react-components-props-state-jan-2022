import './App.css';
import ClassComponentsIntoFunctionComponents from './ClassComponentsIntoFunctionComponents';
import ControlledComponentsAndForms from './ControlledComponentsAndForms';
import LiftingStateUpAndConditionalRendering from './LiftingStateUpAndConditionalRendering';
import MappingOverArrays from './MappingOverArrays';
import PropsDestructuring from './PropsDestructuring';
import PropsExample from './PropsExample';
import StateExampleCounter from './StateExampleCounter';
import StateExampleForm from './StateExampleForm';
import StateNotSynchronous from './StateNotSynchronous';
import StylePropVsCSSmodulesFilesVsCSSinJS from './StylePropVsCSSmodulesFilesVsCSSinJS';

function App() {
  const phone = 1231232;
  return (
    <div className="App">
      <h1>Props Example</h1>
      <PropsExample />

      <h1>State Example (simple)</h1>
      <StateExampleCounter />

      <h1>State Example (more complex)</h1>
      <StateExampleForm />
      <h1>State Not Synchronous</h1>
      <StateNotSynchronous />
      <h1>Props destructuring</h1>
      <PropsDestructuring
        name="Ana Sofia"
        color="purple"
        number={phone}
        object={{ toy: 'car', game: 'domino' }}
      />
      <h1>Mapping over arrays</h1>
      <MappingOverArrays />

      <h1>Lifting state up and conditional rendering</h1>
      <LiftingStateUpAndConditionalRendering />

      <h1>Controlled Components and forms</h1>
      <ControlledComponentsAndForms />

      <h1>Class Components into Function Components</h1>
      <ClassComponentsIntoFunctionComponents user={undefined} />

      <h1>Style prop vs CSS modules files vs CSS-in-JS</h1>
      <StylePropVsCSSmodulesFilesVsCSSinJS />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
