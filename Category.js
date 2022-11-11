import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Left from './Left';
import axios from 'axios';

export default function Category(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        var category_name = document.getElementById('category_name').value;
        var category = document.getElementById('category').value;

        if(category_name === '' || category_name === null){
            alert('Choose category name');
        }
        else if(category === '' || category === null){
            alert('enter category');
        }
        else{
            await axios.post("http://localhost:3004/category_insert",datastring,config)
                  .then(function(res){
                        if(res.data.status === 'error'){
                            alert('Unable to insert');
                            window.location.reload();
                        }
                        else if(res.data.status === 'Inserted'){
                            alert('Inserted');
                            window.location.reload();
                        }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.reload();
                  })
        }


    }

    return(
        <>
        <div className="Category">
        <div className="container">
        <Header />
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <Left />
                </div>
                <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center p_style">Category</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <form onSubmit={handlesubmit}>
                    <div className="table-responsive">
                    <table width="100%" className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Category Name</td>
                            <td>
                                <select name="category_name" id="category_name" className="form-control">
                                    <option value="">--choose--</option>
                                    <option value="BRANCH">BRANCH</option>
                                    <option value="ROLE">ROLE</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="category" id="category" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <button type="submit" name="data_submit" id="data_submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}