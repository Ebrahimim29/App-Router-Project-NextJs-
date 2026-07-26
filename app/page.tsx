import ListGroupItemLink from "./components/ListGroupItemLink";
import { ListGroup } from "flowbite-react";


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mt-5 w-full max-w-md px-4">
        <ListGroup>
          <ListGroupItemLink title="Users"  href={"/users"}/>
          <ListGroupItemLink title="Posts"  href={"/posts"}/>
          <ListGroupItemLink title="Admin"  href={"/admin"}/>
          <ListGroupItemLink title="Admin-Panel" href={"/admin/panel"}/>
          <ListGroupItemLink title="Filterd Posts"  href={"/fPosts"}/>
        </ListGroup>
      </div>
    </div>
  );
}
