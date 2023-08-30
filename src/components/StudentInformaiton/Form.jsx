import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addStudent, updateStudent } from '../../stote/actions/studentActions';
import { findCurrentEmail, handleCheckExistCode, handleCheckExistEmail, handleValidate, handleValidatePattern } from '../../validations/validations';

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
        return currentState;
    }
    hanldeInputForm = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    checkValidation = (isAdd, isExistEmail) => {
        let isValid = true;
        if (isAdd) {
            isValid &= handleValidate(this.state.maSV, this.idInputRef.current, "(*) Vui lòng nhập mã") && handleValidatePattern(this.state.maSV, this.idInputRef.current, "(*) MaSV vui lòng nhập số", /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/) && handleCheckExistCode(this.state.maSV, this.idInputRef.current, "(*) MaSV đã tồn tại", this.props.listStudent);
        }
        isValid &= handleValidate(this.state.name, this.nameInputRef.current, "(*) Vui lòng nhập Họ và Tên") && handleValidatePattern(this.state.name, this.nameInputRef.current, "(*) Họ và tên vui lòng nhập chữ cái ", /^[a-zA-Z\sàáạãảâầấậẫẩăằắặẵẳèéẹẽẻêềếệễểđìíịĩỉòóọõỏôồốộỗổơờớợỡởùúụũủưừứựữửỳýỵỹỷ\s]+$/);
        isValid &= handleValidate(this.state.phoneNumber, this.phoneInputRef.current, "(*) Vui lòng nhập số điện thoại") && handleValidatePattern(this.state.phoneNumber, this.phoneInputRef.current, "(*) Số điện thoại vui lòng nhập số", /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/);
        if (isExistEmail) {
            isValid &= handleValidate(this.state.email, this.emailInputRef.current, "(*) Vui lòng nhập email") && handleValidatePattern(this.state.email, this.emailInputRef.current, "(*) Vui lòng nhập email đúng định dạng", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && handleCheckExistEmail(this.state.email, this.emailInputRef.current, "(*) email đã tồn tại", this.props.listStudent);
        }
        return isValid;
    };
    clearInput = () => {
        this.setState({
            id: "",
            maSV: "",
            name: "",
            phoneNumber: "",
            email: "",
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id) {
            let currentEmail = findCurrentEmail(this.state.maSV, this.props.listStudent);
            let student;
            if (currentEmail === this.state.email) {
                student = this.checkValidation(false, false);
            } else {
                student = this.checkValidation(false, true);
            }
            if (student) {
                this.props.dispatch(updateStudent(this.state));
                this.clearInput();
            }
        } else if (this.checkValidation(true, true)) {
            this.props.dispatch(addStudent(this.state));
            this.clearInput();
        }
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
