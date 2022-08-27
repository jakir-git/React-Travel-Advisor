import axios from "axios";
  
export const getPlacesData = async (type,sw, ne)=> {
    try{
        const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '1425e056a0msh297018cea860e13p18715ejsn1000a8569ca1',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    }
    catch(error){
        console.log(error)
    }
}