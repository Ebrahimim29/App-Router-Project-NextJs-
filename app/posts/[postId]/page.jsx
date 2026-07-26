import { ListGroup } from "flowbite-react";
import BackButton from "../../components/BackButton";
import ListGroupItemLink from "../../components/ListGroupItemLink";

const getPostsService = async (postId) => {
    const res = await fetch(`http://localhost:4000/posts/${postId}`)
    const post = await res.json()
    return post
}


const Page = async ({ params }) => {

    const post = await getPostsService(params.postId)

    return (
        <div>
            <BackButton />
            <ListGroup className="flex flex-col justify-center items-center w-100 h-100 bg-green-400">
                <ListGroupItemLink title={post.id}/>
                <ListGroupItemLink title={post.title}/>
            </ListGroup>
        </div>
    )
};

export default Page;