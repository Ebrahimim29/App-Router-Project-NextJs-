import { Button, ListGroup, TableRow } from "flowbite-react";
import ListGroupItemLink from "./components/ListGroupItemLink";


const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Button color="blue">Back</Button>
            <ListGroup className="mt-3 w-full">
                {props.posts.map(p => (
                    <ListGroupItemLink key={p.id} href={'/posts/${p.id'} title={p.title}></ListGroupItemLink>
                ))}
            </ListGroup>
        </div>
    )
};

export default Page;