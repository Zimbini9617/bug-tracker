import React from 'react';
import { Status, Bug } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

const statusMap:Record<
Status,
{label: string, color: 'orange' | 'green' | 'blue'}> = {
  OPEN:{ label: 'Open', color: 'orange' },
  IN_PROGRESS:{ label: 'In progress', color: 'green' },
  CLOSE:{ label: 'Close', color: 'blue' },
}
const BugStatusBadge = ({status}: {status:Status}) => {
  return (
  <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default BugStatusBadge