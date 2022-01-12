import React, {useEffect,useState}from 'react'

const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect(() => {
        const mouseMove = (e) => {
            const coords  = {x:e.clientX, y:e.clientY}
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Componente desmontado!');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
         <h1>Eres genial!</h1>   
         <p>
             {`Coordenadas del mouse: X:${x}, Y:${y}`}
         </p>
        </>
    )
}

export default Message
