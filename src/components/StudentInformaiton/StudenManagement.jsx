import React, { Component } from 'react'

export default class StudenManagement extends Component {
    render() {
        return (
            <div className="card p-0 mt-3">
                <div className="card-header font-weight-bold">USER MANAGEMENT</div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Search by full name..."
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-3 ml-auto">
                        <div className="form-group mb-0">
                            <select className="form-control">
                                <option>All</option>
                                <option>Client</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-light'>
                                <td>1</td>
                                <td>man.nguyen</td>
                                <td>Man Ng</td>
                                <td>man.nguyen@gmail.com</td>
                                <td>085512123123.</td>
                                <td>Client</td>
                                <td>
                                    <button className="btn btn-info mr-2">EDIT</button>
                                    <button className="btn btn-danger">DELETE</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>khai.tran</td>
                                <td>Khai Tran</td>
                                <td>khai.tran@gmail.com</td>
                                <td>085512456456</td>
                                <td>Admin</td>
                                <td>
                                    <button className="btn btn-info mr-2">EDIT</button>
                                    <button className="btn btn-danger">DELETE</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
