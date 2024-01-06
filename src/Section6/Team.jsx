import Card from "./Card/Card";
import Daniel from "../assets/Daniel.svg";
import Sanfole from "../assets/Sanfole.svg";
import Cesforila from "../assets/Cesforila.svg";
import Colleen from "../assets/Colleen.svg";
import Haldone from "../assets/Haldone.svg";
import Nik from "../assets/Nik.svg";
const teamDetails = [
    {
        imageUrl: Daniel,
        fullName: "Danial Def",
        caseNum: 301,
    },
    {
        imageUrl: Sanfole,
        fullName: "Sanfole",
        caseNum: 850,
    },
    {
        imageUrl: Cesforila,
        fullName: "Cesforila",
        caseNum: 470,
    },
    {
        imageUrl: Colleen,
        fullName: "Colleen",
        caseNum: 180,
    },
    {
        imageUrl: Haldone,
        fullName: "Haldone",
        caseNum: 212,
    },
    {
        imageUrl: Nik,
        fullName: "Nik Jeo",
        caseNum: 350,
    },
];
const Section6 = () => {
    return (
        <div className="p-24">
            <div className="flex justify-center items-center">
                <h3 className="text-white font-semibold text-[54px]">Our Team</h3>
            </div>
            <div className="flex justify-center flex-wrap gap-10  ">
                {teamDetails.map((userObj) => {
                    return (
                        <Card
                            key={userObj.fullName}
                            imageUrl={userObj.imageUrl}
                            fullName={userObj.fullName}
                            caseNum={userObj.caseNum}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Section6;