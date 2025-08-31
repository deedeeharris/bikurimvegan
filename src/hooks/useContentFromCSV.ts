import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContentRow {
  section: string;
  key: string;
  text_en: string;
  text_he: string;
}

export const useContentFromCSV = () => {
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/bikurimvegan/data/content.csv');
        const csvText = await response.text();

        Papa.parse<ContentRow>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              console.error('CSV parsing errors:', results.errors);
              setError('Error parsing content CSV file');
              return;
            }

            const contentMap: Record<string, string> = {};
            results.data.forEach((row) => {
              const key = `${row.section}.${row.key}`;
              contentMap[key] = language === 'en' ? row.text_en : row.text_he;
            });

            setContent(contentMap);
            setLoading(false);
          },
          error: (error: any) => {
            console.error('CSV parsing error:', error);
            setError('Failed to load content');
            setLoading(false);
          },
        });
      } catch (err) {
        console.error('Error fetching content CSV:', err);
        setError('Failed to fetch content');
        setLoading(false);
      }
    };

    loadContent();
  }, [language]); // Reload when language changes

  const getContent = (section: string, key: string): string => {
    return content[`${section}.${key}`] || '';
  };

  return { getContent, loading, error };
};