import styles from './App.module.css'
import mainPic from './assets/cat.jpg';
import Form from './components/Form';

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.catContainer}>
        <img src={mainPic} alt="Описание изображения" className={styles.appImg} />
      </div>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  )
}

export default App
