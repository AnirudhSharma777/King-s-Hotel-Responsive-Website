"use client";

import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

interface CalenderProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[]
}

const Calender: React.FC<CalenderProps> = ({
    value,
    disabledDates,
    onChange
}) => {
    return (
        <div>
            <DateRange
             ranges={[value]}
             date={new Date()}
             rangeColors={['#262626']}
             onChange={onChange}
             direction='vertical'
             showDateDisplay={false}
             minDate={new Date()}
             disabledDates={disabledDates}
            />
        </div>
    )
}

export default Calender