import { Status } from '@prisma/client';
import { Flex, Card, Text } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const BugSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: 'Opened Bugs', value: open, status: 'OPEN' },
    { label: 'In_Progress', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Closed', value: closed, status: 'CLOSE' },
  ];
  return (
    <Flex gap="3" mb="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              href={`/bugs/list?status=${container.status}`}
              className="font-medium text-lg"
            >
              {container.label}
            </Link>
            <Text size="4" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default BugSummary;