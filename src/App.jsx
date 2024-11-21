import './App.css';
import ActiveLineEditor from './components/ActiveLineEditor';
import LanguageSelectorEditor from './components/LanguageSelectorEditor';
import SublimeKeymapEditor from './components/SublimeKeymapEditor';
import JavaScriptEditor from './components/JavaScriptEditor';
import PythonEditor from './components/Theming and Custom Modes';
import LintingEditor from './components/CodeValidation';
import MarkdownEditor from './components/MarkdownEditor';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <div>
      <CodeEditor />
      <MarkdownEditor/>
      <LintingEditor/>
      <PythonEditor/>
      <JavaScriptEditor/>
      <SublimeKeymapEditor/>
      <LanguageSelectorEditor/>
      <ActiveLineEditor/>
    </div>
  );
}

export default App;
