import React from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import pic from '../images/87929.jpg';

const Sidebar = () => {
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: '' }}>
                <div className="row g-0">
                    <div className="col-4 rounded">
                        <img style={{ borderRadius: '100%', width: '100px' }} src={pic} alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Hi, Reader,</h5>
                            <p>Here's your News</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={{ maxWidth: '' }}>
                <div className="row g-0">
                    <div className="">
                        <div className="card-body">
                            <h1 className="card-title">View Toggle</h1>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Vertical View</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Horizontal View</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={{ maxWidth: '' }}>
                <div className="row g-0">
                    <div className="">
                        <div className="card-body">
                            <h1 className="card-title">Have a Feedback?</h1>
                            <div>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    We're Listening!
                                </button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                                            <div class="modal-body">
                                                <form>
                                                    <h2>Thank you so much for taking the time!</h2>
                                                    <p>Please provide the bellow details!</p>
                                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

                                                    <div class="mb-4">
                                                        <div class="form-outline">
                                                            <label class="form-label" for="form6Example1">First name</label>
                                                            <input type="text" id="form6Example1" class="form-control" />

                                                        </div>
                                                    </div>
                                                    <div class="mb-4">
                                                        <div class="form-outline">
                                                            <label class="form-label" for="form6Example2">Last name</label>
                                                            <input type="text" id="form6Example2" class="form-control" />

                                                        </div>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form6Example7">Address</label>
                                                        <textarea class="form-control" id="form6Example7" rows="4"></textarea>

                                                    </div>


                                                    {/* <!-- Text input --> */}
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form6Example3">Country</label>
                                                        <input type="text" id="form6Example3" class="form-control" />

                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form6Example5">Email Id</label>
                                                        <input type="email" id="form6Example5" class="form-control" />

                                                    </div>




                                                    {/* <!-- Number input --> */}
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form6Example6">Phone Number</label>
                                                        <input type="number" id="form6Example6" class="form-control" />

                                                    </div>





                                                    {/* <!-- Submit button --> */}
                                                    <button type="submit" class="btn btn-primary btn-block mb-4">Submit Feedback</button>
                                                </form>
                                            </div>
                                            {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <FeedbackForm /> */}
        </div>
    );
};

export default Sidebar;