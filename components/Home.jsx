import React from "react";
import web from "../images/img2.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Be a critic! With"
                imgsrc={web}
                visit='/restaurants'
                btnname="Get Started"
                quote="'A good Restaurant is like a vacation;it transports you,
                and it becomes a lot more than just about food'-Philip Rosenthal" />
        </>
    )
}

export default Home