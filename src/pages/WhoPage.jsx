
export default function WhoPage() {

    return(
        <>
        
        <main className="mb-5">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold w-50 pb-4">Creiamo spazi che parlano di te</h1>
                    <p className="col-md-8 fs-4 w-100">
                        Nata nel 2018 a Milano, Artémo è una realtà che unisce artigianato tradizionale e design contemporaneo. Ogni pezzo racconta una storia, ogni oggetto è scelto per durare nel tempo.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="card col">
                        <div className="card-body">
                            <h4 className="card-title">Giulia Marchetti</h4>
                            <p className="card-text">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            <h4 className="card-title">Luca Romano</h4>
                            <p className="card-text">Head of design</p>
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            <h4 className="card-title">Sara Ferretti</h4>
                            <p className="card-text">Buyer & curator</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
        </>
    )
}