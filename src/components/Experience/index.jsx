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

const Experience = () => {
  return (
    <Section
    id="experince"
    title="Experience"
    background="dark"
    >
        <div className='sg'>
            <div className='line' />
            <ul className='ui'>
                <li>
                    <Details
                    position='Junior Architect' company='Studio Ek7' 
                    time='2022-Present' address='New Delhi'
                    work=' Their role involves assisting more experienced 
                           architects and contributing to various aspects of architectural 
                           projects.'
                    />

                    <Details
                    position='Trainee' company='Jaiswal & Associates'
                    time='06/2019 - 12/2019' address='New Delhi'
                    work='The internship provided valuable hands-on experience in architectural 
                         design, project management, and collaboration, furthering my development 
                         as an aspiring architect.'

                    />
                </li>
            </ul>
        </div>

    </Section>
  )
}

export default Experience;
