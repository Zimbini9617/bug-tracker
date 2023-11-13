'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import React from 'react';

const statuses: { label: string, value?: Status }[] = [
  { label: 'All' },
  { label: 'Opened', value: 'OPEN' },
  { label: 'In_Progress', value: 'IN_PROGRESS' },
  { label: 'Closed', value: 'CLOSE' },
];
const BugStatusFilter = () => {
  const router = useRouter();
  return (
    <Select.Root onValueChange={(status)=>{
      const query = status ? `?status=${status}` :
      '';
      router.push(`/bugs/list${query}`);
    }}>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.label} value={status.value!}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default BugStatusFilter;