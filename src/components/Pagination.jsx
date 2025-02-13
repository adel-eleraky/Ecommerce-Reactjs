import { useState, useEffect } from "react";
import "./css/Pagination.css"

const Pagination = ({ page, products, handleSearchParams }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window size on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil((products?.length || 0) / 10);

    // Determine how many pages to show based on screen size
    const maxVisiblePages = windowWidth < 576 ? 3 : windowWidth < 768 ? 5 : windowWidth < 992 ? 7 : 10;

    let paginationItems = [
        <li key="prev" className={`page-item ${page <= 1 ? "disabled" : ""}`}>
            <a className="page-link" role="button" onClick={() => {
                window.scroll(0, 0)
                handleSearchParams("page", page - 1)
            }}>
                Previous
            </a>
        </li>
    ];

    // Generate page numbers dynamically with responsive logic
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 || // Always show first page
            i === totalPages || // Always show last page
            (i >= page - Math.floor(maxVisiblePages / 2) && i <= page + Math.floor(maxVisiblePages / 2)) // Show middle pages dynamically
        ) {
            paginationItems.push(
                <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
                    <a className="page-link" role="button" onClick={() => {
                        window.scroll(0, 0)
                        handleSearchParams("page", i)
                    }}>
                        {i}
                    </a>
                </li>
            );
        } else if (
            (i === page - Math.floor(maxVisiblePages / 2) - 1 || i === page + Math.floor(maxVisiblePages / 2) + 1) &&
            totalPages > maxVisiblePages
        ) {
            paginationItems.push(
                <li key={`dots-${i}`} className="page-item disabled">
                    <span className="page-link">...</span>
                </li>
            );
        }
    }

    paginationItems.push(
        <li key="next" className={`page-item ${page >= totalPages ? "disabled" : ""}`}>
            <a className="page-link" role="button" onClick={() => {
                window.scroll(0 , 0)
                handleSearchParams("page", page + 1)
            }}>
                Next
            </a>
        </li>
    );

    return (
        <nav aria-label="Page navigation example" className="w-100 d-flex justify-content-center">
            <ul className="pagination flex-wrap justify-content-center">
                {paginationItems}
            </ul>
        </nav>
    );
};

export default Pagination;
