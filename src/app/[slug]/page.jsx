import styles from "./page.module.css";

export const metadata = {
  title: 'Document | Experiment React/Next',
}

export default async function Page({ params }) {
    const { slug } = await params;
    
    // Data from Directus API
    const baseUrl = "https://fdnd-agency.directus.app/items/";
    const documentEndpoint = "adconnect_documents"
    const fields = "fields=title,id,description,slug,hero_image,source_file.*,date";
    const filter = `?filter[slug][_eq]=${slug}`;

    // Convert data to json
    const documentResponse = await fetch(`${baseUrl}${documentEndpoint}${filter}&${fields}`);
    const documentData = await documentResponse.json();

    const document = documentData.data?.[0];

    return (
    <main className={styles.main}>
        <h1>{document.title}</h1>
        <p>{document.description}</p>
    </main>
  )
}