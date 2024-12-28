import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mt-20">
      <div className="bg-[#161616] bg-opacity-70">
        <div className="pt-6">
          <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"
          ></SectionTitle>
        </div>

        <div className="md:flex justify-center items-center pb-16 pt-8 px-20">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex ea facere reprehenderit dolor dolore dolorum tempora earum ut, animi sequi accusantium quas aliquid. Laborum commodi natus nesciunt esse illum?
            </p>
            <button className="btn btn-outline border-0 text-white border-white border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
