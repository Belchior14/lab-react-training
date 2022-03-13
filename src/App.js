import './App.css';
import { IdCard } from './components/IdCard/Idcard';
import { Greetings } from './components/Greetings/Greetings';

const idCards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: '1992-07-14',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: '1988-05-11',
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      {idCards.map((cards) => {
        return (
          <IdCard
            firstName={cards.firstName}
            lastName={cards.lastName}
            gender={cards.gender}
            height={cards.height}
            birth={cards.birth}
            picture={cards.picture}
          />
        );
      })}
      <div >
      <Greetings lang="de">Muller</Greetings>
      <Greetings lang="fr">Benzema</Greetings>
      
      </div>

    </div>
  );
}

export default App;
