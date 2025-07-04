import React from 'react'
import styles from './Home.module.css'


const Home = () => {
  return (
   <div className={styles.home}> 
  <svg viewBox="0 0 1000 200" className={styles.wavySubtitle}>
    <path
      id="wavyPath1"
      d="M 0 100 Q 250 50 500 100 T 1000 100"
      fill="transparent"
    />
    <text className={styles.svgTextOnPath}>
      <textPath href="#wavyPath1" startOffset="50%">
        La vita è quella cosa che inizia dopo il caffè!
           <animate
        attributeName="startOffset"
        from="0%"
        to="100%"
        dur="15s"
        repeatCount="indefinite"
      /> 
      </textPath>
    </text>
  </svg>

  <svg viewBox="0 0 1000 200" className={styles.wavySubtitle}>
    <path
      id="wavyPath2"
      d="M 0 100 Q 250 50 500 100 T 1000 100"
      fill="transparent"
    />
    <text className={styles.svgTextOnPath}>
      <textPath href="#wavyPath2" startOffset="50%">
        Los mejores productos los vas a encontrar aquí.
          <animate
        attributeName="startOffset"
        from="100%"
        to="0%"
        dur="15s"
        repeatCount="indefinite"
      />
      </textPath>
    </text>
  </svg>
</div>

  )
}

export default Home