"use client";

import { useUser } from "@clerk/nextjs";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/navbar";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const revalidate = 0;

const ProfilePage = () => {
  const router = useRouter();

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: `${user.username}`,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      user.update({
        username: values.username,
      });

      router.push("/feed");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="h-full">
      <Navbar />
      <div className="flex py-20 md:items-center justify-center md:h-full">
        <Card className="w-[350px] select-none">
          <CardHeader>
            <CardTitle className="font-bold tracking-tight">
              Edit Profile
            </CardTitle>
            <CardDescription>
              Profile settings for {user.fullName}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Update</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
