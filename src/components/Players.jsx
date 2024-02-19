import playerImg from "../assets/players/fc24-hero-md-landing-page-reveal-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"
import ronaldoImg from "../assets/players/ronaldo.jpg"
import neymarImg from "../assets/players/neymar.jpg"
import messiImg from "../assets/players/messi.jpg"

const Players = () => {
    return (
        <div className="h-screen bg-cover" style={{backgroundImage: `url(${playerImg})` }}>

            <div className="text-white text-center flex  justify-evenly pt-[120px]">

            <div className=" w-fit bg-slate-500 rounded-[10px] flex flex-col gap-2">
                <img className="w-[240px] h-[300px] rounded-[10px]" src={neymarImg} ></img>
                <h2>Neymar da silva</h2>
                <h3>Postion: winger</h3>
                <h3>Nationality: Brazil</h3>
                <h3>Club: Paris Saint germain</h3>
                <h3>SF : Right</h3>
                <p>Versatile and Tricky</p>
            </div>
            
            <div className="flex flex-col bg-slate-500 rounded-[10px] gap-2">
                <img className="w-[240px] h-[300px] rounded-[10px]" src={ronaldoImg} ></img>
                <h2>Cristiano Ronaldo</h2>
                <h3>Postion: Striker</h3>
                <h3>Nationality: Portugal</h3>
                <h3>Club: Al Nassir</h3>
                <h3>SF : Right</h3> 
                <p>Athletic and Dangerous</p>
            </div>
            
            <div className="flex flex-col bg-slate-500 rounded-[10px] gap-2">
                <img className="w-[240px] h-[300px] rounded-[10px]" src={messiImg} ></img>
                <h2>Lionel Messi</h2>
                <h3>Postion: Left Winger</h3>
                <h3>Nationality: Argentina</h3>
                <h3>Club: Inter Miami</h3>
                <h3>SF : Left</h3> 
                <p>Feared and Magical</p>
            </div>
                
            </div>
        </div>
    )
}

export default Players
