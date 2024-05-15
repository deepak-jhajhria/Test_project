import NavBar from "./NavBar"

const HeroSec = () => {
    return (
        <header className="bg-bgHero min-h-[594px] sm:min-h-[650px] lg:min-h-[810px] bg-center bg-cover bg-no-repeat">
            <NavBar />
            <div className="mx-auto mt-28 sm:mt-[200px]">
                <h1 className="text-5xl font-bold text-center text-white font-Geometric xl:text-9xl lg:text-8xl sm:text-6xl">Professional <br /><span className="text-6xl xl:text-10xl text-orangeRed lg:text-9xl md:text-8xl">Aerial</span> Solutions</h1>
            </div>
        </header>
    )
}

export default HeroSec
