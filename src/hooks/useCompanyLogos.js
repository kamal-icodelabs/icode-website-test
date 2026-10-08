import { useState, useEffect } from 'react';
import { companyLogoDetails } from '@/services/service';

export function useCompanyLogos() {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        setState(prev => ({ ...prev, loading: true })); 
        const response = await companyLogoDetails();  
        const data = Array.isArray(response?.data?.data) 
          ? response.data.data 
          : []; 
        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching company logos:', error);
        setState({
          data: [],
          loading: false,
          error: 'Failed to load company logos',
        });
      }
    };

    fetchLogos();
  }, []);

  return state;
}
