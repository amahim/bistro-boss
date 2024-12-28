import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ChefsRec from "../ChefsRec.jsx/ChefsRec";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-4/5 mx-auto">
            <Category></Category>
            <BistroBoss/>
            <PopularMenu></PopularMenu>
            <ChefsRec/>
            <Featured></Featured>
            <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;