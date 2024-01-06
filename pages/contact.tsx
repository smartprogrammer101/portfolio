import React from 'react'
import { useRouter } from 'next/router'
import ContactForm from '@/components/contact/contact-form'
import { cn } from '@/lib/utils'

export default function Contact() {
  const router = useRouter()
  const sendEmail = () => {
    router.push('/api/send')
  }
  return (
    <div>
      <div className='p-10 flex flex-col gap-10 max-w-[1000px] mx-auto'>
        <p className={cn(
          'max-w-xl mx-auto lg:max-w-2xl tracking-wide text-xl lg:text-2xl lg:text-center',
          'text-muted-foreground'
        )}>Got a project? Drop me a line if you want to work together on something exciting. Big or small.</p>
        {/* <button onClick={sendEmail}>send email</button> */}
        <ContactForm />
      </div>
    </div>
  )
}
