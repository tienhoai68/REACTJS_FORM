import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStudent, selectedStudent, setEditing } from '../../stote/actions/studentActions';
import Swal from 'sweetalert2';
class StudentManagement extends Component {
    state = {
        keyword: "",
    };
    renderContent = () => {
        const data = this.props.listStudent.filter((element) => {
            return element.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
        })
        return data.map((student, index) => {
            const backGround = index % 2 === 0 ? "bg-secondary text-white" : "bg-info text-white";
            const { maSV, name, phoneNumber, email } = student;
            return (
                <tr key={maSV} className={backGround}>
                    <td>{maSV}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>
                        {/* <button onClick={() => this.props.dispatch(selectedStudent(student))} className="btn btn-success mr-2">EDIT</button> */}
                        <button
                            onClick={() => {
                                this.props.dispatch(selectedStudent(student));
                                // Cập nhật state isEditing thành true khi nhấn nút "EDIT"
                                this.props.dispatch(setEditing(true));
                            }}
                            className="btn btn-success mr-2"
                        >
                            EDIT
                        </button>
                        <button onClick={() =>
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    this.props.dispatch(deleteStudent(student))
                                    Swal.fire(
                                        `Delete  success!`,
                                        'Your data has been deleted.',
                                        'success'
                                    )
                                }
                            })
                        } className="btn btn-danger">DELETE</button>
                    </td>
                </tr >

            )
        })
    };
    handleChange = (event) => {
        this.setState({
            keyword: event.target.value,
        })
    }
    render() {
        return (
            <div className="card p-0 mt-3">
                <div className="card-header font-weight-bold">USER MANAGEMENT</div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                onChange={this.handleChange}
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
                                <th>Code</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
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