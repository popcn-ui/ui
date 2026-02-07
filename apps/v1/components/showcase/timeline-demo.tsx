"use client"

import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from "@/components/ui/timeline"

export function TimelineDemo() {
  return (
    <div className="w-full max-w-md">
      <Timeline>
        <TimelineItem completed>
          <TimelineDot completed />
          <TimelineContent>
            <TimelineTitle>Project Started</TimelineTitle>
            <TimelineDescription>
              Initial planning and setup completed
            </TimelineDescription>
            <TimelineTime>2024-01-01</TimelineTime>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem completed>
          <TimelineDot completed />
          <TimelineContent>
            <TimelineTitle>Development Phase</TimelineTitle>
            <TimelineDescription>
              Core features implemented
            </TimelineDescription>
            <TimelineTime>2024-02-15</TimelineTime>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem active>
          <TimelineDot active />
          <TimelineContent>
            <TimelineTitle>Testing & QA</TimelineTitle>
            <TimelineDescription>
              Currently in testing phase
            </TimelineDescription>
            <TimelineTime>2024-03-20</TimelineTime>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <TimelineTitle>Launch</TimelineTitle>
            <TimelineDescription>
              Planned release date
            </TimelineDescription>
            <TimelineTime>2024-04-01</TimelineTime>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
