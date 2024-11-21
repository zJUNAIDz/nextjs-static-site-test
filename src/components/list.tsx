import styles from "./list.module.css"

export const List = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Lorem ipsum dolor sit amet</li>
      <li className={styles.item}>Lorem ipsum dolor sit amet</li>
      <li className={styles.item}>Lorem ipsum dolor sit amet</li>
      <li className={styles.item}>Lorem ipsum dolor sit amet</li>
      </ul>
  )
}