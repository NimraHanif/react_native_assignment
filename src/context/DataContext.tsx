import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../api/apiClient';


export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
};


const STORAGE_KEY = 'CACHED_USERS';


type DataContextType = {
  users: User[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  clearCache: () => Promise<void>;
};

// Create the Context 
const DataContext = createContext<DataContextType | undefined>(undefined);

// The Provider component 
export function DataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetches fresh data from the API
  const fetchFromApi = async () => {
    try {
      setError(null);
      const response = await apiClient.get<User[]>('/users');
      setUsers(response.data);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
    } catch (err) {
      setError('Something went wrong while fetching users. Please try again.');
    }
  };

 //refresh
  const refetch = async () => {
    setLoading(true);
    await fetchFromApi();
    setLoading(false);
  };

  
  const clearCache = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setUsers([]);
    setError(null);
  };

  // Runs once when the app first starts
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Step 1: check AsyncStorage first
      try {
        const cached = await AsyncStorage.getItem(STORAGE_KEY);
        if (cached) {
          setUsers(JSON.parse(cached)); 
          setLoading(false);
        }
      } catch (err) {
        
      }


      await fetchFromApi();
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ users, loading, error, refetch, clearCache }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}