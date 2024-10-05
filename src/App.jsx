import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './component/User'
import { dataAdmin, dataNotYet, dataUser } from './component/Data'

function App() {
  return (
    <div className="container">
      <h1 className="text-uppercase my-5 text-center">
        Demo Some image screen project Lottery Tickets
      </h1>
      <User
        title="Main Functions for user not yet register"
        data={dataNotYet}
        className="mb-5"
      />

      <User
        title="Main Function for user has roles user"
        data={dataUser}
        className="mb-5"
      />

      <User title="Main Function for admin" data={dataAdmin} />
    </div>
  )
}

export default App
