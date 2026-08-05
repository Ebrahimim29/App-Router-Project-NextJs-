import { ListGroup } from "flowbite-react"
import BackButton from "../../components/BackButton"
import ListGroupItemLink from "../../components/ListGroupItemLink"

export async function generateStaticParams() {
    return [
        {userId: "1"},
        {userId: "2"},
        {userId: "3"}
    ]
}

const getUserService = async (userId) => {
    const res = await fetch(`http://localhost:4000/users/${userId}`)
    const user = await res.json()
    return user
}


const User = async ({params}) => {
    
    const user = await getUserService(params.userId)

    return(
        <div className="flex justify-center items-center bg-sky-500">
            <BackButton/>
            <ListGroup>
                <ListGroupItemLink title={user.id}/>
                <ListGroupItemLink title={user.name}/>
                <ListGroupItemLink title={user.email}/>
                <ListGroupItemLink title={user.address.city}/>
            </ListGroup>
        </div>
    )
}

export default User;