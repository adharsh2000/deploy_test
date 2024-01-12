export const GetApiFetching = async (url) => {
    let data =null;
    let loading =true;
    let errorMessage =""
    try {
       // const headers = { 'Authorization': `Bearer ${token}` };
        const response = await fetch(url);
        const jsonData = await response.json();
        data = jsonData
        loading = false
    } catch (error) {
        errorMessage = error.message
        loading = false
    }
    let response = { data, loading, errorMessage }
    return response;
};