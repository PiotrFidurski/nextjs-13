const API_URL = 'https://baconipsum.com/api/?callback=?type=all-meat'

async function getData() {
    const response = await fetch(API_URL);

    const data = await response.json();

    return { data };
}


export default async function AboutPage() {

    const { data } = await getData()
    
    if(!data) return null;

    return <div dangerouslySetInnerHTML={{__html:data}} style={{minHeight:'2000px'}}></div>
}