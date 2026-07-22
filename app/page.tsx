'use client';

import ListGroupItemLink from "./components/ListGroupItemLink";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "flowbite-react";


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mt-5 w-full max-w-md px-4">
        <ListGroup>
          <ListGroupItemLink href={"/users"}/>
          <ListGroupItem>
            <Link
              className="w-full font-extrabold block text-green-950 hover:text-blue-950 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
              href="/users">
              Users
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link
              className="w-full font-extrabold block text-mauve-600 hover:text-blue-950 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
              href="/admin">
              Admin
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link
              className="w-full font-extrabold block text-sky-600 hover:text-blue-950 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
              href="/users">
              Users
            </Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
