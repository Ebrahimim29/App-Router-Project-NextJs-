import { ListGroup } from "flowbite-react";
import BackButton from "../../components/BackButton";
import ListGroupItemLink from "../../components/ListGroupItemLink";

export async function generateStaticParams() {
    return [
        { userId: "1" },
        { userId: "2" },
        { userId: "3" }
    ]
}

const getUserService = async (userId) => {
    try {
        const res = await fetch(`http://localhost:4000/users/${userId}`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('User not found');
        }
        const user = await res.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

const UserDetailPage = async ({ params }) => {
    const user = await getUserService(params.userId);

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-sky-500">
                <div className="text-white text-xl">User not found</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-sky-500 p-4">
            <BackButton />
            <ListGroup className="w-full max-w-md mt-4">
                <ListGroupItemLink title={`ID: ${user.id}`} />
                <ListGroupItemLink title={`Name: ${user.name}`} />
                <ListGroupItemLink title={`Email: ${user.email}`} />
                {user.address && user.address.city && (
                    <ListGroupItemLink title={`City: ${user.address.city}`} />
                )}
            </ListGroup>
        </div>
    )
}

export default UserDetailPage;


























// import { ListGroup } from "flowbite-react";
// import BackButton from "../../components/BackButton";
// import ListGroupItemLink from "../../components/ListGroupItemLink";

// export async function generateStaticParams () {
//     return [
//         {postId: "1"},
//         {postId: "2"},
//         {postId: "3"}
//     ]
// }


// const getPostsService = async (postId) => {
//     const res = await fetch(`http://localhost:4000/posts/${postId}`)
//     const post = await res.json()
//     return post
// }

// export const revalidate = 30

// const Page = async ({ params }) => {

//     const {postId} = await params;

//     const post = await getPostsService(postId)

//     return (
//         <div>
//             <BackButton />
//             <ListGroup className="flex flex-col justify-center items-center w-full h-full bg-green-400">
//                 <ListGroupItemLink title={post.id}/>
//                 <ListGroupItemLink title={post.title}/>
//             </ListGroup>
//         </div>
//     )
// };

// export default Page;