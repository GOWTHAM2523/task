import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Left from './Left';

export default function Dashboard(){
    return(
        <>
        <div className="container">
        <Header />
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <Left />
                </div>
                <div className="col-lg-9">&nbsp;</div>
            </div>
        </div>
        </>
    )
}