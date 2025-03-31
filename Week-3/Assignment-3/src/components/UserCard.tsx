import React from 'react';
import { Mail, User } from 'lucide-react';

interface UserCardProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <User className="w-5 h-5 text-gray-600" />
        <span className="text-lg font-semibold">{name}</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5 text-gray-600" />
        <span className="text-gray-600">{email}</span>
      </div>
    </div>
  );
}