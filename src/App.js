import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t('heading')}</h1>
        <h1>{t('main.greeting', {name: 'Foo Bar'})}</h1>
        <h2>{t('main.description')}</h2>
      </header>
    </div>
  );
}

export default App;