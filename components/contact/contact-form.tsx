"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../ui/select"

const formSchema = z.object({
  clientName: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address"
  }),
  budget: z.string().min(2, {
    message: "You need to select a budget."
  }),
  service: z.string().min(2, {
    message: "you haven't selected a service type."
  }),
  message: z.string().min(2, {
    message: "You haven't written your message content."
  })
})

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: "",
      budget: "",
      service: "",
      message: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-x-10 gap-y-8"
      >
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input placeholder="what's your name?" {...field} />
              </FormControl>
              <FormDescription>
                Your full name will be nice
              </FormDescription>
              {/* <div className="h-5 block"> */}
                <FormMessage />
              {/* </div> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="what's your email?" {...field} />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget</FormLabel>
              <FormControl>
                {/* <Input placeholder="shadcn" {...field} /> */}
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your budget?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-2000">$1000 - $2000</SelectItem>
                    <SelectItem value="2000-3000">$2000 - $3000</SelectItem>
                    <SelectItem value="3000-4000">$3000 - $4000</SelectItem>
                    <SelectItem value="4000+">$4000 or more</SelectItem>
                    <SelectItem value="not-sure">NOT SURE</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Website budget. Select &ldquo;NOT SURE&rdquo; if you are undecided or if it&apos;s not a website you need.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <FormControl>
                {/* <Input placeholder="shadcn" {...field} /> */}
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="What are you interested in?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Need a website</SelectItem>
                    <SelectItem value="project-assistance">Need help with a project</SelectItem>
                    <SelectItem value="hire">Want to employ me full-time</SelectItem>
                    <SelectItem value="partnership">Long term partnership</SelectItem>
                    <SelectItem value="greeting">Just wanted to say Hi!</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="What's your email message?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full md:col-span-2 md:w-fit disabled:cursor-not-allowed cursor-not-allowed"
          disabled={
          form.getValues().budget === '' ||
          form.getValues().service === '' ||
          form.getValues().clientName === '' ||
          form.getValues().message === '' ||
          form.getValues().email === ''
        }>Send email</Button>
      </form>
    </Form>
  )
}
