import { Button, ListGroup } from "flowbite-react";
import BackButton from "../components/BackButton";
import ListGroupItemLink from "../components/ListGroupItemLink";

const getUserService = async () => {
    try {
        const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc', {
            cache: 'no-store' // برای دریافت اطلاعات جدید
        });
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await res.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

const addUserService = async (name, email) => {
    try {
        const res = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });
        if (!res.ok) {
            throw new Error('Failed to add user');
        }
        return await res.json();
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
}

const UsersPage = async () => {
    const users = await getUserService();

    const updateUserWithId = async (formData) => {
        'use server'
        const name = formData.get('name');
        const email = formData.get('email');
        
        if (!name || !email) {
            console.error('Name and email are required');
            return;
        }

        try {
            await addUserService(name, email);
            // پس از افزودن، صفحه را مجدداً بارگذاری می‌کنیم
            // در Next.js 13+ می‌توانید از redirect یا revalidate استفاده کنید
        } catch (error) {
            console.error('Error in server action:', error);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <BackButton />

            <form className="text-left w-80" action={updateUserWithId}>
                <h3 className="text-xl font-bold mb-4">Create User</h3>
                <input 
                    type="text" 
                    className="form-control mt-2 w-full p-2 border rounded" 
                    name="name" 
                    placeholder="Name"
                    required
                />
                <input 
                    type="email" 
                    className="form-control mt-2 w-full p-2 border rounded" 
                    name="email" 
                    placeholder="Email"
                    required
                />
                
                <Button type="submit" className="bg-pink-400 mt-2 w-full">Confirm</Button>
            </form>

            <ListGroup className="mt-3 w-full max-w-md">
                {users && users.length > 0 ? (
                    users.map(user => (
                        <ListGroupItemLink 
                            key={user.id} 
                            href={`/users/${user.id}`} 
                            title={user.name}
                        />
                    ))
                ) : (
                    <div className="text-center text-gray-500 p-4">
                        No users found
                    </div>
                )}
            </ListGroup>
        </div>
    )
}

export default UsersPage;

















// import { ListGroup } from "flowbite-react";
// import ListGroupItemLink from "../components/ListGroupItemLink";
// import BackButton from "../components/BackButton";

// const getPostsService = async () => {
//     const res = await fetch('http://localhost:4000/posts', {
//         next: {
//             revalidate: 10
//         }
//     })
//     const posts = await res.json()
//     return posts
// }

// const Page = async () => {
//     const posts = await getPostsService()

//     async function create() {
//         'use server'

//         //...
//     }

//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen">
//             <BackButton/>
//             <ListGroup className="mt-3 w-full">
//                 {posts.map(p => (
//                     <ListGroupItemLink key={p.id} href={`/posts/${p.id}`} title={p.title}/>
//                 ))}
//             </ListGroup>
//         </div>
//     )
// };

// export default Page;