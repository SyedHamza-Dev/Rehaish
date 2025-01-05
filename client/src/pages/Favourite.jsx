import { useEffect, useState } from 'react';
import ListingItem from '../components/ListingItem'; // Adjust the import path as needed

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Favorite Properties</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite properties found.</p>
      ) : (
        <div className="flex flex-wrap gap-16">
          {favorites.map((property) => (
            <ListingItem listing={property} key={property._id} /> // Use the ListingItem component
          ))}
        </div>
      )}
    </div>
  );
}
