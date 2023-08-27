import Benefits from '@/components/Benefits'
import Blog from '@/components/Blog'
import Card from '@/components/Card'
import Count from '@/components/Count'
import Discount from '@/components/Discount'
import FirstStep from '@/components/FirstStep'
import Hero from '@/components/Hero'
import Instructors from '@/components/Instructors'
import Resources from '@/components/Resources'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <FirstStep></FirstStep>
      <Discount></Discount>
      <Card></Card>
      <Blog></Blog>
      <Instructors></Instructors>
      <Benefits></Benefits>
      <Resources></Resources>
      <Count></Count>
      <Testimonial></Testimonial>
    </main>
  )
}
