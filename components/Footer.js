import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/139834/120x80/d5d17b4f00/storyblock-website-music.png"
            alt="Musica Logo"
            className=""
          />
        </div>
        <p>Hope we could help you!</p>
      </div>
    </footer>



  )
}

export default Footer
