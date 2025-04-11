import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "./components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./components/ui/form"
import { Input } from "./components/ui/input"
import { axiosInstance } from "./api/axios"

const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(30),
    username: z.string().min(2).max(30),
})

export default function UserLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "mohammed@gmail.com",
            password: "12345678",
            username: "Mohammed",
        }
    })

    const onSubmit=async values=> {
        const data = await axiosInstance.post("/login",values)
        console.log(data)
    }

    return (
        <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-8 bg-white p-8 rounded-lg shadow-md">
        <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="block text-sm font-medium text-gray-700">Username</FormLabel>
                    <FormControl className="mt-1">
                        <Input placeholder="shadcn" {...field} className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </FormControl>
                    <FormDescription className="mt-2 text-sm text-gray-500">
                        This is your public display name.
                    </FormDescription>
                    <FormMessage className="mt-2 text-sm text-red-500" />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                    <FormControl className="mt-1">
                        <Input placeholder="example@example.com" {...field} className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </FormControl>
                    <FormDescription className="mt-2 text-sm text-gray-500">
                        This is your email address.
                    </FormDescription>
                    <FormMessage className="mt-2 text-sm text-red-500" />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="block text-sm font-medium text-gray-700">Password</FormLabel>
                    <FormControl className="mt-1">
                        <Input type="password" placeholder="password" {...field} className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </FormControl>
                    <FormDescription className="mt-2 text-sm text-gray-500">
                        This is your password.
                    </FormDescription>
                    <FormMessage className="mt-2 text-sm text-red-500" />
                </FormItem>
            )}
        />
        <Button type="submit" className="w-full p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-blue-500 focus:border-blue-500">
            Submit
        </Button>
    </form>
</Form>
    )
}
