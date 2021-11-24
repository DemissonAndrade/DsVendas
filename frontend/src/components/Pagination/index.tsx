import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange } : Props) => {

    return (
        <div className="row d-flex justify-content-certer">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disable' : ''} `}>
                        <button className="page-link text-secundary" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link text-primary">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disable' : ''} `}>
                        <button className="page-link text-secundary" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Pagination;