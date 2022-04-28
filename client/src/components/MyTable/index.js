import React from "react";

import "./style.scss";

function MyTable({ children, header, title }) {
  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {header &&
              header.map((element, index) => {
                return <th key={index}>{element}</th>;
              })}
          </tr>
        </thead>
        <tbody>{children}</tbody>

        <tfoot>
          <td colspan="5" className="tablefoot"></td>
        </tfoot>
      </table>
    </>
  );
}

export default MyTable;
