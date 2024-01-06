
import { useState } from "react";

const State = () => {
  const [emp] = useState([
    { "empID": 1, "empName": "Tony", "empSalary": 20000 },
    { "empID": 2, "empName": "Tony", "empSalary": 20000 },
    { "empID": 3, "empName": "Tony", "empSalary": 20000 },
    { "empID": 4, "empName": "Tony", "empSalary": 20000 },
    { "empID": 1, "empName": "Tony", "empSalary": 20000 },
    { "empID": 2, "empName": "Tony", "empSalary": 20000 },
    { "empID": 3, "empName": "Tony", "empSalary": 20000 },
    { "empID": 4, "empName": "Tony", "empSalary": 20000 },
  ]);

  return (
    <>
      <table border={1} align="center" cellPadding={10} cellSpacing={10}>
        <thead>
          <tr>
            <td>empID</td>
            <td>empName</td>
            <td>empSalary</td>
          </tr>
        </thead>
        <tbody>
          {
            emp.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.empID} </td>
                  <td>{element.empName} </td>
                  <td>{element.empSalary} </td>
                </tr>
              );
            })
          }
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
};

export default State;
