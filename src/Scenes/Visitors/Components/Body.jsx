import Blog from "./BlogCard";
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client'


const query = gql`
query scor32kBlogs {
    getBlogs {
      id
      title
      desc
      tags
      slug
      createdAt
      imgUrl
      userId
      user {
        id
        name
      }
    }
  }
`


const Body = () => {

    const [showSearchFiels, setShowSearchField] = useState(false)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        document.title = "Blogs | scor32k"
    }, [])

    const { data, loading } = useQuery(query);

    if (loading) {
        return <h1>Loading!!</h1>
    }

    let datas = data.getBlogs;

    const keyPress = (e) => {
        if (e.key === "Enter") {
            setSearchText("")
            setShowSearchField(false)
        }
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }


    return (
        <section className="flex flex-col md:px-48 xs:px-10 my-5">
            <div className='absoulte top-20 left-5 flex flex-row gap-4'>
                <h1
                    onClick={() => {
                        setShowSearchField(true)
                    }}
                    className={`${showSearchFiels === true ? "hidden" : "block"} hover:scale-110 cursor-pointer text-2xl hover:rotate-90 duration-500 `}

                >🔎</h1>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <input
                        type="text"
                        name="searchtext"
                        id="searchtext"
                        className={` ${showSearchFiels === true ? "block" : "hidden"} bg-transparent border border-white/50 hover:border-white/70 rounded py-1 px-2 outline-none`}
                        placeholder='Search...'
                        onChange={handleChange}
                        value={searchText}
                        onKeyDown={keyPress}
                    />
                    <p className={`text-white/30 font-2xl ${showSearchFiels === true ? "block" : "hidden"}`}>{"<| "}Enter</p>
                </div>
            </div>
            {
                datas && datas.filter((val) => {
                    if (searchText === "") {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchText.toLowerCase())) {
                        return val;
                    }
                }).map((d) => {
                    return <Blog data={d} />
                })
            }

        </section>
    )
}

export default Body;