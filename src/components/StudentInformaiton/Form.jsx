import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../../stote/actions/studentActions';

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

    hanldeInputForm = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value,

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
        console.log(letter);
        if (value.match(letter)) {
            ref.innerHTML = "";
            return true;
        }
        ref.innerHTML = mess;
        return false;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        let isValid = true;
        isValid &= this.handleValidate(this.state.id, this.idInputRef.current, "(*) Vui lòng nhập maSV")&& this.handleValidatePattern(this.state.id, this.idInputRef.current, "(*) MaSV vui lòng nhập số", /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/);
        isValid &= this.handleValidate(this.state.name, this.nameInputRef.current, "(*) Vui lòng nhập Họ và tên") && this.handleValidatePattern(this.state.name, this.nameInputRef.current, "(*) Họ và tên vui lòng nhập chữ cái ", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        isValid &= this.handleValidate(this.state.phoneNumber, this.phoneInputRef.current, "(*) Vui lòng nhập số điện thoại");
        isValid &= this.handleValidate(this.state.email, this.emailInputRef.current, "(*) Vui lòng nhập email");
        if(isValid) {
            this.props.dispatch(addStudent(this.state));
        }
        this.setState({
            maSV: "",
            name: "",
            phoneNumber: "",
            email: "",
        })
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
                                    <input onChange={this.hanldeInputForm} name='maSV' type="text" className="form-control" />
                                    <span ref={this.idInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input onChange={this.hanldeInputForm} name='name' type="text" className="form-control" />
                                    <span ref={this.nameInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input onChange={this.hanldeInputForm} name='phoneNumber' type="text" className="form-control" />
                                    <span ref={this.phoneInputRef} className="text-danger font-weight-bold"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input onChange={this.hanldeInputForm} name='email' type="text" className="form-control" />
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
        listStudent : state.studentReducer.listStudent,
    }
}
export default connect(mapStateToProps)(Form);
