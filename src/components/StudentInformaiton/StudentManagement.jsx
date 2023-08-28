import React, { Component } from 'react'
import { connect } from 'react-redux'

class StudentManagement extends Component {
    renderContent = () => {
        return this.props.listStudent.map((student, index) => {
            const backGround =  index % 2 === 0 ? "bg-secondary text-white" : "bg-info text-white";
            const { maSV, name, phoneNumber, email } = student;
            return (
                <tr key={maSV} className={backGround}>
                    <td>{maSV}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>
                        <button className="btn btn-success mr-2">EDIT</button>
                        <button className="btn btn-danger">DELETE</button>
                    </td>
                </tr>

            )
        })
    };
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
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderContent()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listStudent: state.studentReducer.listStudent,
    }
}

export default connect(mapStateToProps)(StudentManagement)