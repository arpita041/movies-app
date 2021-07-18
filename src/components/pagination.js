import  React  from 'react';

const Pagination = ({postsPerPage,totalPosts})=>{
    const pageNumbers=[];

    for(let i=1;i<=Math.cell(totalPosts/postsPerPage);i++){
            pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="Pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination