import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    Student Information
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Code</label>
                                    <input type="text" className="form-control" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-warning mr-2">SAVE</button>
                        <button className="btn btn-outline-dark">RESET</button>
                    </form>
                </div>
            </div>
        )
    }
}
