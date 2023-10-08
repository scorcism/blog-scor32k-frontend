import useMediaQuery from "../../../hooks/useMediaQuery";
import { gql, useQuery } from '@apollo/client'
import Blog from "./BlogCard";

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

    const { data, loading, error } = useQuery(query);

    if(loading){
        return <h1>Loading!!</h1>
    }


    let datas = data.getBlogs;

    return (
        <section className="flex flex-col md:px-48 xs:px-10 my-5">
            {
                data && datas.map((d)=>{
                    return <Blog data={d}/>
                })
            }

        </section>
    )
}

export default Body;