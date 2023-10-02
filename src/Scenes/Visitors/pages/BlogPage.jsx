import { gql, useQuery } from '@apollo/client'
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import BlogPost from '../Components/BlogPost';
import Footer from '../Components/Footer';

const query = gql`
    query GetBlog($slug: String!) {
        getBlog(slug: $slug) {
          imgUrl
          title
          createdAt
          tags
          user {
            name
          }
          blog
        }
}`

const BlogPage = () => {

    const params = useParams("slug");
    const slug = params.slug;

    const { data, loading } = useQuery(query, {
        variables: { slug }
    });

    if (loading) {
        return <h1>Loading!!</h1>
    }

    return (
        <>
            <Header />
            <BlogPost data={data} />
            <Footer />
        </>
    )
}

export default BlogPage;