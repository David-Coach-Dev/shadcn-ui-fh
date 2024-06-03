'use client'
//import { EyeNoneIcon} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeOpenIcon, HomeIcon, ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button onClick={() => console.log("Click")}>Click me</Button>
      <Button variant="success">Success</Button>
      <Button capitalize={false}>capitalize</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" />Login with Email
      </Button>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild >
        <Link href="/"><HomeIcon className="mr-2 h-4 w-4" /> Home</Link>
      </Button>
    </div>
  );
}
