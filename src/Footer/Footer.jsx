import logoImage from "../assets/logo.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import pinterest from "../assets/pinterest.svg";

const Footer = () => {
    return (
        <div className="bg-[#171717] flex flex-col p-24 gap-8 justify-center">
            <div className="flex justify-between  ">
                <img src={logoImage} alt="logoImage" />
                <ul className="flex text-white text-[20px] font-semibold gap-10">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Attorneys</li>
                    </a>
                    <a href="#">
                        <li>Practice Areas</li>
                    </a>
                    <a href="#">
                        <li>About Us</li>
                    </a>
                </ul>
                <div className="flex gap-5">
                    <a href="#">
                        <img src={insta} alt="instalogo" />
                    </a>
                    <a href="#">
                        <img src={fb} alt="facebooklogo" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="tweeterLogo" />
                    </a>
                    <a href="#">
                        <img src={pinterest} alt="pentrestlogo" />
                    </a>
                </div>
            </div>
            <div className="text-center flex justify-center text-white items-center gap-10 font-semibold opacity-90">
                <h3>© 2024 Acme. All right reserved.</h3>
                <h3> Privacy Policy</h3>
                <h3>Terms of Service</h3>
            </div>
        </div>
    );
};

export default Footer;