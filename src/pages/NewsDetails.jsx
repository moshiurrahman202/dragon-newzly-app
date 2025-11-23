import Header from "../components/Header";
import RightAside from "../laouts/RightAside";


const NewsDetails = () => {
    return (
        <div >
            <header className="pt-5">
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 pt-10">
            <section className="col-span-9">
                <h1 className="font-bold">News Details</h1>
            </section>
            <aside className="col-span-3">
                <RightAside></RightAside>
            </aside>

            </main>
        </div>
    );
};

export default NewsDetails;