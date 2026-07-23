'use client'

import { ListGroupItem } from "flowbite-react";
import Link from "next/link";

const ListGroupItemLink = ({href, title}) => {
    return (
        <ListGroupItem>
            <Link
                className="w-full font-extrabold block text-amber-700 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
                href={href}>
                {title}
            </Link>
        </ListGroupItem>
    )
};

export default ListGroupItemLink;