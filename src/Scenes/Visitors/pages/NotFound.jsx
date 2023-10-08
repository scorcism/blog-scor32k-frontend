import Header from "../Components/Header";

const NotFound = () => {

    document.title = "Not Found Page | scor32k"

    return (
        <>
            <Header />
            <div className="flex flex-col gap-5 h-screen items-center justify-center">
                <h1 className="text-9xl text-red font-extrabold hover:tracking-widest duration-500">404</h1>
                <h2 className="text-2xl text-red font-semibold">Page Not Found</h2>
            </div>
        </>
    )
}

export default NotFound;