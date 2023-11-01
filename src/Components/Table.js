
export default function Table(props){
    return ( <>
    <table>
        <thead>
          <tr>
            <th>slno</th>
            <th>firstname</th>
            <th>lasttname</th>
            <th>DOB</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td>{props.slno}</td>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.DOB}</td>
          </tr>
        </tbody>
      </table>
      </>);
}
