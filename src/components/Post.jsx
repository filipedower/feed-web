import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://avatars.githubusercontent.com/u/31519661?v=4" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Filipe Almeida</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="01 de fevereiro as 22:48" dateTime="2023-02-01 22:48:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}