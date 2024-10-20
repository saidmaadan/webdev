import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://source.unsplash.com/300x300/?portrait,man' },
    { name: 'Jane Smith', role: 'CTO', image: 'https://source.unsplash.com/300x300/?portrait,woman' },
    { name: 'Mike Johnson', role: 'Lead Developer', image: 'https://source.unsplash.com/300x300/?portrait,man,2' },
    { name: 'Sarah Brown', role: 'UX Designer', image: 'https://source.unsplash.com/300x300/?portrait,woman,2' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About DevCo</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg mb-4">
          Founded in 2010, DevCo has been at the forefront of software innovation for over a decade. Our journey began with a simple mission: to empower businesses through technology. Today, we're proud to be a leading software development company, trusted by clients worldwide.
        </p>
        <p className="text-lg mb-4">
          At DevCo, we believe in the power of technology to transform businesses and improve lives. Our team of passionate developers, designers, and strategists work tirelessly to turn ideas into reality, creating software solutions that drive growth and efficiency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We constantly push the boundaries of what's possible in software development.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We're committed to delivering high-quality, robust solutions that stand the test of time.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We believe in the power of teamwork and close collaboration with our clients.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}