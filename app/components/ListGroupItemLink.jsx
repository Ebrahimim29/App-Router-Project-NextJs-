'use client'

import { ListGroupItem } from "flowbite-react";
import Link from "next/link";

const ListGroupItemLink = ({href}) => {
    return (
        <ListGroupItem>
            <Link
                className="w-full font-extrabold block text-amber-600 hover:text-blue-950 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
                href={href}>
                Posts
            </Link>
        </ListGroupItem>
    )
};

export default ListGroupItemLink;