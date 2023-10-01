import { gql, useQuery } from '@apollo/client'

const query = gql`
query scor32kBlogs {
    getBlogs {
      id
      blog
      desc
      imgUrl
      published
      title
      userId
      user {
        id
        name
        email
      }
    }
  }

  `

const VisitorHome=  () =>{

    const { data, loading } = useQuery(query);

    console.log(data)

    return (
        <>  
            Visitor home
        </>
    )
}

export default VisitorHome;