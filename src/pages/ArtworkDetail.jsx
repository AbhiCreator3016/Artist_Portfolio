
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { artworksData } from '@/data/artworks';
import { ArrowLeft, Share2, Heart } from 'lucide-react';

const ArtworkDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [artwork, setArtwork] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Find the artwork by ID
    const foundArtwork = artworksData.find(art => art.id === parseInt(id));
    
    // Check if this artwork is in favorites (localStorage)
    const favorites = JSON.parse(localStorage.getItem('favoriteArtworks') || '[]');
    const isInFavorites = favorites.includes(parseInt(id));
    setIsFavorite(isInFavorites);
    
    setTimeout(() => {
      setArtwork(foundArtwork);
      setIsLoading(false);
    }, 800);
  }, [id]);
  
  const handleAddToCart = () => {
    // Simulate adding to cart
    toast({
      title: "Added to Cart",
      description: `${artwork.title} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const handleShare = () => {
    // Simulate sharing functionality
    toast({
      title: "Share Link Copied",
      description: "Artwork link has been copied to clipboard.",
      duration: 3000,
    });
  };
  
  const handleToggleFavorite = () => {
    // Get current favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteArtworks') || '[]');
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(favId => favId !== artwork.id);
      localStorage.setItem('favoriteArtworks', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      
      toast({
        title: "Removed from Favorites",
        description: `${artwork.title} has been removed from your favorites.`,
        duration: 3000,
      });
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, artwork.id];
      localStorage.setItem('favoriteArtworks', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      
      toast({
        title: "Added to Favorites",
        description: `${artwork.title} has been added to your favorites.`,
        duration: 3000,
      });
    }
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading artwork details...</p>
        </div>
      </div>
    );
  }
  
  // Not found state
  if (!artwork) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Artwork Not Found</h2>
          <p className="text-gray-600 mb-6">The artwork you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/gallery">Return to Gallery</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <Link to="/gallery" className="inline-flex items-center text-gray-600 hover:text-accent mb-8 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Gallery
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24 bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[3/4]">
                <img  
                  className="w-full h-full object-cover" 
                  alt={artwork.title}
                 src="https://images.unsplash.com/photo-1682584238387-3a935b4d8a34" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{artwork.title}</h1>
                <p className="text-accent text-xl font-medium mb-6">${artwork.price.toLocaleString()}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Share artwork"
                >
                  <Share2 size={20} />
                </button>
                <button 
                  onClick={handleToggleFavorite}
                  className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-red-100 text-red-500 hover:bg-red-200' : 'bg-gray-100 hover:bg-gray-200'}`}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 my-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-sm">Medium</p>
                  <p className="font-medium">{artwork.medium}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Size</p>
                  <p className="font-medium">{artwork.size}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Year</p>
                  <p className="font-medium">{artwork.year}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Availability</p>
                  <p className={`font-medium ${artwork.available ? 'text-green-600' : 'text-red-600'}`}>
                    {artwork.available ? 'Available' : 'Sold'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About this Artwork</h2>
              <p className="text-gray-700 mb-4">{artwork.details}</p>
            </div>
            
            {artwork.available ? (
              <div className="space-y-4">
                <Button onClick={handleAddToCart} size="lg" className="w-full">
                  Add to Cart
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  For inquiries about this artwork, please <Link to="/contact" className="text-accent hover:underline">contact us</Link>.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">This artwork has been sold</h3>
                <p className="text-gray-600 mb-4">
                  Interested in similar works by Michael Anderson? Contact us for information about available pieces or commission opportunities.
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Gallery</Link>
                </Button>
              </div>
            )}
            
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">Shipping & Returns</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-medium">Shipping:</span> All artworks are professionally packed and shipped with insurance. Domestic shipping within the US typically takes 5-7 business days. International shipping is available and typically takes 10-14 business days.
                </p>
                <p>
                  <span className="font-medium">Returns:</span> We want you to be completely satisfied with your purchase. If you're not happy with your artwork, you may return it within 14 days of delivery for a full refund, minus shipping costs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
