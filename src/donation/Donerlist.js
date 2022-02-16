import React from 'react'

function Donerlist(props) {
    let data = props.List;
    

    let Row = data.map((elements, index) => {
        //console.log(data)
        return (<tr key={index}>
            <th scope="row">{index +1}</th>
            <td>{elements.name}</td>
            <td>{elements.email}</td>
            <td>{elements.mob}</td>
            <td>{elements.amount} INR</td>
        </tr>);
    });
    return (
        <>
            <h2>Donner List</h2>
            {data.length > 0 ? <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">Donation Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {Row}
                </tbody>
            </table> : <h4> No donner yet</ h4>}
        </>
    )
}

export default Donerlist