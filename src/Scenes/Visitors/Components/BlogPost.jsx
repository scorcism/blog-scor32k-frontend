import Markdown from 'markdown-to-jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon, PasteIcon } from '../../../Icons/icons';
import { useEffect, useState } from 'react';


const Code = ({ children, language }) => {

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied])

    return (
        <div className='code relative'>
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                <button className='icon copy-icon absolute z-10 top-[1rem] right-[1rem]'>
                    {copied ? <PasteIcon /> : <CopyIcon />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={materialDark}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

const H1 = ({ children }) => {
    return (
        <>
            <h1 className='text-[2rem] font-extrabold'>{children}</h1>
        </>
    )
}
const H2 = ({ children }) => {
    return (
        <>
            <h1 className='' style={{
                fontSize: "1.5rem",
                lineHeight: "3.5rem",
                fontWeight: "600",
            }}>{children}</h1>
        </>
    )
}
const H3 = ({ children }) => {
    return (
        <>
            <h1 className='' style={{
                fontSize: "1.2rem",
                lineHeight: "3rem",
                fontWeight: "600",
            }}>{children}</h1>
        </>
    )
}

const ptag = ({ children }) => {
    return (
        <p className='font-xl'>
            {children}
        </p>
    )
}

const StrongTag = ({ children }) => {
    return (
        <p className='font-bolder'>
            {children}
        </p>
    )
}

const spanTag = ({ children }) => {
    return (
        <p className='font-bolder'>
            {children}
        </p>
    )
}

const BlogPost = ({ data }) => {
    let blog = data.getBlog;

    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    useEffect(() => {
        document.title = `${blog.title} | scor32k Blog`
    }, [])

    return (
        <div className="flex flex-col md:px-48 xs:px-10 my-5">
            <h1 onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className={`fixed bottom-7 text-wheat/80 hover:text-wheat/90 right-2 font-Poppins font-semibold border border-wheat/40 bg-wheat/10 hover:bg-black/60 transition duration-200 py-1 px-3 rounded cursor-pointer`}>Top</h1>
            <img src={`${blog.imgUrl}`} alt={`${blog.slug}`} />
            <div className="flex my-1 justify-between">
                <div className="meta flex gap-3  font-bold">
                    <span title="author name" className="border mx-2 border-red p-1 rounded-md text-xs ">{blog.user.name}</span>
                    <span title="publised date" className="border mx-2 border-wheat p-1 rounded-md text-xs font-bold">{convert(Date((blog.createdAt * 1000)))}</span>
                </div>
                <div className="tags flex gap-3" title="tags">
                    {
                        blog.tags.map((tag) => (
                            <span className="border border-wheat p-1 rounded-md text-xs">{tag}</span>
                        ))
                    }
                </div>
            </div>
            <Markdown
                className="mt-5 "
                options={{
                    overrides: {
                        code: {
                            component: Code
                        },
                        h1: {
                            component: H1
                        },
                        p: {
                            component: ptag
                        },
                        h2: {
                            component: H2
                        },
                        h3: {
                            component: H3
                        },
                        strong: {
                            component: StrongTag
                        },
                        span: {
                            component: spanTag
                        }
                    }
                }}
            >
                {blog.blog}
            </Markdown>
        </div>
    )
}

export default BlogPost;