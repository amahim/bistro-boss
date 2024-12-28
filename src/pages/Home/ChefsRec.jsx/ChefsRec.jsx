import salad from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefsRec = () => {
    return (
        <div className=''>
            <SectionTitle 
            subHeading={"---Should Try---"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='mt-10'>
                <div className='flex gap-8 justify-center'>
                    <div className='w-72 bg-[#c7c6c680] flex flex-col gap-6 items-center text-center'>
                        <div>
                        <img src={salad} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 items-center w-4/5 mx-auto pb-5'>
                            <p className='text-black text-xl '>Caeser Salad</p>
                            <p className='text-black text-base'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <button className="btn btn-outline border-0 text-[#ffc21b] border-[#ffc21b] border-b-4">
              ADD TO CART
            </button>
                        </div>
                    </div>
                    <div className='w-72 bg-[#c7c6c680] flex flex-col gap-6 items-center text-center'>
                        <div>
                        <img src={salad} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 items-center w-4/5 mx-auto pb-5'>
                            <p className='text-black text-xl '>Caeser Salad</p>
                            <p className='text-black text-base'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <button className="btn btn-outline border-0 text-[#ffc21b] border-[#ffc21b] border-b-4">
              ADD TO CART
            </button>
                        </div>
                    </div>
                    <div className='w-72 bg-[#c7c6c680] flex flex-col gap-6 items-center text-center'>
                        <div>
                        <img src={salad} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 items-center w-4/5 mx-auto pb-5'>
                            <p className='text-black text-xl '>Caeser Salad</p>
                            <p className='text-black text-base'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <button className="btn btn-outline border-0 text-[#ffc21b] border-[#ffc21b] border-b-4">
              ADD TO CART
            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChefsRec;