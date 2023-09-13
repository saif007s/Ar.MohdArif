import React from 'react'
import Section from '../shared/section';
import "./style.scss";


const Details = ({position, company, time, address, work}) => {
    return <li className='conatiner'>
        <div>
            <h3 className='pos'>{position}&nbsp;@{company}</h3>
            
            <span className='s'>
                {time} | {address}
            </span>
            <p className='wo'>
                {work}
            </p>
        </div>
    </li>

}

const Education = () => {
  return (
    <Section
    id="education"
    title="Education"
    background="light"
    >
        <div className='sg'>
            <div className='line' />
            <ul className='ui'>
                <li>
                    <Details
                    position='Master of Architecture' company='Jamia Millia Islamia' 
                    time='08/2020 - 07/2022, ' address='New Delhi'
                    work='8.18 CGPA'
                    />

                    <Details
                    position='BACHELORS OF ARCHITECTURE' company='National Institute of Technology'
                    time='06/2015 - 07/2020' address='Patna'
                    work='6.38 CGPA'

                    />
                    <Details
                    position='INTERMEDIATE' company='Madhaw Singh College'
                    time='03/2013 - 07/2014' address=' Tajpur (Saran)'
                    work='64.2 %'

                    />
                    <Details
                    position='MATRICULATION' company='High School Pachlakhi'
                    time='04/2010 - 06/2011' address='Siwan'
                    work='60.4 %'

                    />
                    
                </li>
            </ul>
        </div>

    </Section>
  )
}

export default Education;
