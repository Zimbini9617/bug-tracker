import React from 'react';
import { Card, Table, Flex, Heading, Avatar } from '@radix-ui/themes';
import prisma from '@/prisma/client';
import Link from 'next/link';
import { BugStatusBadge } from './components';
;

const LatestBugs = async () => {
  const bugs = await prisma.bug.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card>
      <Heading size="4" mb="5" className="border-b-2 text-zinc-500">
        LATEST BUGS
      </Heading>
      <Table.Root>
        <Table.Body>
          {bugs.map((bug) => (
            <Table.Row key={bug.id}>
              <Table.Cell>
                <Flex justify="between" align="center">
                  <Flex direction="column" gap="3" align="start">
                    <Link href={`/bugs/${bug.id}`}>{bug.title}</Link>
                    <BugStatusBadge status={bug.status} />
                  </Flex>
                  <Avatar
                    src={bug.assignedToUser?.image!}
                    fallback="?"
                    size="4"
                    radius="full"
                  />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestBugs;