import React, {useState, useEffect} from 'react'
import CourseList from '../CourseList/CourseList'
import styles from './CourseBox.module.scss'
import axios from 'axios'

const CourseBox = props => {
    const [courses, setCourses] = useState([])
    const [searchText, setSearchText] = useState('')
    const [type, setType] = useState('chart')
    const filterCourses = () => {
        return courses.filter(course => 
                        course.name.toLowerCase().includes(searchText.toLowerCase())).filter(course => 
                            course.type === type)
    }
    useEffect(() => {
        axios.get('http://localhost:3000/courses').then(res => {
            console.log(res.data)
            setCourses(res.data)
        }).catch(e => {
            console.log(e)
        })
    },[])
    const onInputChange = e => {
        setSearchText(e.target.value)
    }
    const onSelect = (id) => {
        console.log(courses.find(course => course.id === id))
    }
    const onChartFilter = () => {
        setType('chart')
    }
    const onPublicFilter = () => {
        setType('public')
    }
    return (
        <div className={styles.mainDivP}>
                <p className={styles.p}>جستجوگر درس</p>
                <input
                value={searchText}
                onChange={onInputChange}
                placeholder=" نام درس را تایپ کنید..."/>
                <button className={`${styles.button}`} onClick={onChartFilter} >دروس <span>چارت</span></button>
                <button className={`${styles.button}`} onClick={onPublicFilter}>دروس <span>عمومی</span></button>
                <CourseList onSelect={onSelect} courses={filterCourses()}/>
        </div>
    )
}

export default CourseBox