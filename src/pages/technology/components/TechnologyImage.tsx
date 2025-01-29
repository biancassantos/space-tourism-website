type TechnologyImageProps = {
  name: string
  portraitImg: string
  landscapeImg: string
}

function TechnologyImage({ name, portraitImg, landscapeImg }: TechnologyImageProps) {
  return (
    <div className="technology-img">
      <img 
      src={portraitImg} 
      alt={`Image of the ${name}`}
      className="portrait"
      />
      <img 
      src={landscapeImg} 
      alt={`Image of the ${name}`} 
      className="landscape"
      />
    </div>
  )
}

export default TechnologyImage;