import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";


const BlogPage = () => {

    const params = useParams("slog");
    const slug = params.slug;
    console.log(slug)

    const [data, setData] = useState("");
    const [message, setMessage] = useState("");

    async function getData() {
        
    }

    useEffect(() => {
        let res = getData();
        if (res.success) {
            setData(res.message)
        } else {
            setMessage(res.message)
        }
    }, [])


    return (
        <>
            <Header />
            blog page
        </>
    )
}

export default BlogPage;