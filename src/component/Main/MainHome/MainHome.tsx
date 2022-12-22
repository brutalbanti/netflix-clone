import SectionDownload from "./section-home/SectionDownload/SectionDownload";
import SectionTV from "./section-home/SectionTV/SectionTV";
import './index.css'
import SectionWatch from "./section-home/SectionWatch/SectionWatch";
import SectionKids from "./section-home/SectionKids/SectionKids";
import SectionAccordeon from "./section-home/SectionAccordeon/SectionAccordeon";

const MainHome = () => {
    return (
        <main className="page">
            <SectionTV />
            <SectionDownload />
            <SectionWatch />
            <SectionKids />
            <SectionAccordeon />
        </main>
    )
}

export default MainHome;