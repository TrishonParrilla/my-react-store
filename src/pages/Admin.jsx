import "./Admin.css";
function Admin(){
    return(
        <>
            <h1 className="store-admin-title">Store Administration</h1>

            <section className="admin-form-container">
                <h2 className="admin-form-title"> Add products</h2>
                <div className="form-controller">
                    <label>Title:</label>
                    <input type="text"/>
                </div>

                <div className="form-controller">
                    <label>Category:</label>
                    <input type="text" />
                </div>

                <div className="form-controller">
                    <label>Image</label>
                    <input type="text"/>
                </div>

                <div className="form-controller">
                    <label>Price</label>
                    <input type="number"/>
                </div>
                <div>
                    <button className="store-admin-button">Save</button>
                </div>
            </section>
            
       </>
    )
}

export default Admin;