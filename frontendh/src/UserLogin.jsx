import {  Loader} from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {useNavigate} from 'react-router-dom'
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
import { DASHBOARD } from "./router"

const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(30),
})

export default function UserLogin() {
    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "mohammed@gmail.Com",
          password: "12345678"
        },
      });

    const onSubmit = async values => {

          await axiosInstance.get("/sanctum/csrf-cookie",{
            withCredentials: true
          });

          const response = await axiosInstance.post("/login",values,{
            withCredentials: true,
          } );

          if (response.status === 204) {
            navigate(DASHBOARD);
          }

          //  catch (error) {
        //   const errors = error.response?.data?.errors;
        //   if (errors?.email) {
        //     form.setError("email", { message: errors.email.join(", ") });
        //   } else if (errors?.password) {
        //     form.setError("password", { message: errors.password.join(", ") });
        //   } else {
        //     console.error("Erreur inattendue :", error.response || error.message);
        //   }
        // }
      };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-8 bg-white p-8 rounded-lg shadow-md">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, error }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                            <FormControl className="mt-1">
                                <Input placeholder="example@example.com" {...field} className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                            </FormControl>
                            <FormDescription className="mt-2 text-sm text-gray-500">
                                This is your email address.
                            </FormDescription>
                            <FormMessage className="mt-2 text-sm text-red-500">{error && error.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, error }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium text-gray-700">Password</FormLabel>
                            <FormControl className="mt-1">
                                <Input type="password" placeholder="password" {...field} className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                            </FormControl>
                            <FormDescription className="mt-2 text-sm text-gray-500">
                                This is your password.
                            </FormDescription>
                            <FormMessage className="mt-2 text-sm text-red-500">{error && error.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <Button disabled={form.formState.isSubmitting} type="submit" className="w-full p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-blue-500 focus:border-blue-500">
                    {form.formState.isSubmitting  && <Loader className={'mx-2 my-2 animate-spin'}/>}Login
                </Button>
            </form>
        </Form>
    )
}
