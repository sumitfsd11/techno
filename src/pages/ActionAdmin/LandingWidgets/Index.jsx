import React from "react";
import BannerEdit from "./components/BannerLEdit";
import ApplyLEdit from "./components/ApplyLEdit";
import EventLEdit from "./components/EventLEdit";
import FeatureLEdit from "./components/FeatureLEdit";
import Footer from "components/utilsComponents/Footer/Footer";
import FeedbackLEdit from "./components/FeedbackLEdit";
const Index = () => {

    return (
        <React.Fragment>
            <div className='bg-[#f0fdf8]'>
            <BannerEdit />
            <FeatureLEdit />
            </div>
            <ApplyLEdit />
            <FeedbackLEdit/>
            <EventLEdit />
            <Footer />
        </React.Fragment>
    )
}

export default Index