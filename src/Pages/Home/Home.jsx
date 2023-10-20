import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Description></Description>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;