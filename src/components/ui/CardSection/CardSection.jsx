import './CardSection.css'

const CardSection = ({ color, title, value, icons, bgColor }) => {

  const cardStyle = {
    '--color-style': color || 'rgba(254, 94, 0, 1)',
    '--color-style-opacity': bgColor || 'rgba(254, 94, 0, .1)'
  }

  return (
    <>
      <div className='wrapper card'>
        <div className='flex-card' style={cardStyle}>
          <div>
            <h1>{ title }</h1>
            <p>{ value }</p>
          </div>
          <div className='icon'>{ icons }</div>
        </div>
      </div>
    </>
  )
}

export default CardSection
