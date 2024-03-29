import BusinessLaw from "../../assets/BusinessLaw.svg";
import PartnershipLaw from "../../assets/PartnershipLaw.svg";
import RealEstateLaw from "../../assets/RealEstateLaw.svg";
import BusinessLaw2 from "../../assets/BusinessLaw2.svg";
import LandlordDisputes from "../../assets/LandlordDisputes.svg";
import ElderAbuse from "../../assets/ElderAbuse.svg";

const Section4 = () => {
    return (
        <div className="flex flex-col justify-center gap-20 pb-24">
            <h2 className="text-center text-white text-[54px] font-semibold">
                Area of Practices
            </h2>
            <div className="flex flex-wrap justify-center gap-6 ">
                {/* 1 */}
                <div className="flex items-center  gap-6">
                    <div className="relative">
                        <img src={BusinessLaw} alt="businesslaw" />
                        <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
                            BUSINESS LAW
                        </h3>
                    </div>
                    <div className="relative ">
                        <img src={PartnershipLaw} alt="partnershiplaw" />
                        <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
                            Partnership LAW
                        </h3>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex items-center  gap-6">
                    <div className="relative">
                        <img src={RealEstateLaw} alt="businesslaw" />
                        <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
                            REAL ESTATE LAW
                        </h3>
                    </div>
                    <div className="relative">
                        <img src={BusinessLaw2} alt="partnershiplaw" />
                        <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
                            BUSINESS LAW
                        </h3>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex items-center  gap-6">
                    <div className="relative">
                        <img src={LandlordDisputes} alt="businesslaw" />
                        <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
                            LANDLORD DISPUTES
                        </h3>
                    </div>
                    <div className="relative ">
                        <img src={ElderAbuse} alt="partnershiplaw" />
                        <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
                            ELDER ABUSE
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;