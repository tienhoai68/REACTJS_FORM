import React, { Component } from 'react'
import Form from './Form'
import StudentManagement from './StudentManagement'

export default class StudentInformation extends Component {
  render() {
    return (
        <div className="w-75 mx-auto mt-5">
        <Form />
        <StudentManagement />
      </div>
    )
  }
}
