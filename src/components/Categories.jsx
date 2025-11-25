import { use } from "react";
import { NavLink } from "react-router";

const categoryPromice = fetch("https://raw.githubusercontent.com/moshiurrahman202/Json_file_for_fetch/refs/heads/main/newzly_categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromice)
    // console.log(categories);

    return (
        <div>
            <h1 className="font-bold">All Categiries</h1>
            <div className="grid grid-cols-1 gap-3 text-accent mt-5">
                {
                  categories.map(item => (<NavLink className="hover:bg-base-200 font-semibold btn border-0 bg-base-100" to={`/category/${item.id}`} key={item.id} >{item.name}</NavLink>))  
                }
            </div>
            
        </div>
    );
};

export default Categories;