import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function About() {
  return (
    <div>
      <header>
        <h1>A FEW WORDS ABOUT ME</h1>
        <p>I'm Damian Watracz, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
        <p>Over the past 9 years I have been working with big companies and rising startups around the world as a designer and art director, working solo and leading small design teams. In my spare time I enjoy photography and motorcycle adventures.</p>
      </header>
      <main>
        <h2>My Services</h2>
        <Card>
          <CardHeader>
            <CardTitle>My Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Web design</li>
              <li>Graphics design</li>
              <li>Digital Marketing</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tools I use</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>React</li>
              <li>Next js</li>
              <li>Django</li>
            </ul>
          </CardContent>
        </Card>
        <h2>Experience</h2>
        <p>Over two years of working experience</p>
      </main>
    </div>
  )
}
