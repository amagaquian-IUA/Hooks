import Button from './components/common/Button'
import Label from './components/common/Label';
import { useState, useEffect } from 'react'
function App() {

  const [contador, setContador] = useState(0);
  const [users, setUsers] = useState([])


  const getUsers = () => {

    /* Hacemos un fetch al back o a la api para la obtención de datos
     El objeto de abajo simula la respuesta
    */
    const userData = [
      { id: 1123, name: "Juan", age: 21 },
      { id: 23423, name: "Maria", age: 22 },
      { id: 123123123, name: "Pedro", age: 25 }
    ]

    setUsers(userData)
  }

  useEffect(() => {
    if (contador < 0) {
      setContador(0)
      alert("No se permiten numeros negativos :(")
    }

    console.log("Entro al useEffect")
  }, [contador])


  useEffect(() => {

    getUsers()
  }, [])

  const operaciones = (value, op) => {
    if (op == "sumar") {
      setContador(value + 1)
    } else {
      setContador(value - 1)
    }
  }

  return (
    <>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Button title="+" variant={"btn-primary"} handle={() => { operaciones(contador, "sumar") }} />
        <Label value={contador} />
        <Button title="-" variant={"btn-danger"} handle={() => { setContador(contador - 1) }} />
        <button className="btn-warning" onClick={() => { setContador(contador * 2) }}>*2</button>
      </div>

      <div>
        <ul>
          {
            users.length ? users.map((user, index) => (
              <li key={index}>{index} - {user.id} - {user.name} - {user.age} años</li>
            )) : <p>No hay datos todavia</p>
          }
        </ul>
      </div>
    </>
  )
}

export default App

/*
Hook -> Gancho 

useState

useEffect

useContext

getElementById("sumar").addEventListener("click",()=>{
 //obtener el valor actual del contador
 //y sumarle 1
 //actualizar el valor de contador
})

getElementById("restar").addEventListener("click",()=>{
 //obtener el valor actual del contador
 //y restarle 1
 //actualizar el valor de contador
})
*/