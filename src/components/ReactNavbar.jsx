import '../App.css'
export default function ReactNavbar() {

  return (
<>
<div className="container-fluid px-0">
    <nav className="navbar navbar-expand-md navbar-light bg-white p-0">
        <a className="navbar-brand mr-4" href="/"><strong> نیکس بیری کار(API)</strong></a>

        <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">خبرونه<span className="fa fa-angle-down"></span></a>
                    <div className="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row d-flex tab">
                                    <div className="fa-icon text-center">
                                            <span className="fa fa-newspaper"></span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a className="dropdown-item"   href="/an">
                                                <h6 className="mb-0">اسیای خبرونه</h6>
                                        
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row d-flex tab">
                                    <div className="fa-icon text-center">
                                            <span className="fa fa-tv"></span>
                                        </div>
                                          <div className="d-flex flex-column">
                                             <a className="dropdown-item"  href="/wn">
                                                <h6 className="mb-0"> غربی خبرونه</h6>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row d-flex tab">
                                    <div className="fa-icon text-center">
                                            <span className="fa fa-skating"></span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a className="dropdown-item" href="/sports">
                                                <h6 className="mb-0">لوبې</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row d-flex tab">
                                    <div className="fa-icon text-center">
                                            <span className="fa fa-cloud"></span>
                                        </div>
                                          <div className="d-flex flex-column">
                                            <a className="dropdown-item" href="/weather">
                                                <h6 className="mb-0">د هوا حالات</h6>
                                               
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other<span className="fa fa-angle-down"></span></a>
                    <div className="dropdown-menu" id="dropdown-menu3" aria-labelledby="navbarDropdown3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row d-flex tab">
                                        <div className="fa-icon text-center">
                                            <span className="fa fa-map"></span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a className="dropdown-item" href="/celb">
                                                <h6 className="mb-0">Celebrity</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row d-flex tab">
                                        <div className="fa-icon text-center">
                                            <span className="fa fa-question"></span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a className="dropdown-item" href="#">
                                                <h6 className="mb-0">FAQs</h6>
                                                <small className="text-muted">Qs and answers</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  
</div>

</> 
);
};