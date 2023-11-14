'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const statuses: { label: string, value?: Status }[] = [
  { label: 'All' },
  { label: 'Opened', value: 'OPEN' },
  { label: 'In_Progress', value: 'IN_PROGRESS' },
  { label: 'Closed', value: 'CLOSE' },
];
const BugStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Select.Root defaultValue={searchParams.get('status') || ''} onValueChange={(status)=>{
      const params = new URLSearchParams();
      if(status) params.append('status', status)
      if(searchParams.get('orderBy'))
      params.append('orderBy', searchParams.get('orderBy')!)
      const query = params.size ? `?${params.toString()}` :
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