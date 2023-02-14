import { EmployeeItem } from './EmployeeItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Manage Employees</h1>

            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No employees</h3>
                )
            }

        </div>
    )
}
