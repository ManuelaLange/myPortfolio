import styles from "./StyleCube.module.css"
export default function Cube(){
  const renderSmallCubes = () => {
    return Array.from({ length: 9 }).map((_, index) => (


      <div key={index} className={styles.smallCube}>
        <div className={`${styles.smallCubeFace} ${styles.front}`}></div>
        <div className={`${styles.smallCubeFace} ${styles.back}`}></div>
        <div className={`${styles.smallCubeFace} ${styles.left}`}></div>
        <div className={`${styles.smallCubeFace} ${styles.right}`}></div>
        <div className={`${styles.smallCubeFace} ${styles.top}`}></div>
        <div className={`${styles.smallCubeFace} ${styles.bottom}`}></div>
      </div>
    
    ));
  };
   
    return(
      
      <div className={styles.scene}>
        {renderSmallCubes()}
    </div>
        
    )
}