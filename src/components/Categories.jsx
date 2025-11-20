import { use } from "react";

const categoryPromice = fetch("https://raw.githubusercontent.com/moshiurrahman202/Json_file_for_fetch/refs/heads/main/newzly_categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromice)
    console.log(categories);

    return (
        <div>
            <h1 className="font-bold">All Categiries</h1>
            <h1>{categories.length}</h1>
            
        </div>
    );
};

export default Categories;