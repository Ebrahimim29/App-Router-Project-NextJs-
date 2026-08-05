import { Button, ListGroup } from "flowbite-react";
import Link from "next/link"; // اضافه کردن import Link
import BackButton from "../components/BackButton";
// import ListGroupItemLink را حذف کنید چون استفاده نمی‌شود

const getUsersService = async () => {
    try {
        const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc', {
            cache: 'no-store' // برای دریافت اطلاعات تازه
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
};

const Users = async () => {
    const users = await getUsersService();

    const updateUserWithId = async (formData) => {
        'use server';
        const name = formData.get('name');
        const email = formData.get('email');
        console.log('Creating user:', { name, email });
        // اضافه کردن منطق ایجاد کاربر
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
            <BackButton />

            <form className="text-right w-full max-w-md" action={updateUserWithId}>
                <h3 className="text-xl font-bold mb-4">Create User</h3>
                <input 
                    type="text" 
                    className="mt-2 bg-amber-500 form-control w-full p-2 rounded" 
                    name="name" 
                    placeholder="Name" 
                    required
                />
                <input 
                    type="email" 
                    className="mt-2 bg-green-400 form-control w-full p-2 rounded" 
                    name="email" 
                    placeholder="Email" 
                    required
                />
                <Button className="bg-red-400 mt-2 w-full" type="submit">
                    Confirm
                </Button>
            </form>

            {/* بخش نمایش لیست کاربران */}
            <div className="mt-3 w-full max-w-md">
                <h4 className="text-lg font-semibold mb-2">Users List:</h4>
                <ListGroup>
                    {users.length === 0 ? (
                        <ListGroup.Item>No users found</ListGroup.Item>
                    ) : (
                        users.map((u) => (
                            <ListGroup.Item key={u.id}>
                                <Link 
                                    href={`/users/${u.id}`} 
                                    className="block hover:text-blue-700"
                                >
                                    {u.name}
                                </Link>
                            </ListGroup.Item>
                        ))
                    )}
                </ListGroup>
            </div>
        </div>
    );
};

export default Users;