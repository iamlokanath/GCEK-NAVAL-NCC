import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <h2 className="text-center text-white font-weight-bold">About Us</h2>
            <h4 className="text-left text-white font-weight-bold ml-3 my-3">GCEK NAVAL NCC</h4>
            <p className="text-justify text-white ml-3">The National Cadet Corps (NCC) unit at Government College of Engineering Kalahandi is a highly active and dedicated group of students
                who have committed themselves to serving the nation through<br /> discipline, hard work, and community service.
                The unit aims to develop qualities such as leadership, team spirit, and social responsibility among its cadets,
                and provides them with opportunities<br /> to participate in various training programs, camps, and competitions at the state and national levels.
                The NCC unit at Government College of Engineering Kalahandi is known for its exceptional<br /> performance in events such as
                Republic Day Parade, Thal Sainik Camp, and National Integration Camp, and has produced many confident and responsible citizens
                who are contributing positively to the society.</p>
            <button type="button" className="btn btn-dark my-2 ml-3 text-white font-weight">Read more</button>

            <div className="lokancontainer">
                <div className="card lokanathcard my-3 bg-dark">
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-white font-weight-bold">Care Taking Officer
                            Niranjan Behera</h5>
                        <p className="card-text text-white">Niranjan Behera is the CTO of the NCC
                            unit at Government College of Engineering,
                            Kalahandi. He is a highly motivated individual
                            with a strong passion for serving the nation
                            through his work in the NCC.  As the CTO, Niranjan is responsible for overseeing the technical aspects of the unit's operations, including equipment maintenance, communication systems, and training programs. </p>
                            <button type="button" className="btn btn-secondary my-2 ml-3 text-white font-weight">Read more</button>
                    </div>
                </div>
                <div className="card lokanathcard my-3 bg-dark">
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-white font-weight-bold">Senior Cadet Captain
                            Ashok Kumar Panda</h5>
                        <p className="card-text text-white">Ashok Kumar Panda is the Senior Under Officer (SUO) of the National Cadet Corps (NCC) unit at Government College of Engineering Kalahandi. He is a highly motivated and enthusiastic cadet who is known for his exceptional leadership skills and dedication to serving the nation.</p>
                        <button type="button" className="btn btn-secondary my-2 ml-3 text-white font-weight">Read more</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About