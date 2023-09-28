import { useLayoutEffect, useRef, useState } from "react"

export const RickandMortyPJ = ({ name,species, image}) => {
  
  const pRef = useRef()
  const [boxSize, setboxSize] = useState({width: 0, height: 0})
  
  useLayoutEffect(() => {
    
    const { height, width } = pRef.current.getBoundingClientRect() 
    setboxSize({ height, width })
  }, [image])
  
  return (
    <>
      <blockquote 
        className="blockquote text"  
      >
          <img ref={pRef} src={image} alt={name} />
          <p className="mb-2">{name}</p>
          <footer className="blockquote-footer"> {species} </footer>
      </blockquote>

      <code> {JSON.stringify(boxSize) } </code>
    </>    
  )
}
