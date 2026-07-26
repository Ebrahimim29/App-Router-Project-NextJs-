import { ListGroup } from "flowbite-react";
import ListGroupItemLink from "../components/ListGroupItemLink";
import BackButton from "../components/BackButton";

const getPostsService = async () => {
    const res = await fetch('http://localhost:4000/posts')
    const posts = await res.json()
    return posts
}

const Page = async () => {
    const posts = await getPostsService()

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <BackButton/>
            <ListGroup className="mt-3 w-full">
                {posts.map(p => (
                    <ListGroupItemLink key={p.id} href={`/posts/${p.id}`} title={p.title}/>
                ))}
            </ListGroup>
        </div>
    )
};

export default Page;