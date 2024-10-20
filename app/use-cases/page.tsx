import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UseCases() {
  const useCases = [
    {
      title: 'E-commerce Platform',
      industry: 'Retail',
      description: 'A scalable online shopping solution for a retail giant, featuring product management, user accounts, and secure payment processing.',
      image: 'https://source.unsplash.com/800x600/?ecommerce',
      results: [
        '50% increase in online sales',
        'Improved user engagement',
        'Streamlined inventory management',
      ],
    },
    {
      title: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'An integrated system for managing patient records, appointments, and billing for a network of hospitals.',
      image: 'https://source.unsplash.com/800x600/?healthcare',
      results: [
        'Reduced administrative workload by 30%',
        'Improved patient care coordination',
        'Enhanced data security and compliance',
      ],
    },
    {
      title: 'FinTech Mobile App',
      industry: 'Finance',
      description: 'A secure and user-friendly mobile banking application with features like account management, transfers, and investment tracking.',
      image: 'https://source.unsplash.com/800x600/?finance',
      results: [
        '200% increase in mobile transactions',
        'Improved customer satisfaction scores',
        'Reduced customer support calls',
      ],
    },
    {
      title: 'IoT Smart Home Solution',
      industry: 'Consumer Electronics',
      description: 'An integrated platform for connecting and controlling smart devices in modern homes, including lighting, thermostats, and security systems.',
      image: 'https://source.unsplash.com/800x600/?smarthome',
      results: [
        'Increased energy efficiency by 25%',
        'Improved home security',
        'Enhanced user convenience and control',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Use Cases</h1>
      
      <div className="space-y-12">
        {useCases.map((useCase, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>Industry: {useCase.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{useCase.description}</p>
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}