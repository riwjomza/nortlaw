import About from "@/app/components/Aboutus";
import Pics from "@/app/components/Pics";
import Services from "@/app/components/Services";
import Staffs from "@/app/components/staffs";
import Whyus from "@/app/components/Whyus";
import Location from "@/app/components/location";

const Homepage =()=>{
    return (
        <div>    
        <Pics/>
        <Services/>
        <About/>
        <Staffs/>
        <Whyus/>
        <Location/>
        </div>
    )
}
export default Homepage;