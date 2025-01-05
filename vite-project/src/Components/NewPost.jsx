import TipTap from "./TipTap";
import { useState } from "react";
import ShowPost from "./ShowPost";
import "./NewPost.css"


function NewPost() {
    const [htmlContent, setHtmlContent] = useState('');

    const handleEditorContentSave = (html) => {
        // console.log(html);

        setHtmlContent(html);

    }

    return (
        <div className="NewPost">

            <TipTap onEditorContentSave={handleEditorContentSave} />
            <hr />
            <div className="post-content">
                <ShowPost content={htmlContent} />
            </div>





        </div>
    )
}
export default NewPost;