import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default async function getData() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getToken } = useKindeAuth();
  
    try {
      const accessToken = await getToken();
      console.log(`access token: ${accessToken}`);
      
      const res = await fetch(`http://localhost:4000/protected`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
          
        }
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
  
      const { data } = await res.json();
      console.log({ data });
    } catch (err) {
      console.error('Error fetching data:', err);
    }


  }
  