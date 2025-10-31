import Button from '@/components/button/Button'

import DocumentCard from "@/components/document/DocumentCard";

export default async function Page() {
    const baseUrl = "https://fdnd-agency.directus.app/items/";
    const documentsEndpoint = "adconnect_documents";
    const fields = "?fields=title,id,description,slug,hero_image,source_file,category.*,date";

    const documentUrl = baseUrl + documentsEndpoint + fields;

    const documentsResponse = await fetch(documentUrl);
    const documentsData = await documentsResponse.json();

    const documents = documentsData.data;

    return (
        <main>

            <h1>Hello, Next.js!</h1>
            <Button/>

            <ul>
                {documents.map((doc) => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
            </ul>
        </main>
    )
}