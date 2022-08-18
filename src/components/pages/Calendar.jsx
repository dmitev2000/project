import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './Pages.css';

const Calendar = () => {
  return (
    <div className='container pb-5 pt-5 calendar-page'>
        <h1>Calendar</h1>
        <CalendarComponent></CalendarComponent>
    </div>
  )
}

export default Calendar;