import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const own_tags = ["internet", "aws", "docker", "linux", "Kubernetes", "all"]

const AddBlog = () => {
    let URL = process.env.REACT_APP_BACKEND;

    const [imageData, setImageData] = useState({
        title: '',
        desc: '',
        blog: '',
        image: null,
    });

    const [tags, setTags] = useState(["all"]);
    const [message, setMessage] = useState(null);
    const [showBox, setShowBox] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setImageData({ ...imageData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageData({ ...imageData, image: e.target.files[0] });
    };



    const handleSubmit = () => {

        const formData = new FormData();

        formData.append('title', imageData.title);
        formData.append('tags', JSON.stringify(tags));
        formData.append('desc', imageData.desc);
        formData.append('blog', imageData.blog);
        formData.append('image', imageData.image);

        fetch(`${URL}/admin/post`, {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": `Barrer ${Cookies.get("auth-token")}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setShowBox(true);
                setMessage(`${data.message}`)
            })
            .catch((error) => {
                alert(`ERROR: ${error.message}`)
                // setMessage(`${error.message}`)
                // console.error('Error uploading image:', error);
            });
    };

    useEffect(()=>{
        document.title = "Add Blog | scor32k"
    })


    return (
        <section className="flex items-center justify-center my-5">
            <div className="border rounded-md border-1 border-red w-5/6 px-3 py-6 ">
                <h1 className="text-center text-2xl text-red font-bolder">Add Blog</h1>
                <div >
                    {
                        (message && showBox) &&
                        <div className="mb-6 flex flex-row w-full justify-between bg-gray-800 items-center py-1 px-2">
                            <a target="_blank" href={`/blog/${message}`}>{message}</a>
                            <p onClick={()=>{
                                setShowBox(false);
                                setMessage("")
                            }} className="cursor-pointer text-red text-3xl font-extrabold">*</p>
                        </div>
                    }
                    <div class="mb-6">
                        <label for="title" class="block mb-2 text-sm font-medium ">Title</label>
                        <input type="text" id="title" name="title" className="outline-none text-black rounded-lg w-full py-2 px-3" onChange={handleInputChange} />
                    </div>
                    <div class="mb-6">
                        <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desc</label>
                        <textarea id="desc" name="desc" rows="2" class="block p-2.5 w-full text-black outline-none" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog</label>
                        <textarea id="blog" name="blog" rows="5" class="block p-2.5 w-full text-black outline-none" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex w-2/6">
                            <select id="tags" onChange={(e) => {
                                let name = e.target.value;
                                if (!tags.includes(name)) {
                                    setTags([
                                        ...tags, name
                                    ])
                                }
                            }} className="text-black border border-1 border-red outline-none">
                                {
                                    own_tags.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))
                                }
                            </select>
                            <div>
                                <div class="group relative  flex justify-center">
                                    <button class="text-red">*</button>
                                    <ul class="absolute top-[-70] left-2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 flex flex-col">
                                        {tags && tags.map((t) => (<li>{t}</li>))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <input type="file" accept="image/*" className="w-3/6" onChange={handleImageChange} />
                        <button onClick={handleSubmit} type="submit" class="w-1/6 border rounded-sm bg-red py-1 px-2">Submit</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AddBlog;