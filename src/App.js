import './App.css';
import ExpenseCard from './components/ExpenseCard';
function App() {

  const expenses = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      city: "Gwenborough"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "hildegard.org",
      city: "Wisokyburgh",
    },
    {
      id: 2,
      name: "Clementine Bauch",
      username: "Antonette",
      city: "McKenziehaven",
    }
  ]

  return (
    <div>
      <ExpenseCard name={expenses[0].name}
        username={expenses[0].username}
        city={expenses[0].city} />
      <ExpenseCard name={expenses[1].name}
        username={expenses[1].username}
        city={expenses[1].city} />
      <ExpenseCard name={expenses[2].name}
        username={expenses[2].username}
        city={expenses[2].city} />
    </div>
  );
}

export default App;
