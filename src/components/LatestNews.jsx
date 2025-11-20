import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-3 bg-base-200 p-3">
            <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
            <Marquee className="flex gap-6 font-bold" pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo alias iste consequuntur amet ducimus praesentium voluptatum nobis reprehenderit hic facilis tenetur odio corrupti temporibus, laboriosam minima non aliquam esse.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis fugiat, porro qui illum perferendis id necessitatibus accusamus ipsa voluptas pariatur accusantium a atque doloribus, quam modi ipsum labore amet? Voluptate.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;