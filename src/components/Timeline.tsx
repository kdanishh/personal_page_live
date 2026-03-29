import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics Technical Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">The University of Manchester, UK</h4>
            <p>
             Supporting robotics research by managing diverse fleets of robotic platforms, providing hands-on technical support for multi-modal sensor integration, and mentoring students in applied research projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Postdoctoral Research Associate </h3>
            <h4 className="vertical-timeline-element-subtitle">The University of Sydney, Australia</h4>
            <p>
              Developed real-time perception systems for visually impaired users and hardware prototypes for camera characterization in AR/VR applications.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Professor</h3>
            <h4 className="vertical-timeline-element-subtitle">Kyungpook National University, South Korea</h4>
            <p>
              Led the autonomous vehicle perception team, implementing ROS-based stacks for object detection and multi-sensor fusion (Camera-LiDAR).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Postdoctoral Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Kyungpook National University, South Korea</h4>
            <p>
              Analyzed laser-based and simulated speckle patterns for 3D reconstruction and investigated ML-based depth estimation pipelines.
            </p>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2014 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Kyungpook Natioanl University, South Korea</h4>
            <p>
             Conducted Ph.D. research in computer vision and active 3D sensing, designing structured light systems for industrial 3D measurement.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;