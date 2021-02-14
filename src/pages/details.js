import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import Navbar from '../components/navbar'
import FileDetails from '../components/file-details'
import PDFViewer from '../components/pdfviewer'

import { Button } from 'evergreen-ui'


import FadeIn from 'react-fade-in';
import bgImg from '../assets/bg-2.png'

import './styles/details.css'

class Details extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let state = this.props.location.state;
        if(!state) {
          return <Redirect to="/explore" />
        }

        let data = state.data;
        if(!data) {
          return <Redirect to="/explore" />
        }
        return (
            <Layout>
                <div id="detailsPage" style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: '0px',
                }}
                >
                <Navbar/>
                <Container><FadeIn>

                <h1><Emoji symbol="✏️"/> {data.title}</h1><br/>

                
                <Button
                    height={40}
                    fontFamily={'Avenir'} >
                    Upvote
                </Button>

                <Button
                    height={40}
                    fontFamily={'Avenir'} >
                    Downvote
                </Button>

                <div style={{height:'auto', overflow:'hidden'}}>
                  <a style={{margin: "auto"}}
                        to={data.pdfurl}
                        className="pdf-anchor d-flex justify-content-center pdf-preview"
                  >
                    <PDFViewer
                      pdfURL={data.pdfurl}
                    />
                  </a>
                </div>

                <FileDetails
                    title={data.title}
                    school={data.school}
                    description={data.description}
                    keywords={data.keywords}
                    url={data.pdfurl}
                />

                </FadeIn></Container>
                </div>
            </Layout>
        );
    }
}

export default Details;