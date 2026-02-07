"use client"

import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Single Date</label>
        <DatePicker date={date} onDateChange={setDate} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Date Range</label>
        <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
      </div>
    </div>
  )
}
