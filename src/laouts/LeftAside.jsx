import { Suspense } from "react";
import Categories from "../components/Categories";

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className="text-center"><span className="loading loading-dots loading-md"></span></div>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;