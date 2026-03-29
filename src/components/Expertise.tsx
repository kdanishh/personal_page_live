import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ROS/ROS2",
    "SLAM",
    "Sensor Fusion",
    "OpenCV",
    "PCL",
    "PyTorch",
    "YOLO",
    "PointPillars",
    "C++",
    "Python"
];

const labelsSecond = [
    "UR10",
    "Clearpath Jackal",
    "Boston Dynamics Spot",
    "LiDAR",
    "GNSS/IMU",
    "Stereo Cameras",
    "3D Printing",
    "Fusion 360",
    "Sensor Calibration"
];

const labelsThird = [
    "Gazebo",
    "Isaac Sim",
    "Linux (Ubuntu)",
    "Docker",
    "Git",
    "CI/CD",
    "MATLAB",
    "Simulink",
    "Unit Testing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Robotics & AI</h3>
                    <p>I specialize in developing autonomous perception stacks and real-time navigation systems. My experience spans multi-modal sensor fusion, SLAM, and deploying deep learning models (YOLO, PointPillars) for robust object detection in complex environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Hardware & Mechatronics</h3>
                    <p>I have extensive hands-on experience with diverse robotic hardware, from industrial UR10 arms to mobile platforms like the Clearpath Jackal. I handle the full integration cycle, including CAD design, 3D printing, and high-precision sensor calibration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Software Engineering & Simulation</h3>
                    <p>I bridge the gap between virtual testing and real-world deployment. I utilize advanced simulation environments like Gazebo and Isaac Sim to validate autonomous pipelines before moving to production-ready C++ and Python implementations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;