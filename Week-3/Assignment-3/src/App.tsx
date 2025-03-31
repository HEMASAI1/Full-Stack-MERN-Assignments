import React from 'react';
import { TextUpdater } from './components/TextUpdater';
import { SimpleForm } from './components/SimpleForm';
import { UserCard } from './components/UserCard';
import { Button } from './components/Button';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">1. Text Updater</h2>
          <TextUpdater />
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">2. Simple Form</h2>
          <SimpleForm />
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">3. User Card</h2>
          <UserCard name="Hemasai" email="Hemasaireddy@gmail.com" />
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">4. Custom Button</h2>
          <Button>Click Me</Button>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">5. Login Form</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

export default App;