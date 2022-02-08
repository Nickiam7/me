import styles from './Card.module.css'
const Card = ({ header, children, footer, blue }) => {
  return (
    <div className={[styles.card, blue ? styles.cardBlue : ""].join(' ')}>
      {header && (
        <div className="card__header">
          <h3>{header}</h3>
        </div>
      )}
      <div className="card__body">
        {children}
      </div>
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card
