import SectionDocumentar from "./section-films/SectionDocumentar/SectionDocumentar";
import SectionLife from "./section-films/SectionLife/SectionLife";
import SectionRaiting from "./section-films/SectionRaiting/SectionRaiting";
import SectionToday from "./section-films/SectionToday/SectionToday";

const MainFilms = () => {
    return (
        <main className="page">
            <SectionDocumentar />
            <SectionRaiting />
            <SectionLife />
            <SectionToday />
        </main>
    )
}

export default MainFilms;