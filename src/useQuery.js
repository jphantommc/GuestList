import { useEffect, useState } from "react";

const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api"
const COHORT = "/2502-FTB-ET-WEB-PT"
const API = `${BASE}${COHORT}/guests`;

export default function useQuery(resource) {
    const [data, setdata] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        if (!resource) return;

        const query = async () => {
            setError(null);
            try {
                const response = await fetch(API + resource);
                if (!response.ok) throw Error(`could not query ${resource}.`);
                const result = await response.json();
                setdata(result.data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
            }
            query();
        }, [resource]);
        return { data,error };
}