import React from 'react';
import pic from '../images/87929.jpg'

const Paper = (props) => {
    const { title, summary, published, link } = props.paper;
    return (
        <div>

            <a style={{ textDecoration: 'none', textColor: 'black' }} href={link} target="popup" onClick={() => window.open({ link }, 'popup')}>
                <div className="card mb-3" style={{ maxWidth: '' }}>
                    <div className="row g-0">
                        <div className="col-4 rounded">
                            <img style={{ borderRadius: '100%', width: '100px' }} src={pic} alt="..." />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p>{summary}</p>
                                <p>{published}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div >
    );
};

export default Paper;