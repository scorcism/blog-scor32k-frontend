import { useState } from "react";

const PostBlog = () => {

    const [imageData, setImageData] = useState({
        title: '',
        desc: '',
        blog: '',
        image: null,
    });

    let tags = [];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setImageData({ ...imageData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageData({ ...imageData, image: e.target.files[0] });
    };

    tags.push("apple")
    tags.push("mango")
    tags.push("banana")

    
    

    console.log(JSON.stringify(tags))

    const handleSubmit = () => {


        const formData = new FormData();

        formData.append('title', imageData.title);
        formData.append('tags', JSON.stringify(tags));
        formData.append('desc', imageData.desc);
        formData.append('blog', imageData.blog);
        formData.append('image', imageData.image);

        fetch('http://localhost:8000/api/post', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Image uploaded and metadata stored:', data);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
    };

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px"
            }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="desc"
                    placeholder="Description"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="blog"
                    placeholder="Enter Blog"
                    onChange={handleInputChange}
                />
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button onClick={handleSubmit}>Upload Image</button>
            </div>
        </>
    )
}

export default PostBlog;