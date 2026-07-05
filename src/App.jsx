import Estudiantes from './Estudiantes'

function App(){
  return <div>
    <Estudiantes name="Juan" age="20" isStudent={true}/>
    <Estudiantes name="Alberto" age={50} isStudent={false}/>
    <Estudiantes name="Raul" age={30} isStudent={true}/>
  </div>
}

export default App
