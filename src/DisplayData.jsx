import React from 'react'

const DisplayData = ({data}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>College Name</th>
                <th>Established Year</th>
                <th>Building</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Landmark</th>
                <th>Courses</th>
            </tr>
        </thead>
        <tbody>
                {
                    data?.map((ele, i) => {
                        let {collegeName, establishmentYear, Address:{building, street, city, state, pincode, landmark}, courses} = ele
                        console.log(collegeName)
                        return (
                            <tr>
                                <td>{i}</td>
                                <td>{collegeName}</td>
                                <td>{establishmentYear}</td>
                                <td>{building}</td>
                                <td>{street}</td>
                                <td>{city}</td>
                                <td>{state}</td>
                                <td>{pincode}</td>
                                <td>{landmark}</td>
                                <td>{courses?.map(ele => {
                                    return ele
                                })}</td>
                            </tr>
                        )
                    })
                }
        </tbody>
    </table>
  )
}

export default DisplayData