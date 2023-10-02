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

const BlogPost = ({ data }) => {
    let blog = data.getBlog;



    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    return (
        <div className="flex flex-col md:px-48 xs:px-10 my-5">
            <img src={`${blog.imgUrl}`} alt={`${blog.slug}`} />
            <div className="flex my-1 justify-between">
                <div className="meta flex gap-3">
                    <span title="author name" className="border mx-2 border-red p-1 rounded-md text-xs ">{blog.user.name}</span>
                    <span title="publised date" className="border mx-2 border-wheat p-1 rounded-md text-xs ">{convert(Date((blog.createdAt * 1000)))}</span>
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