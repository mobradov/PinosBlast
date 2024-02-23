import Card from '@/components/Card/Card';
import Navbar from '@/components/Navbar/Navbar';
import FirstSection from '@/components/Content/FirstSection';
import SecondSection from '@/components/Content/SecondSection';
import ThirdSection from '@/components/Content/ThirdSection';
import Mint from '@/components/Mint/Mint';
import Footer from '@/components/Footer/Footer';



export default function Home() {
    return (
        <Card>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Mint />
            <Footer />
          
        </Card>
    );
}
