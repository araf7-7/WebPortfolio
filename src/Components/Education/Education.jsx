import { IoBookSharp } from "react-icons/io5";
import { BsMortarboardFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
    return (
        <div name='About' className="pt-10 min-h-screen px-10">
            <h1 className="text-4xl inline font-bold border-b-4">Education</h1>
            <p>

            </p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FDE047', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FDE047' }}
                    date="2010 - 2021"
                    iconStyle={{ background: '#FDE047', color: 'black ' }}
                    icon={<IoBookSharp />}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">Secondary School Certificate</h3>
                    <p>
                      Passed In <span className="font-bold">2021</span>.
                    </p>
                    <p>
                     <span className="font-bold">Institution:</span> Jatrabari Ideal School And College, Dhaka-1204, Bangladehsh
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FDE047', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FDE047' }}
                    date="2022 - Present"
                    iconStyle={{ background: '#FDE047', color: 'black' }}
                    icon={<BsMortarboardFill />}
                >
                    <h3 className=" font-semibold vertical-timeline-element-title">Computer Science</h3>
                    <h3 className="font-semibold vertical-timeline-element-title">Diploma In Engineering</h3>
                    <p>
                    <span className="font-bold">Institution:</span> Shyamoli Ideal Polytechnic Institute
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
};

export default Education;