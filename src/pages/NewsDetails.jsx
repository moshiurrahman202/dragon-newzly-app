import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../laouts/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";


const NewsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    let detailNews = data.find(singlenews => singlenews.id == id)
    
    
    
    
    return (
        <div >
            <header className="pt-5">
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 pt-10">
                <section className="col-span-9">
                    <h1 className="font-bold">News Details</h1>
                    <NewsDetailsCard detailNews={detailNews}></NewsDetailsCard>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;