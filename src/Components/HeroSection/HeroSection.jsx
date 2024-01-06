import NavBar from "../NavBar/NavBar";
import Hero from "../../assets/Hero.png";


const HeroSection = () => {
    return (
        <div className="h-[990px] bg-[#111111] p-[80px] text-white">
            <NavBar />
            <div className="flex mt-10 justify-center gap-[200px] ">

                <div className="w-[50%] mt-24 ml-24 flex flex-col gap-8">
                    <h1 className="text-[66px]">
                        You don't have to <br />
                        <span className="font-700">Fight them Alone.</span>
                    </h1>
                    <p className="text-[#585858]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                        curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                        eget, hac massa gravida arcu interdum proin curae.
                    </p>

                    <div className="bg-[#282828] rounded-full p-1 w-[80%] relative">
                        <input
                            type="email"
                            className="bg-[#282828] rounded-full  w-[77%] relative overflow-hidden translate-x-0.25"
                            placeholder="Enter your email address"
                        />
                        <button className="bg-[#E3B748] text-black  p-4 font-semibold  rounded-full">
                            Let’s Talk
                        </button>
                    </div>

                </div>

                <div className="w-[50%]">
                    <img src={Hero} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;