
const Post = ({post}) => {
const {title, body, userId} = post;

    return (
        <div className="container mx-auto">
            <h1>UserId: {userId}</h1>
            <h1 className="mb-2"> <b className="underline bg-fuchsia-600 text-white">Title:</b> {title} </h1>
            <p>Descriptin: {body} </p>
        </div>
    );
};

export default Post;