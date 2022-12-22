import SectionDocumentar from "./section-films/SectionDocumentar/SectionDocumentar";
import SectionLife from "./section-films/SectionLife/SectionLife";
import SectionRaiting from "./section-films/SectionRaiting/SectionRaiting";

const MainFilms = () => {
    return (
        <main className="page">
            <SectionDocumentar />
            <SectionRaiting />
            <SectionLife/>
        </main>
    )
}

export default MainFilms;