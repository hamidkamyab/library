import { useEffect, useState } from "react";
import * as Vsc from "react-icons/vsc";
import View from "./View";
import Swal from "sweetalert2";

const getBooksLS = ()=>{
  const bookList = JSON.parse(localStorage.getItem('books'));
  if(bookList != null){
    return bookList;
  }else{
    return [];
  }
}

function App() {
  
  const [books,setBooks] = useState(getBooksLS());
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [code,setCode] = useState('');


  const addBook = (e)=>{
    e.preventDefault();
    const book = {
      title,author,code
    }
    const cecked = checkCode(code)
    if(cecked){
      setBooks([...books,book]) 
    }else{
      Swal.fire(
        {
          title:'کد تکراری!',
          text: "این کد قبلا ثبت شده است، کد کتاب نمی تواند تکراری باشد!",
          icon:'warning'
        })
    }
  }

  const checkCode = (code) =>{
    let res = true;
    books.map((item, index) => {
      if(item.code == code){
        res = false;
      }
    });
    return res;
  }

  const delBook = (target)=>{
    const filterBooks = books.filter((book,index)=>{
      return book.code !== target;
    })

    setBooks(filterBooks)
  }

  useEffect(() => {
    if(books != []){
      localStorage.setItem('books',JSON.stringify(books));
    }
  }, [books]);

  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main container">

        <div className="head d-flex align-items-center flex-column p-4">
          <h2 className="d-flex align-items-center gap-2">
            <Vsc.VscBook />
            <p className="m-0 p-0">لیست کتــاب ها</p>
          </h2>
          <span className="text-center">کتاب های خود را به کتابخانه اضافه کنید.</span>
        </div>

        <div className="row">
          <div className="col-5 p-5">
            <div className="form-container p-4">
              <form action="" className="d-flex flex-column gap-3" onSubmit={(e)=>addBook(e)}>
                <div className="form-group">
                  <label htmlFor="title">عنوان (نام) کتاب:</label>
                  <input type="text" id="title" className="form-control form-control-sm" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="author">نویسنده:</label>
                  <input type="text" id="author" className="form-control form-control-sm" onChange={(e)=>setAuthor(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="code">کد:</label>
                  <input type="text" id="code" className="form-control form-control-sm" onChange={(e)=>setCode(e.target.value)} />
                </div>
                <button className="btn btn-sm w-100 btn-success">افـــزودن</button>
              </form>
            </div>
          </div>

          <div className="col-7 p-5">
            <div className="list-container p-4">

              <table className="table table-sm">
                <thead className="border-1 border-top-0 border-start-0 border-end-0 border-black">
                  <tr>
                  <th>کد</th>
                  <th>نام کتاب</th>
                  <th>نویسنده</th>
                  <th className="text-center">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    books.length > 0?
                    <View books={books} delBook={delBook} />
                    :
                    <tr>
                      <td colSpan={4} className="text-center p-2 text-danger bg-light">کتابی در کتابخانه ثبت نشده است!</td>
                    </tr>
                    
                  }
                </tbody>
              </table>

              <button className="btn btn-sm btn-danger w-100" onClick={()=>setBooks([])}>حذف همه</button>
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
