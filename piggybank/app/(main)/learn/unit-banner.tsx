import { NotebookText } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type UnitBannerProps = {
  pageId: number;
  title: string;
  description: string;
  isActive: boolean;
};

export const UnitBanner = ({
  title,
  description,
  isActive,
  pageId,
}: UnitBannerProps) => {
  const pageLink = `/pages/${pageId}`;
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-violet-700 p-5 text-white">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <Link href={pageLink}>
          <Button
            size="lg"
            variant="secondary"
            className="border-2 border-b-4 active:border-b-2"
          >
            Learn
          </Button>
        </Link>
        {isActive && (
          <Link href="/lesson">
            <Button
              size="lg"
              variant="secondary"
              className="border-2 border-b-4 active:border-b-2"
            >
              <NotebookText className="mr-2" />
              Continue
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
