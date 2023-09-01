import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebbok.com/reymond.adames'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/reymond_j.a'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Retro15</strong>

    </footer>
}

export default Footer