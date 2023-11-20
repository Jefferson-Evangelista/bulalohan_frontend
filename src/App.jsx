import styles from './style'



import { Navbar, Hero, Services, About, Contacts } from './components'

const App = () => (
  <main className='bg-white w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  
    <div className={`${styles.boxWidth} `}>
      <Hero />
    </div>

    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className={`${styles.boxWidth} `}>
        <Services />
      </div>
    </div>

    <div className={`${styles.boxWidth} `}>
      <About />
    </div>
    
    {/* <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className={`${styles.boxWidth} `}>
        <Events />
      </div>
    </div> */}

    <div className={`${styles.boxWidth} `}>
      <Contacts />
    </div>




  </main>
)


export default App