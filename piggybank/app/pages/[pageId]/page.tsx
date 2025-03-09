import { notFound } from "next/navigation";
import { pageIds, pageMap } from "@/constants/page-map";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: Promise<{ pageId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PageContent({ params }: Props) {
  const pageNum = Number((await params).pageId);
  const ContentComponent = pageMap[pageNum];

  if (!ContentComponent) {
    return notFound();
  }

  return (
    <>
      <ContentComponent />
      <Link href="/learn">
        <Button variant="secondary">Return</Button>
      </Link>
    </>
  );
}

export function generateStaticParams() {
  return pageIds.map((id) => ({ pageId: id }));
}
