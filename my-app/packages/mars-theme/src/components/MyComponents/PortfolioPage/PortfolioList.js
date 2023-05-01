const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]


function PortfolioList ({column,styevariation}){
    return (
        <>
            {
                PortfolioListContent.map((res,index)=>{
                    return(
                        <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${res.image}`}></div>
                                <div className={`bg-blr-image ${res.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{res.category}</p>
                                    <h4><a href="/portfolio-details">{res.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
};

export default PortfolioList;