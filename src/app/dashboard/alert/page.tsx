import {
  RocketIcon,
  InfoCircledIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  CheckCircledIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Page() {
  return (
    <div className="grid gap-4">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Default - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="outline">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Outline - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="subtle">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Subtle - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Info - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircledIcon className="h-4 w-4" />
        <AlertTitle>Success - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Warning - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <TrashIcon className="h-4 w-4" />
        <AlertTitle>Destructive - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="accent">
        <EyeNoneIcon className="h-4 w-4" />
        <AlertTitle>Accent - Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
