import { useUser } from "@clerk/nextjs";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios"

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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(10, {
    message: "Content Must Be At least 10 Characters."
  }).max(4000, {
    message: "Content Cannot Be Longer than 4000 Characters."
  })
});

export const revalidate = 0;

const PostForm = () => {
  const user = useUser();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/api/create', values);

      router.push("/profile");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="h-full">
      <div className="flex sm:ml-72 py-20 items-center justify-center">
        <Card className="lg:w-[800px] md:w-[500px] select-none">
          <CardHeader>
            <CardTitle className="font-bold tracking-tight">
              Create Post
            </CardTitle>
            <CardDescription>
              Create A Public post.
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
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Forms In NextJS 14" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the title that will be displayed in your post.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post Content</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Forms are an integral part of web development, allowing users to interact with and submit data to a website. Next.js, a popular React framework, provides a seamless way to handle forms while leveraging its server-side rendering capabilities." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the content that will be displayed in your post.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Create</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostForm;