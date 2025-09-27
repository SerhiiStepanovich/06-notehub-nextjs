"use client";

import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const DetailsPageClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <div>
      <h1>Data client page</h1>
      {data && (
        <>
          <p>title: {data.title}</p>
          <p>content: {data.content}</p>
          <p>categoryId: {data.categoryId}</p>
        </>
      )}
    </div>
  );
};

export default DetailsPageClient;
