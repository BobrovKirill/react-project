import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import './styles/App.css';
import Header from './Components/Header';

const menu = [
  {id: 1, name: "Главная", link: "/"},
  {id: 2, name: "О нас", link: "about"},
  {id: 3, name: "Дизайны", link: "design"},
  {id: 4, name: "Кухни", link: "kitchen"},
  {id: 5, name: "Контакты", link: "contact"},
]

function App() {
  return (
    <div className="App test">
      <Header items={menu} />
    </div>
  );
}

export default App;
