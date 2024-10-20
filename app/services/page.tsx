import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions to meet your unique business needs.',
      features: [
        'Requirements analysis',
        'Architecture design',
        'Development and testing',
        'Deployment and maintenance',
      ],
    },
    {
      title: 'Web Application Development',
      description: 'Scalable and responsive web applications using cutting-edge technologies.',
      features: [
        'Frontend development (React, Vue, Angular)',
        'Backend development (Node.js, Python, Ruby)',
        'Database design and optimization',
        'API development and integration',
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: [
        'iOS development (Swift)',
        'Android development (Kotlin)',
        'Cross-platform development (React Native, Flutter)',
        'App Store and Google Play deployment',
      ],
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud computing for your business.',
      features: [
        'Cloud migration strategies',
        'AWS, Azure, and Google Cloud expertise',
        'Serverless architecture',
        'DevOps and CI/CD implementation',
      ],
    },
    {
      title: 'AI and Machine Learning',
      description: 'Harness the power of artificial intelligence for your applications.',
      features: [
        'Machine learning model development',
        'Natural Language Processing (NLP)',
        'Computer Vision solutions',
        'AI-powered chatbots and virtual assistants',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing and iteration',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}