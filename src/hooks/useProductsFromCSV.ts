import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import type { Product } from '@/data/products';

interface CSVProduct {
  id: string;
  name_en: string;
  name_he: string;
  description_en: string;
  description_he: string;
  image_main: string;
  image_2: string;
  image_3: string;
  image_4: string;
  category: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  ingredients_en: string;
  ingredients_he: string;
  price: string;
  price_currency: string;
}

export const useProductsFromCSV = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/bikurimvegan/data/products.csv');
        const csvText = await response.text();

        Papa.parse<CSVProduct>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              console.error('CSV parsing errors:', results.errors);
              setError('Error parsing CSV file');
              return;
            }

            const formattedProducts: Product[] = results.data.map((row) => ({
              id: row.id,
              name: {
                en: row.name_en,
                he: row.name_he,
              },
              description: {
                en: row.description_en,
                he: row.description_he,
              },
              price: parseFloat(row.price) || 0,
              currency: row.price_currency || '₪',
              image: row.image_main,
              images: [
                row.image_main,
                row.image_2,
                row.image_3,
                row.image_4
              ].filter(img => img && img.trim() !== ''),
              ingredients: {
                en: row.ingredients_en.split(', '),
                he: row.ingredients_he.split(', '),
              },
              nutrition: {
                calories: parseInt(row.calories) || 0,
                protein: parseInt(row.protein) || 0,
                fat: parseInt(row.fat) || 0,
                carbs: parseInt(row.carbs) || 0,
              },
              category: row.category,
            }));

            setProducts(formattedProducts);
            setLoading(false);
          },
          error: (error: any) => {
            console.error('CSV parsing error:', error);
            setError('Failed to load products');
            setLoading(false);
          },
        });
      } catch (err) {
        console.error('Error fetching CSV:', err);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};