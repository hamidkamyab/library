import * as Vsc from "react-icons/vsc";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main container">

        <div className="head d-flex align-items-center flex-column p-4">
          <h2 className="text-center">لیست کتــاب ها</h2>
          <span className="text-center">لیست کتاب های خود را به کتابخانه اضافه کنید.</span>
        </div>

        <div className="row">
          <div className="col-5 p-5">
            <div className="form-container p-4">
              <form action="" className="d-flex flex-column gap-3">
                <div className="form-group">
                  <label htmlFor="title">عنوان (نام) کتاب:</label>
                  <input type="text" id="title" className="form-control form-control-sm" />
                </div>
                <div className="form-group">
                  <label htmlFor="author">نویسنده:</label>
                  <input type="text" id="author" className="form-control form-control-sm" />
                </div>
                <div className="form-group">
                  <label htmlFor="code">کد:</label>
                  <input type="text" id="code" className="form-control form-control-sm" />
                </div>
                <button className="btn btn-sm w-100 btn-success">افـــزودن</button>
              </form>
            </div>
          </div>

          <div className="col-7 p-5">
            <div className="list-container p-4">

              <table className="table table-sm">
                <thead className="border-1 border-top-0 border-start-0 border-end-0 border-black">
                  <th>کد</th>
                  <th>نام کتاب</th>
                  <th>نویسنده</th>
                  <th className="text-center">حذف</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>مزرعه حیوانات</td>
                    <td>جورج اورول</td>
                    <td className="text-center delete"><Vsc.VscTrash size={18} role="button" /></td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>1984</td>
                    <td>جورج اورول</td>
                    <td className="text-center delete"><Vsc.VscTrash size={18} role="button" /></td>
                  </tr>
                </tbody>
              </table>

              <button className="btn btn-sm btn-danger w-100">حذف همه</button>
            </div>
          </div>
        </div>


      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
