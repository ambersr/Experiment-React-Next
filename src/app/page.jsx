import DocumentCard from "@/components/document/DocumentCard";
import styles from "./page.module.css";

export const metadata = {
  title: 'Home | Experiment React/Next',
}

export default async function Page() {
    const baseUrl = "https://fdnd-agency.directus.app/items/";
    const documentsEndpoint = "adconnect_documents";
    const fields = "?fields=title,id,description,slug,hero_image,source_file,category.*,date";

    const documentUrl = baseUrl + documentsEndpoint + fields;

    const documentsResponse = await fetch(documentUrl);
    const documentsData = await documentsResponse.json();

    const documents = documentsData.data;

    return (

         <main className={styles.main}>
            <h1 style={{textAlign: "center"}}>Overzicht documenten</h1>

            <div className={styles.cards}>
                {documents.map((doc) => (
                    <DocumentCard key={doc.id} document={doc} />
                ))}
            </div>
        </main>

    )
}