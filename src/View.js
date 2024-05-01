import React from 'react'
import * as Vsc from "react-icons/vsc";

function View({ books }) {
    return (
        books.map((book,index) => 
            <tr key={index}>
                <td>{book.code}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className="text-center delete"><Vsc.VscTrash size={18} role="button" /></td>
            </tr>
        )
    )
}

export default View