import Link from 'next/link';

const IndexRow = props => (
  <div className="row justify-content-center">
    <div className="task_card_box card shadow-lg mb-2">
      <div className="d-flex flex-column flex-md-row">
        <div className="card_col_icon py-4 ">
          <i className="bi bi-clipboard"></i>
        </div>
        <div className="card_col_body  p-2">
          <div className="card-body">
            <Link href={`/posts/${props.save_id}`}>
              <a><h3>{props.title}</h3></a>
            </Link>  
            ID : {props.id} , {props.date} ,  Category : {props.category_name}         
          </div>
        </div>
        <div className="py-4 px-4 ms-auto text-center">
          <Link href={`/posts/${props.save_id}`}>
          <a className="btn btn-secondary btnx-orange">show</a>
          </Link>
        </div>
      </div>
    </div>
  </div>  
);
export default IndexRow;
