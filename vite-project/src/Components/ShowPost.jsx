import parse from 'html-react-parser';


function ShowPost({ content }) {
    return (
        <div >
            {parse(content)}
        </div>
    )
}
export default ShowPost;