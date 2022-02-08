import styles from './CardGrid.module.css'

const Card = ({ children, gridCount, classes, minMax }) => {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${gridCount}, minmax(${minMax}, 1fr))` }}
      className={`${styles.cardgrid} ${classes ? classes : ''}`.trim()}
    >
      {children}
    </div>
  )
}

export default Card
