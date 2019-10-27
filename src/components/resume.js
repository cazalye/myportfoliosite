import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
                <Grid className="resume-grid">
                    <Cell className="resume-col resume-left-col" col={4}> 
                        <div className="resume-col-content"></div>      
                        <h2>Emma Cazaly</h2>
                        <hr/>
                        <h5>A designer who codes</h5>
                        <p>I create inspiring websites, evocative designs and catchy copy. My work centers around adventure, conscious living and environmental awareness.</p>
                    </Cell>
                    <Cell className="resume-col resume-right-col" col={8}> 
                        <h2>Education</h2>  
                        <Education 
                            startYear={2004} 
                            endYear={2008}
                            schoolName="University of Tasmania"
                            schoolDescription="Bachelor of Medical Research with First Class Honours"
                        />
                        <Education
                            startYear={2012} 
                            endYear={2016}
                            schoolName="University of Tasmania"
                            schoolDescription="PhD in Medicine"
                        />
                        <hr/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName="Post-doctoral Researcher"
                            jobDescription="Decription of responsibilities and outcomes"
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="PhD Candidate"
                            jobDescription="A cross-disciplinary wet lab & bioinformatics PhD examining genetic and epigenetic predisposition to familial prostate cancer."
                        />
                        <Experience
                            startYear={2013}
                            endYear={2016}
                            jobName="Tertiary Level Teaching"
                            jobDescription="Throughout my PhD candidature I engaged in casual teaching roles including tutoring, laboratory demonstrating and marking."
                        />
                        <Experience
                            startYear="June"
                            endYear="Sep 2016"
                            jobName="Marketing Assistant"
                            jobDescription="Decription of responsibilities and outcomes"
                        />
                         <hr/>
                         <h2>Skills</h2>
                        <Skills
                            skill="html"
                            progress={30}
                        />
                        <Skills
                            skill="css"
                            progress={20}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={10}
                        />
                        <Skills
                            skill="React"
                            progress={5}
                        />
                        <Skills
                            skill="Adobe"
                            progress={50}
                        />
                    </Cell>
                </Grid>
        )
    }
}

export default Resume;

