import { BugStatusBadge } from '@/app/components'
import { Bug } from '@prisma/client'
import { Heading, Flex, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const BugDetails = ({ bug }:{ bug: Bug }) => {
  return (
    <>
    <Heading>{bug.title}</Heading>
        <Flex gap='4' my='4'>
          <BugStatusBadge status={bug.status} />
          <p>{bug.createdAt.toDateString()}</p>
        </Flex>
        <Card className='prose max-w-full' my='4'>
          <ReactMarkdown>{bug.description}</ReactMarkdown>
        </Card>
        </>
  )
}

export default BugDetails