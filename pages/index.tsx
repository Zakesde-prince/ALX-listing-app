import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <Card
        title="Cozy Apartment"
        description="A modern apartment in the heart of the city."
        imageUrl="/assets/placeholder-house.jpg"
      />
      <div className="mt-4">
        <Button onClick={() => alert('You clicked the button!')}>Book Now</Button>
      </div>
    </main>
  );
};

export default Home;
