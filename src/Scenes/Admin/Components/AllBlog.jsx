import { gql, useQuery } from '@apollo/client'
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const query = gql`
query scor32kBlogs {
    getBlogsAll {
      id
      title
      desc
      tags
      slug
      published
      createdAt
      imgUrl
      userId
      user {
        id
        name
      }
    }
}`


const AllBlog = () => {

    let URL = process.env.REACT_APP_BACKEND;

    const { data, loading, error } = useQuery(query);
    // console.log(error)
    
    useEffect(()=>{
        document.title = "All blogs | scor32k"
    },[])

    if (loading) {
        return <h1>Loading!!</h1>
    }

    let datas = data.getBlogsAll;

    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    const updatePost = (id, state, slug) => {
        fetch(`${URL}/admin/post/update-status/${id}`, {
            method: 'PUT',
            headers: {
                "Authorization": `Barrer ${Cookies.get("auth-token")}`,
                'X-Post-State': `${state}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                alert(`${data.message}`)
                setTimeout(() => {
                    window.location.href = `/blog/${slug}`
                }, 1000);
            })
            .catch((error) => {
                alert(`ERROR: ${error.message}`)
                // setMessage(`${error.message}`)
                // console.error('Error uploading image:', error);
            });
    }

    const updateState = async (id, state, slug) => {
        updatePost(id, state, slug)
    }

    
    return (
        <>
            <table className="w-full">

                <thead className="bg-blueBlack border-b">
                    {
                        loading &&
                        <h2 className='w-full text-center py-3'>Loading..</h2>
                    }
                    <tr>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            ID
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Title
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Desc
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Tags
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Blog
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Img URL
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Created At
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            User
                        </th>
                        <th scope="col" className="text-sm font-medium text-wheat px-6 py-4 text-left">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas && datas.map((record) => (
                            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td title={record.id} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    -
                                </td>
                                <td title={record.title.length > 40 ? record.title : ""} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {record.title.length > 40 ? `${record.title.substring(0, 40)}...` : record.title}
                                </td>
                                <td title={record.desc.length > 40 ? record.desc : ""} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {record.desc.length > 40 ? `${record.desc.substring(0, 40)}...` : record.desc}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Tags
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <a href={`/blog/${record.slug}`} target='_blank'>Goto</a>

                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <a href={`${record.imgUrl}`} className='underline'>Link</a>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {convert(Date((record.createdAt * 1000)))}
                                </td>
                                <td title={record.user.id} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {record.user.name}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => {
                                        updateState(record.id, record.published, record.slug)
                                    }} className="border border-gray-700 rounded-base py-[1px] px-[3px] hover:bg-gray-800 hover:text-wheat hover:border-red">{record.published === true ? <h2>Published</h2> : <h2>Not Published</h2>}</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllBlog;