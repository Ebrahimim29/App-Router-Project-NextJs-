import { Button, ListGroup } from "flowbite-react";
import BackButton from "../components/BackButton";
import ListGroupItemLink from "../components/ListGroupItemLink";
// import { title } from "process";

const getUserService = async () => {
    const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc')
    const users = await res.json()
    return users
}


const User = async () => {

    const users = await getUserService()

    const updateUserWithId = async (formData) => {
        'use server'
        //add new user
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <BackButton />

            <form className="text-left w-80" action={updateUserWithId}>
                <h3>Create User</h3>
                <input type="text" className="form-control mt-2" name="name" placeholder="Name" />
                <input type="email" className="form-control mt-2" name="email" placeholder="Email" />

                <Button type="submit" className="bg-pink-400 mt-2">Confirm</Button>
            </form>

            <div className="flex flex-col mt-2 bg-amber-400 w-full h-50 text-blue-400">
                <ListGroup className="mt-3 w-full">
                    {users.map(p => (
                        <ListGroupItemLink key={p.id} href={`/users/${p.id}`} title={p.name} />
                    ))}
                </ListGroup>
            </div>

        </div>
    )
}

export default User;