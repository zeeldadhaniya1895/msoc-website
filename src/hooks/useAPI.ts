export interface APIHook {
  POST: (url: string, data: any) => Promise<any>;
  GET: (url: string) => Promise<any>;
}

const useAPI = (): APIHook => {
  const POST = async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };

  const GET = async (url: string) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      throw error;
    }
  };

  return { POST, GET };
};

export default useAPI; 