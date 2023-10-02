import { marked } from 'marked'


const BlogPost = ({ data }) => {
    let blog = data.getBlog;

    console.log(blog)


    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    return (
        <div className="flex flex-col md:px-48 xs:px-10 my-5">
            <img src={`${blog.imgUrl}`} alt={`${blog.slug}`} />
            <div className="flex my-1 justify-between">
                <div className="meta flex gap-3">
                    <span title="author name" className="border mx-2 border-red p-1 rounded-md text-xs ">{blog.user.name}</span>
                    <span title="publised date" className="border mx-2 border-wheat p-1 rounded-md text-xs ">{convert(Date((blog.createdAt * 1000)))}</span>
                </div>
                <div className="tags flex gap-3" title="tags">
                    {
                        blog.tags.map((tag) => (
                            <span className="border border-wheat p-1 rounded-md text-xs">{tag}</span>
                        ))
                    }
                </div>
            </div>
            <div className='bg-gray-700 leading-7 px-3 py-3' dangerouslySetInnerHTML={{
                __html: marked(blog.blog)
            }}>
            </div>

        </div>
    )
}

export default BlogPost;