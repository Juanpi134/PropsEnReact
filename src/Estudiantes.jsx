//props es un objeto de javascript
function Estudiantes(props){
    //console.log(props)
    return (
        <div className="student">
            {/* necesitamos pasarle un valor desde nuestro componente padre */}
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/* se recomienda usar operador ternario con booleanos */}
            <p>Student: {props.isisStudent ? "Yes" : "No"}</p>
        </div>
    )
}

//esto cuando lo imprimo por pantalla devuelve un objeto

export default Estudiantes