import Button from './components/common/Button'
import Label from './components/common/Label';
import { useState } from 'react'
function App() {

  const [contador, setContador] = useState(0);

  const operaciones = (value, op) => {
    if (op == "sumar") {
      setContador(value + 1)
    } else {
      setContador(value - 1)
    }
  }

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <Button title="+" variant={"btn-primary"} handle={() => { operaciones(contador, "sumar") }} />
      <Label value={contador} />
      <Button title="-" variant={"btn-danger"} handle={() => { setContador(contador - 1) }} />
      <button className="btn-warning" onClick={() => { setContador(contador * 2) }}>*2</button>
    </div>
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