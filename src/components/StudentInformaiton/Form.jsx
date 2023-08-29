import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addStudent, updateStudent } from '../../stote/actions/studentActions';

class Form extends Component {
    idInputRef = createRef();
    nameInputRef = createRef();
    phoneInputRef = createRef();
    emailInputRef = createRef();
    state = {
        maSV: "",
        name: "",
        phoneNumber: "",
        email: "",
    };
    static getDerivedStateFromProps(nextProps, currentState) {

        if (nextProps.selectedStudent && nextProps.selectedStudent.maSV !== currentState.maSV) {
            currentState = nextProps.selectedStudent;
        }
        // console.log({
        //     "nextProps": nextProps,
        //     "curentState": currentState,
        // });
        return currentState;
    }
    hanldeInputForm = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,

        });
    };

    handleValidate = (value, ref, mess) => {
        if (value) {
            ref.innerHTML = "";
            return true;
        }
        ref.innerHTML = mess;
        return false;
    };

    handleValidatePattern = (value, ref, mess, letter) => {
        if (letter.test(value)) {
            ref.innerHTML = "";
            return true;
        }
        ref.innerHTML = mess;
        return false;
    }
    hanleCheckExistId = (value, ref, mess) => {
        let isExist = false;
        this.props.listStudent.forEach(employee => {
            if (Number(value) === employee.maSV) {
                isExist = true;
            }
        });
        if (isExist) {
            ref.innerHTML = mess;
            return false;
        }
        ref.innerHTML = "";
        return true;
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.maSV);
        // console.log(findStudent);
        // masv.map((element) => {
            //     console.log(element.maSV);
            //   return  element.maSV === this.state.maSV}
            //     )
            // console.log(masv);
            const findStudent = this.props.listStudent.find((user) => {
                return user.maSV === this.state.maSV;
            });
            console.log(findStudent);
            let isValid = true;
            // && this.hanleCheckExistId(this.state.maSV, this.idInputRef.current, "(*) MaSV đã tồn tại")
            isValid &= this.handleValidate(this.state.maSV, this.idInputRef.current, "(*) Vui lòng nhập maSV") && this.handleValidatePattern(this.state.maSV, this.idInputRef.current, "(*) MaSV vui lòng nhập số", /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/) ;
            isValid &= this.handleValidate(this.state.name, this.nameInputRef.current, "(*) Vui lòng nhập Họ và tên") && this.handleValidatePattern(this.state.name, this.nameInputRef.current, "(*) Họ và tên vui lòng nhập chữ cái ", /^[a-zA-Z\sàáạãảâầấậẫẩăằắặẵẳèéẹẽẻêềếệễểđìíịĩỉòóọõỏôồốộỗổơờớợỡởùúụũủưừứựữửỳýỵỹỷ\s]+$/);
            isValid &= this.handleValidate(this.state.phoneNumber, this.phoneInputRef.current, "(*) Vui lòng nhập số điện thoại") && this.handleValidatePattern(this.state.phoneNumber, this.phoneInputRef.current, "(*) Số điện thoại vui lòng nhập số", /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/);
            isValid &= this.handleValidate(this.state.email, this.emailInputRef.current, "(*) Vui lòng nhập email") && this.handleValidatePattern(this.state.email, this.emailInputRef.current, "(*) Vui lòng nhập email đúng định dạng", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (isValid) {
            // console.log(findStudent.maSV);
            debugger
            if (this.state.maSV) {
                console.log(123);
                this.props.dispatch(addStudent(this.state))
            } else if (findStudent.maSV === this.state.maSV) {
                this.props.dispatch(updateStudent(this.state))
            }
        }
        // this.setState({
        //     maSV: "",
        //     name: "",
        //     phoneNumber: "",
        //     email: "",
        // })
    };

    render() {
        return (
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    Student Information
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Code</label>
                                    <input value={this.state.maSV} onChange={this.hanldeInputForm} name='maSV' type="text" className="form-control" />
                                    <span ref={this.idInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input value={this.state.name} onChange={this.hanldeInputForm} name='name' type="text" className="form-control" />
                                    <span ref={this.nameInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input value={this.state.phoneNumber} onChange={this.hanldeInputForm} name='phoneNumber' type="text" className="form-control" />
                                    <span ref={this.phoneInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={this.state.email} onChange={this.hanldeInputForm} name='email' type="text" className="form-control" />
                                    <span ref={this.emailInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-warning mr-2">SAVE</button>
                        <button type='reset' className="btn btn-outline-dark">RESET</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listStudent: state.studentReducer.listStudent,
        selectedStudent: state.studentReducer.selectedStudent,
    }
}
export default connect(mapStateToProps)(Form);
