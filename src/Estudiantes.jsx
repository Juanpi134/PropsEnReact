//props es un objeto de javascript
function Estudiantes(props){
    //console.log(props)
    return (
        <div>
            {/* necesitamos pasarle un valor desde nuestro componente padre */}
            <p>Name: {props.name}</p>
        </div>
    )
}

//esto cuando lo imprimo por pantalla devuelve un objeto

export default Estudiantes