import { Link } from "react-router-dom";


const Blog = ({ data }) => {

    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    return (
        <>
            <article className="flex flex-row border border-black my-5">
                <div className="w-1/2 flex justify-center items-center">
                    <Link target="_blank" rel="noreferrer" to={`blog/${data.slug}`}>
                        <img src={`${data.imgUrl}`} className="object-cover" alt={`${data.slug}`} />
                    </Link>
                </div>
                <div className="pl-2 flex flex-col justify-evenly w-1/2 bg-gray-800 gap-3">
                    <h2 className="text-xl font-extrabold">{data.title}</h2>
                    <span className="text-xs border border-red rounded-md px-1 w-1/4 text-center" >{data.user.name}</span>
                    <p className="text-base text-ellipsis font-bold">{data.desc}</p>
                    <div className="flex items-center text-sm gap-3">
                        {
                            data.tags && data.tags.map((t) => (
                                <p className="border border-wheat rounded-md px-1 ">{t}</p>

                            ))
                        }
                    </div>
                    <span className="text-xs text-red mt-2 border font-extrabold border-black rounded-lg px-1 w-1/5 flex items-center justify-center py-1">{convert(Date((data.createdAt * 1000)))}</span>
                </div>
            </article>
        </>
    )
}

export default Blog;