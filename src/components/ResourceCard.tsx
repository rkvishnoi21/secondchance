import React from 'react';
import { Resource } from '../types';
import { Phone, Users, HeartHandshake } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case 'hotline':
        return <Phone className="h-6 w-6" />;
      case 'support-group':
        return <Users className="h-6 w-6" />;
      case 'counseling':
        return <HeartHandshake className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-teal-50 rounded-full text-teal-600">
          {getIcon()}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
          <p className="text-gray-600 mt-2">{resource.description}</p>
          <div className="mt-4 inline-flex items-center text-teal-600 font-medium">
            {resource.contact}
          </div>
        </div>
      </div>
    </div>
  );
}