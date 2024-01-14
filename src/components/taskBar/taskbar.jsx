import {useState, useEffect} from 'react'
import './taskbar.css'

export default function Taskbar() {
	const [time, setTime] = useState(0),
		[date, setDate] = useState(0)
	function updateTime() {
		// Create a new date object
		const now = new Date()

		// Options for formatting the time string
		const timeOptions = {hour: '2-digit', minute: '2-digit'}
		// Format the time string based on the user's locale
		const timeString = now.toLocaleTimeString('en-US', timeOptions)

		// Options for formatting the date string
		const dateOptions = {day: '2-digit', month: '2-digit', year: 'numeric'}
		// Format the date string based on the user's locale
		const dateString = now.toLocaleDateString('en-GB', dateOptions)

		setTime(timeString)
		setDate(dateString)
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			updateTime()
		}, 1000)
		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className='taskbar'>
			<div className='start'>
				<img src='https://cdn.pixabay.com/photo/2021/10/17/14/47/windows-7-logo-6718525_640.png' alt='' />
            </div>
            <div className="right-side">

			<div className='time'>
				<p>{time}</p>
				<p>{date}</p>
                </div>
                <div className="show-desktop"></div>
            </div>
		</div>
	)
}
