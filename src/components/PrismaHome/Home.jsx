import patito from '../../assets/img/patito.jpg'


function Home(){
    return (
        <header className="preventa">
            <h2>Bienvenido Admin</h2>
            <div className='img-pre'>
                <img src={patito} alt="patito"/>
            </div>
        </header>
    )
}

export default Home;