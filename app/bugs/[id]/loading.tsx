import { Heading, Flex, Card } from '@radix-ui/themes';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactMarkdown from 'react-markdown';
import BugStatusBadge from '../BugStatusBadge';

const LoadingBugDetailsPage = () => {
  return (
    <div>
    <Heading><Skeleton /></Heading>
    <Flex gap='4' my='4'>
    <Skeleton />
    <Skeleton />
    </Flex>
    <Card className='prose' my='4'>
    <Skeleton height="16rem" />
    </Card>
  </div>
  )
}

export default LoadingBugDetailsPage;