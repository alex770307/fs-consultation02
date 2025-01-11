import User from './Components/User'
import './App.css'

function App() {
  const name1 = 'Ivan'

  return (
   <div>
    <User firstname={name1} lastname='Petrov' age={29} username='sososo' email='mail1@gmail.com' />
    <User firstname='Inga' lastname='Ivanova' age={13} username='alalala' email='mail2@gmail.com' />
    <User firstname='Anna' lastname='Sidorova' age={33} username='hhnhnhn' email='mail3@gmail.com' />
    <User firstname='Petr' lastname='Ushanov' age={55} username='rmrmrr' email='mail4@gmail.com' />
   </div>
  )
}

export default App
