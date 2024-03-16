export const fetchInventoryData = async () => {
    try {
      const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  