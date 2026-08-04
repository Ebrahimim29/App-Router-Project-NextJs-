import { ListGroup } from "flowbite-react";
import BackButton from "../../components/BackButton";
import ListGroupItemLink from "../../components/ListGroupItemLink";

export async function generateStaticParams () {
    return [
        {postId: "1"},
        {postId: "2"},
        {postId: "3"}
    ]
}


const getPostsService = async (postId) => {
    const res = await fetch(`http://localhost:4000/posts/${postId}`)
    const post = await res.json()
    return post
}

export const revalidate = 30

const Page = async ({ params }) => {

    const {postId} = await params;

    const post = await getPostsService(postId)

    return (
        <div>
            <BackButton />
            <ListGroup className="flex flex-col justify-center items-center w-full h-full bg-green-400">
                <ListGroupItemLink title={post.id}/>
                <ListGroupItemLink title={post.title}/>
            </ListGroup>
        </div>
    )
};

export default Page;